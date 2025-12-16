// ==========================================
// script.js - v3.0 (最终修复版 - 认证 & 结构)
// ==========================================

// 1. 全局配置 (使用 var 避免重复声明错误)
var SUPABASE_URL = 'https://mjmpvgyyeqalcocuizwb.supabase.co';
// ⚠️ 确保这个 Anon Key 是你从 Supabase 后台复制的完整、正确的 Key
var SUPABASE_ANON_KEY = 'seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qbXB2Z3l5ZXFhbGNvY3VpendiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NzU1MzcsImV4cCI6MjA4MTQ1MTUzN30.M8S9zElBiuvVaDWTeiwRN0YeTsDqrlfzNVvCzX8-9sQ';

const _supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

// 你的唯一用户ID (用于只允许你一人访问)
const ALLOWED_UID = '3547ffb9-5dc0-4f08-af3c-1c79f9a3abea'; 

// 全局状态与配置
const state = {}; 
let aiTags = "";  
let aiConfig = {
    key: localStorage.getItem('sd_ai_key') || '',
    base: localStorage.getItem('sd_ai_base') || 'https://api.siliconflow.cn/v1',
    model: localStorage.getItem('sd_ai_model') || 'Qwen/Qwen2.5-7B-Instruct'
};

// ==========================================
// 2. 核心认证和权限检查
// ==========================================
async function checkAuth() {
    // 如果是登录页，不检查
    if (window.location.pathname.includes('login.html')) return;

    if (!_supabase) {
        console.error("Supabase SDK 未加载");
        window.location.href = 'login.html'; 
        return;
    }

    const { data: { session }, error } = await _supabase.auth.getSession();

    if (!session || error) {
        // 未登录或会话错误，跳转到登录页
        window.location.href = 'login.html';
    } else {
        // 关键：强制检查 UID
        if (session.user.id !== ALLOWED_UID) {
            console.error("❌ 未授权用户访问，强制登出!");
            await _supabase.auth.signOut();
            window.location.href = 'login.html';
            return;
        }
        console.log("✅ 用户已登录:", session.user.email);
    }
}
checkAuth();


// ==========================================
// 3. 全局可调用函数 (解决 ReferenceError: rollAll/copyFinal is not defined)
// 这些函数必须在全局作用域下才能被 HTML 的 onclick 事件调用
// ==========================================

// 解决 ReferenceError: rollAll is not defined
function rollAll() {
    // 假设 rollSingle 存在于 database.js 或其他全局加载的文件中
    // 你的原有逻辑：遍历所有状态并滚动
    for (const k in state) {
        // ⚠️ 注意：rollSingle 函数必须在你加载的其他 JS 文件中定义
        if (typeof rollSingle !== 'undefined' && state[k].enabled && !state[k].locked) {
            rollSingle(k); 
        } else if (typeof rollSingle === 'undefined') {
            console.error("rollSingle 函数未找到，请确保 database.js 已正确加载。");
        }
    }
    buildFinalString();
}

// 解决 ReferenceError: copyFinal is not defined
function copyFinal() { 
    const out = document.getElementById('finalOutput'); 
    if (out) copyToClipboard(out.value); 
}

// 组合最终提示词字符串
function buildFinalString() {
    let finalString = aiTags.trim() ? aiTags.trim() + ",\n" : "";
    
    // 假设 state.key.currentValue 已经包含值
    for (const key in state) {
        if (state[key].currentValue) {
            finalString += state[key].currentValue + ",\n";
        }
    }
    
    // 移除末尾逗号和换行
    finalString = finalString.replace(/,\s*$/, ""); 
    
    const out = document.getElementById('finalOutput');
    if (out) out.value = finalString;
}

// ==========================================
// 4. 其他工具与 AI 逻辑 (保持全局)
// ==========================================

// 工具函数：显示提示
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

// 工具函数：复制
function copyToClipboard(text) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
        showToast("✅ 复制成功！");
    }).catch(err => {
        console.error(err);
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        showToast("✅ 复制成功！");
    });
}

// 设置模态框逻辑
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

    if (!key) {
        alert("请输入 API Key");
        return;
    }

    aiConfig = { key, base, model };
    localStorage.setItem('sd_ai_key', key);
    localStorage.setItem('sd_ai_base', base);
    localStorage.setItem('sd_ai_model', model);
    
    closeSettings();
    showToast("⚙️ 设置已保存");
}

// AI 联想功能
async function callAI(mode) {
    if (!aiConfig.key) {
        openSettings();
        return;
    }

    const inputEl = document.getElementById('aiInput');
    if (!inputEl || !inputEl.value.trim()) {
        showToast("⚠️ 请先输入内容");
        return;
    }

    const btn = mode === 'scene' ? document.querySelector('button[onclick="callAI(\'scene\')"]') : document.querySelector('button[onclick="callAI(\'translate\')"]');
    if (!btn) return;
    
    const originalText = btn.innerText;
    btn.innerText = "⏳..."; 
    btn.disabled = true;

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
        
        showToast("✨ AI 生成完毕 (已暂存)");
        buildFinalString(); // 生成完毕后立即刷新最终字符串
        
    } catch (e) {
        alert("AI 请求失败: " + e.message);
    } finally {
        btn.innerText = originalText;
        btn.disabled = false;
    }
}

// 页面初始化逻辑 (如果需要)
function initGenerator(grid) {
    // 你的初始化逻辑... 确保 database.js 中的数据能被 state 接收
    if (typeof database === 'undefined') {
        grid.innerHTML = "<h3 style='color:red;text-align:center'>❌ 未找到 database.js</h3>";
        return;
    }
    // ...
}

// 页面加载完成后的操作
window.onload = function() {
    const grid = document.getElementById('cardGrid');
    if (grid) {
        // 假设 initGenerator 函数存在并执行初始化
        if (typeof initGenerator !== 'undefined') {
            initGenerator(grid);
        }
    }
};