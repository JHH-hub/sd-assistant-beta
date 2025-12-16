// ==========================================
// script.js - v1.3.1 (Security & Logic)
// ==========================================

// 1. Supabase 配置 (已自动填入)
const SUPABASE_URL = 'https://mjmpvgyyeqalcocuizwb.supabase.co';
const SUPABASE_ANON_KEY = 'seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qbXB2Z3l5ZXFhbGNvY3VpendiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NzU1MzcsImV4cCI6MjA4MTQ1MTUzN30.M8S9zElBiuvVaDWTeiwRN0YeTsDqrlfzNVvCzX8-9sQ';

const _supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

// 2. 权限守门员：检查是否登录
async function checkAuth() {
    // 如果当前是登录页，不检查
    if (window.location.pathname.includes('login.html')) return;

    if (!_supabase) {
        console.error("Supabase SDK 未加载，请确保 HTML 中已引入 script");
        return;
    }

    const { data: { session } } = await _supabase.auth.getSession();

    if (!session) {
        // 未登录，保存当前位置以便登录后跳转回来（可选），这里直接强制去登录页
        window.location.href = 'login.html';
    } else {
        console.log("✅ 用户已登录:", session.user.email);
    }
}

// 立即执行权限检查
checkAuth();

// ==========================================
// 原有业务逻辑保持不变
// ==========================================

// 全局状态与配置
const state = {}; 
let aiTags = "";  
let aiConfig = {
    key: localStorage.getItem('sd_ai_key') || '',
    base: localStorage.getItem('sd_ai_base') || 'https://api.siliconflow.cn/v1',
    model: localStorage.getItem('sd_ai_model') || 'Qwen/Qwen2.5-7B-Instruct'
};

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
        const sys = "You are a Stable Diffusion prompt generator. Output format: Positive Tags /// Negative Tags. Use '///' separator.";
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
            // 如果未来有负面提示词输入框，可以在这里赋值
            // const neg = document.getElementById('negInput'); if(neg) neg.value = p[1].trim();
        } else {
            aiTags = txt.trim();
        }
        
        showToast("✨ AI 生成完毕 (已暂存)");
        
        // 如果是在 generator 页面，可能需要刷新锁定的卡片或者做其他操作
        // 目前逻辑仅仅是暂存到 aiTags 变量中供后续组合使用
        
    } catch (e) {
        alert("AI 请求失败: " + e.message);
    } finally {
        btn.innerText = originalText;
        btn.disabled = false;
    }
}