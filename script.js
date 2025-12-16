// ==========================================

// 1. 全局配置 (⚠️ 使用 var 修复 "Identifier already declared" 错误)
var SUPABASE_URL = 'https://mjmpvgyyeqalcocuizwb.supabase.co';
// 你的 Anon Key
var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qbXB2Z3l5ZXFhbGNvY3VpendiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NzU1MzcsImV4cCI6MjA4MTQ1MTUzN30.M8S9zElBiuvVaDWTeiwRN0YeTsDqrlfzNVvCzX8-9sQ';

// 你的 UID (⚠️ 使用 var 修复报错)
var ALLOWED_UID = '63ac44b9-7dc2-4827-ba39-9669e4f39147'; 
// ==========================================

var _supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
console.log("✅ Supabase SDK 初始化成功");

// 全局 AI 配置 (用于设置模态框和 AI 功能)
var aiConfig = {
    key: localStorage.getItem('sd_ai_key') || '',
    base: localStorage.getItem('sd_ai_base') || 'https://api.siliconflow.cn/v1',
    model: localStorage.getItem('sd_ai_model') || 'Qwen/Qwen2.5-7B-Instruct'
};

// ==========================================
// 2. 核心认证和权限检查
// ==========================================
async function checkAuth() {
    console.log("🔍 开始执行权限检查...");

    // 如果是登录页，跳过检查
    if (window.location.pathname.includes('login.html')) return;

    if (!_supabase) {
        console.error("⛔ Supabase SDK 未加载，无法检查权限");
        return; 
    }

    const { data: { session }, error } = await _supabase.auth.getSession();

    if (!session || error) {
        // 未登录或会话丢失，强制跳转到登录页
        window.location.href = 'login.html'; 
    } else {
        // 权限检查：确保是管理员 UID
        if (session.user.id !== ALLOWED_UID) {
            console.error("❌ 警告：UID 不匹配，强制登出！当前 ID:", session.user.id);
            await _supabase.auth.signOut();
            window.location.href = 'login.html';
        } else {
            console.log("🎉 认证通过！欢迎管理员。");
        }
    }
}
// 立即执行检查，锁定页面
checkAuth();


// ==========================================
// 3. 工具函数 (用于 UI 交互)
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


// ==========================================
// 4. AI 设置模态框逻辑
// ==========================================

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

// ==========================================
// 5. 页面加载初始化
// ==========================================
window.onload = function() {
    console.log("🚀 页面加载完成 (风格预设库)");
    // 页面特定的初始化逻辑（例如：加载预设数据到界面）应在此处或由 index.html 中的其他脚本触发。
};