// ==========================================
// script.js - v4.0 (调试专用版 - 禁止自动跳转)
// ==========================================

// 1. 全局配置 (使用 var 兼容性更好)
var SUPABASE_URL = 'https://mjmpvgyyeqalcocuizwb.supabase.co';
// 请确保 Key 完整
var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qbXB2Z3l5ZXFhbGNvY3VpendiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NzU1MzcsImV4cCI6MjA4MTQ1MTUzN30.M8S9zElBiuvVaDWTeiwRN0YeTsDqrlfzNVvCzX8-9sQ';

// 你的 UID
const ALLOWED_UID = '3547ffb9-5dc0-4f08-af3c-1c79f9a3abea'; 

// 尝试初始化 Supabase
var _supabase = null;
if (window.supabase) {
    _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("✅ Supabase SDK 初始化成功");
} else {
    console.error("❌ 严重错误: window.supabase 未定义！请检查 HTML 中 Supabase SDK 的引入顺序是否在 script.js 之前！");
}

// 全局状态
const state = {}; 
let aiTags = "";  
let aiConfig = {
    key: localStorage.getItem('sd_ai_key') || '',
    base: localStorage.getItem('sd_ai_base') || 'https://api.siliconflow.cn/v1',
    model: localStorage.getItem('sd_ai_model') || 'Qwen/Qwen2.5-7B-Instruct'
};

// ==========================================
// 2. 权限诊断 (不跳转，只报错)
// ==========================================
async function checkAuth() {
    console.log("🔍 开始执行权限检查...");

    // 如果是登录页，直接跳过
    if (window.location.pathname.includes('login.html')) {
        console.log("ℹ️ 当前是登录页，跳过检查");
        return;
    }

    if (!_supabase) {
        console.error("⛔ 权限检查终止: Supabase SDK 未加载。");
        alert("系统错误: Supabase SDK 未加载，请检查网络或代码引用顺序。");
        return; 
    }

    // 获取会话
    const { data: { session }, error } = await _supabase.auth.getSession();

    if (error) {
        console.error("❌ 获取会话出错:", error);
        return;
    }

    if (!session) {
        console.warn("⚠️ 未检测到用户会话 (未登录)");
        console.warn("🛑 调试模式: 已暂停跳转到 login.html，请手动跳转。");
        // window.location.href = 'login.html'; // 调试期间注释掉
    } else {
        console.log("✅ 检测到登录用户:", session.user.email);
        console.log("🆔 当前用户 UID:", session.user.id);
        console.log("🔐 要求匹配 UID:", ALLOWED_UID);

        if (session.user.id !== ALLOWED_UID) {
            console.error("❌ UID 不匹配！你不是管理员。");
            console.warn("🛑 调试模式: 已暂停强制登出和跳转。");
            // await _supabase.auth.signOut(); // 调试期间注释掉
            // window.location.href = 'login.html';
        } else {
            console.log("🎉 认证完全通过！欢迎回来。");
        }
    }
}
// 执行检查
checkAuth();


// ==========================================
// 3. 全局功能函数 (修复 ReferenceError)
// ==========================================
// ⚠️ 这些函数现在直接暴露在最外层，不要包裹在 window.onload 里

function rollAll() {
    console.log("🎲 点击了 rollAll");
    // 检查 database.js 是否加载
    if (typeof database === 'undefined' && typeof rollSingle === 'undefined') {
        alert("❌ database.js 未加载，无法生成！");
        return;
    }
    
    // 这里的 rollSingle 需要你的 database.js 提供
    // 如果 database.js 也没加载好，这里会报错
    try {
        for (const k in state) {
            if (state[k].enabled && !state[k].locked) {
                if (typeof rollSingle === 'function') {
                    rollSingle(k);
                }
            }
        }
        buildFinalString();
    } catch (e) {
        console.error("执行 rollAll 时出错:", e);
    }
}

function copyFinal() { 
    const out = document.getElementById('finalOutput'); 
    if (out) copyToClipboard(out.value); 
}

function buildFinalString() {
    let finalString = aiTags.trim() ? aiTags.trim() + ",\n" : "";
    for (const key in state) {
        if (state[key] && state[key].currentValue) {
            finalString += state[key].currentValue + ",\n";
        }
    }
    finalString = finalString.replace(/,\s*$/, ""); 
    const out = document.getElementById('finalOutput');
    if (out) out.value = finalString;
}

// ==========================================
// 4. 工具函数
// ==========================================

function showToast(msg) {
    let t = document.getElementById('toast');
    if (!t) {
        t = document.createElement('div');
        t.id = 'toast';
        t.className = 'toast';
        document.body.appendChild(t);
    }
    t.innerText = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2000);
}

function copyToClipboard(text) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
        showToast("✅ 复制成功！");
    }).catch(err => {
        console.error(err);
        alert("复制失败，请手动复制");
    });
}

// AI 相关函数
function openSettings() {
    const modal = document.getElementById('settingsModal');
    if (modal) {
        document.getElementById('apiKey').value = aiConfig.key;
        document.getElementById('apiBase').value = aiConfig.base;
        document.getElementById('apiModel').value = aiConfig.model;
        modal.classList.add('show');
    }
}
function closeSettings() {
    const modal = document.getElementById('settingsModal');
    if (modal) modal.classList.remove('show');
}
function saveSettings() {
    const key = document.getElementById('apiKey').value;
    const base = document.getElementById('apiBase').value;
    const model = document.getElementById('apiModel').value;
    if (!key) { alert("请输入 API Key"); return; }
    aiConfig = { key, base, model };
    localStorage.setItem('sd_ai_key', key);
    localStorage.setItem('sd_ai_base', base);
    localStorage.setItem('sd_ai_model', model);
    closeSettings();
    showToast("⚙️ 设置已保存");
}
async function callAI(mode) {
    if (!aiConfig.key) { openSettings(); return; }
    const inputEl = document.getElementById('aiInput');
    if (!inputEl || !inputEl.value.trim()) { showToast("⚠️ 请先输入内容"); return; }
    
    // 简化的 AI 逻辑
    const btn = mode === 'scene' ? document.querySelector('button[onclick="callAI(\'scene\')"]') : document.querySelector('button[onclick="callAI(\'translate\')"]');
    const oldTxt = btn ? btn.innerText : "...";
    if(btn) { btn.innerText = "⏳"; btn.disabled = true; }

    try {
        // ... (AI 请求逻辑保持不变)
        // 为节省篇幅，这里假设请求成功
        // 你原来的代码逻辑没问题
        showToast("✨ AI 功能暂略(为排查登录)");
    } catch (e) {
        alert("AI Error: " + e.message);
    } finally {
        if(btn) { btn.innerText = oldTxt; btn.disabled = false; }
    }
}

// ==========================================
// 5. 页面初始化 (window.onload)
// ==========================================
window.onload = function() {
    console.log("🚀 页面加载完成");

    const grid = document.getElementById('cardGrid');
    if (grid) {
        // 尝试初始化
        if (typeof initGenerator === 'function') {
            initGenerator(grid);
        } else {
            console.warn("initGenerator 函数未定义，可能是 database.js 未加载");
        }
    }
};