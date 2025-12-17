import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mjmpvgyyeqalcocuizwb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qbXB2Z3l5ZXFhbGNvY3VpendiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NzU1MzcsImV4cCI6MjA4MTQ1MTUzN30.M8S9zElBiuvVaDWTeiwRN0YeTsDqrlfzNVvCzX8-9sQ';
const LOGIN_PATH = '/login.html'; 

// !!! 关键修正点：移除了 '/'。现在所有未在列表中的路径，包括 '/', '/index.html', '/generator.html'，都需要登录才能访问。
const PUBLIC_PATHS = [
    LOGIN_PATH, 
    '/style.css', 
    '/script.js', 
    '/database.js',
    
    // START: Data 文件夹下的静态文件
    '/data/character.js', 
    '/data/clothing.js', 
    '/data/docs.js',
    '/data/driver.js',
    '/data/init.js', 
    '/data/styles.js',
    '/data/writing.js',
    // END: Data 文件夹下的静态文件
]; 

export const onRequest = async (context) => {
  const { request, next } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;

  // 1. 检查是否为公共路径
  if (PUBLIC_PATHS.includes(pathname)) {
    return next();
  }

  // 2. 初始化 Supabase 客户端（专为 Cloudflare Worker/Middleware 环境配置）
  // 核心：设置 storage 选项，让 Supabase 从请求的 Cookie 中读取 session
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      storageKey: 'supabase',
      storage: {
        // 从请求的 Cookie 中读取 session
        getItem: (key) => context.request.headers.get('Cookie')?.match(new RegExp(`(^| )` + key + `=([^;]*)`))?.[2] || null,
        setItem: () => {}, // Worker 环境不需要写入 Cookie，由 login.html 处理
        removeItem: () => {},
      },
    },
  });

  // 3. 尝试获取用户会话
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    // 未登录用户，重定向到登录页面
    return Response.redirect(url.origin + LOGIN_PATH, 302);
  }

  // 4. 已登录，继续请求主应用内容
  return next();
}