// ==========================================
// script.js - v4.2 (修复变量冲突 & 作用域问题)
// ==========================================

// 1. 全局配置 (⚠️ 使用 var 修复 "Identifier already declared" 错误)
var SUPABASE_URL = 'https://mjmpvgyyeqalcocuizwb.supabase.co';
// 你的 Anon Key
var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qbXB2Z3l5ZXFhbGNvY3VpendiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NzU1MzcsImV4cCI6MjA4MTQ1MTUzN30.M8S9zElBiuvVaDWTeiwRN0YeTsDqrlfzNVvCzX8-9sQ';

// 你的 UID (⚠️ 使用 var 修复报错)
var ALLOWED_UID = '63ac44b9-7dc2-4827-ba39-9669e4f39147'; 

// 尝试初始化 Supabase (⚠️ 使用 var)
var _supabase = null;
if (window.supabase) {
    _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("✅ Supabase SDK 初始化成功");
} else {
    console.error("❌ 严重错误: window.supabase 未定义！请检查 HTML 中 Supabase SDK 的引入顺序是否在 script.js 之前！");
}

// 全局状态 (⚠️ 使用 var 以防重复加载)
var state = {}; 
var aiTags = "";  
var aiConfig = {
    key: localStorage.getItem('sd_ai_key') || '',
    base: localStorage.getItem('sd_ai_base') || 'https://api.siliconflow.cn/v1',
    model: localStorage.getItem('sd_ai_model') || 'Qwen/Qwen2.5-7B-Instruct'
};

// ==========================================
// 2. 权限检查逻辑
// ==========================================
async function checkAuth() {
    console.log("🔍 开始执行权限检查...");

    // 如果是登录页，跳过
    if (window.location.pathname.includes('login.html')) {
        console.log("ℹ️ 当前是登录页，跳过检查");
        return;
    }

    if (!_supabase) {
        console.error("⛔ Supabase SDK 未加载，无法检查权限");
        return; 
    }

    // 获取会话
    const { data: { session }, error } = await _supabase.auth.getSession();

    if (error) {
        console.error("❌ 获取会话出错 (可能是浏览器拦截):", error);
        alert("⚠️ 浏览器阻止了数据存储，请关闭‘跟踪防护’后刷新页面！");
        return;
    }

    if (!session) {
        console.warn("⚠️ 未检测到用户会话 (未登录)");
        console.warn("🛑 为防止无限循环，已暂停自动跳转。请手动去 login.html 登录。");
        
        // 🚨 如果你解决了浏览器拦截问题，想恢复自动跳转，请取消下面这行的注释：
        // window.location.href = 'login.html'; 
    } else {
        console.log("✅ 检测到登录用户:", session.user.email);
        
        if (session.user.id !== ALLOWED_UID) {
            console.error("❌ UID 不匹配！ID:", session.user.id);
            alert("你没有权限访问此页面 (UID 不匹配)");
            await _supabase.auth.signOut();
            window.location.href = 'login.html';
        } else {
            console.log("🎉 认证通过！欢迎管理员。");
        }
    }
}
// 立即执行检查
checkAuth();


// ==========================================
// 3. 全局功能函数 (必须暴露在外面，供按钮调用)
// ==========================================

function rollAll() {
    console.log("🎲 点击了 rollAll");
    
    // 检查 database.js 是否加载 (rollSingle 通常在 database.js 或其他文件中定义)
    // 这里我们做一个安全检查
    if (typeof rollSingle === 'undefined') {
        console.error("❌ rollSingle 函数未定义。请检查 database.js 或其他逻辑文件是否已加载。");
        alert("系统正在加载中，或 database.js 加载失败，请稍后再试。");
        return;
    }
    
    try {
        for (const k in state) {
            if (state[k] && state[k].enabled && !state[k].locked) {
                rollSingle(k);
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
    
    // 遍历 state 拼接结果
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
        // 降级方案
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        showToast("✅ 复制成功！");
    });
}

// AI 设置相关
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
    
    const btn = mode === 'scene' ? document.querySelector('button[onclick="callAI(\'scene\')"]') : document.querySelector('button[onclick="callAI(\'translate\')"]');
    const oldTxt = btn ? btn.innerText : "...";
    if(btn) { btn.innerText = "⏳"; btn.disabled = true; }

    try {
        const sys = "You are a Stable Diffusion prompt generator. Output format: Positive Tags /// Negative Tags. Use '///' separator. Output only the tags.";
        const prompt = mode === 'translate' ? `Translate to English tags: ${inputEl.value}` : `Generate scene tags for: ${inputEl.value}`;
        
        let url = aiConfig.base.endsWith('/chat/completions') ? aiConfig.base : aiConfig.base.replace(/\/$/, "") + '/chat/completions';
        
        const res = await fetch(url, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${aiConfig.key}` 
            },
            body: JSON.stringify({ 
                model: aiConfig.model, 
                messages: [{role:"system",content:sys},{role:"user",content:prompt}], 
                temperature: 0.7 
            })
        });

        const d = await res.json();
        if(d.error) throw new Error(d.error.message);
        
        const txt = d.choices[0].message.content;
        
        if(txt.includes("///")) {
            const p = txt.split("///"); 
            aiTags = p[0].trim();
        } else {
            aiTags = txt.trim();
        }
        
        showToast("✨ AI 生成完毕");
        buildFinalString();
        
    } catch (e) {
        alert("AI 请求失败: " + e.message);
    } finally {
        if(btn) { btn.innerText = oldTxt; btn.disabled = false; }
    }
}

// ==========================================
// 5. 页面加载初始化
// ==========================================
window.onload = function() {
    console.log("🚀 页面加载完成");

    const grid = document.getElementById('cardGrid');
    if (grid) {
        // 尝试初始化 (initGenerator 需要在其他文件中定义，通常是 database.js)
        if (typeof initGenerator === 'function') {
            initGenerator(grid);
        } else {
            console.warn("initGenerator 函数未定义，等待 database.js 加载...");
        }
    }
};