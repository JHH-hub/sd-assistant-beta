// ==========================================
// ==========================================
// script.js - 核心逻辑修改
// ==========================================

// 全局状态与配置
const state = {};
let aiTags = "";
let aiConfig = {
    key: localStorage.getItem('sd_ai_key') || '',
    base: localStorage.getItem('sd_ai_base') || 'https://api.siliconflow.cn/v1',
    model: localStorage.getItem('sd_ai_model') || 'Qwen/Qwen2.5-7B-Instruct'
};

// ** Supabase 配置 (新增) **
const SUPABASE_URL = 'https://mjmpvgyyeqalcocuizwb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qbXB2Z3l5ZXFhbGNvY3VpendiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NzU1MzcsImV4cCI6MjA4MTQ1MTUzN30.M8S9zElBiuvVaDWTeiwRN0YeTsDqrlfzNVvCzX8-9sQ';
const ALLOWED_UID = '63ac44b9-7dc2-4827-ba39-9669e4f39147'; // 您的授权用户 UID
const DATA_TABLE_NAME = 'prompts_data'; // <-- 🚨 替换为您的 Supabase 数据表名

// 初始化 Supabase 客户端
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 全局数据存储变量 (取代 database.js 和 data/*.js 的内容)
window._PRESETS = {};
window._COLLECTIONS = {};

// ==========================================
// 认证和数据加载逻辑 (新增)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // 页面加载时，检查是否有活动的会话
    checkAuthSession();
});

async function checkAuthSession() {
    try {
        const { data: { session }, error } = await supabase.auth.getSession();

        if (error) throw error;

        if (session && session.user.id === ALLOWED_UID) {
            // 已登录且是授权用户，直接解锁并加载数据
            unlockApp();
            await loadProtectedData();
        } else {
            // 未登录或登录用户不匹配
            showLockScreen('请登录以访问受保护的内容。');
            // 如果存在会话但用户ID不匹配，则登出
            if (session) {
                 await supabase.auth.signOut();
            }
        }
    } catch (e) {
        console.error("检查会话失败:", e.message);
        showLockScreen('检查认证状态失败，请重试登录。');
    }
}

function showLockScreen(message) {
    document.getElementById('lockScreen').style.display = 'flex';
    // 隐藏主内容，防止在未认证时用户看到
    const appContent = document.getElementById('appContent');
    if(appContent) appContent.style.display = 'none'; 
    document.getElementById('authMessage').innerText = message || '';
}

function unlockApp() {
    document.getElementById('lockScreen').style.display = 'none';
    document.getElementById('appContent').style.display = 'block';
}

async function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const authMessageEl = document.getElementById('authMessage');
    authMessageEl.innerText = '登录中...';

    if (!email || !password) {
        authMessageEl.innerText = '邮箱和密码不能为空。';
        return;
    }

    try {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            authMessageEl.innerText = '登录失败: ' + error.message;
            console.error("登录错误:", error);
            return;
        }

        if (data.user.id === ALLOWED_UID) {
            authMessageEl.innerText = '✅ 登录成功，正在加载数据...';
            unlockApp();
            await loadProtectedData();
        } else {
            // 登录成功但不是授权用户，立即登出
            await supabase.auth.signOut();
            authMessageEl.innerText = '权限不足：该用户无权访问此应用。';
        }

    } catch (e) {
        authMessageEl.innerText = '发生未知错误，请检查网络。';
        console.error("登录操作错误:", e);
    }
}

async function handleLogout() {
    try {
        await supabase.auth.signOut();
        // 清理本地数据和 UI
        window._PRESETS = {};
        window._COLLECTIONS = {};
        showLockScreen('已登出。请重新登录。');
    } catch (e) {
        console.error("登出失败:", e);
        showToast("登出失败!");
    }
}


async function loadProtectedData() {
    try {
        // RLS 策略将确保只有授权用户能成功查询
        const { data, error } = await supabase
            .from(DATA_TABLE_NAME)
            .select('presets, collections') 
            .single(); 

        if (error) {
            // 可能是 RLS 阻止了，或者查询错误
            throw new Error(error.message || "数据查询失败");
        }
        
        if (data) {
            // 将获取到的数据赋值给全局变量
            window._PRESETS = data.presets || {};
            window._COLLECTIONS = data.collections || {};
            console.log("数据加载成功。");
        } else {
            showToast("数据加载失败：未找到数据记录。");
            console.error("未找到数据记录。");
        }

    } catch (e) {
        // 如果失败，强制回到锁定屏幕
        showLockScreen('数据加载失败：请检查 Supabase 表和 RLS 配置。');
        console.error("加载受保护数据失败:", e);
    }
}


// ==========================================
// 原有工具函数 (已修改以使用全局变量)
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
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast("✅ 复制成功 (Fallback)！");
    });
}

// 核心功能：复制预设
function copyPreset(type) {
    if (window._PRESETS[type]) {
        copyToClipboard(window._PRESETS[type]);
    } else {
        showToast("❌ 预设不存在或尚未加载！");
        console.error(`Preset type ${type} not found in _PRESETS.`);
    }
}

// 核心功能：打开合集
function openCollection(type) {
    const modal = document.getElementById('collectionModal');
    const titleEl = document.getElementById('collectionTitle');
    const listEl = document.getElementById('collectionList');

    const collection = window._COLLECTIONS[type];
    
    if (!collection) {
        showToast("❌ 合集数据不存在或尚未加载！");
        console.error(`Collection type ${type} not found in _COLLECTIONS.`);
        return;
    }

    // 设置标题
    titleEl.innerText = collection.title || '📂 合集详情';

    // 清空旧内容并生成新列表
    listEl.innerHTML = '';
    collection.items.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'collection-item';
        // 使用合集中的 label 或 title 作为显示文本，prompt 作为复制内容
        itemEl.innerText = item.label || item.title || item.prompt; 
        itemEl.onclick = () => {
            copyToClipboard(item.prompt);
        };
        listEl.appendChild(itemEl);
    });

    // 显示弹窗
    modal.style.display = 'flex';
}

// 核心功能：关闭合集
function closeCollection() {
    document.getElementById('collectionModal').style.display = 'none';
}


// ==========================================
// AI 生成器相关函数 (保留原有逻辑)
// ==========================================

// 假设 generator.html 也会使用这个函数来初始化
function initGenerator() {
    // 确保 generator.html 页面也使用 checkAuthSession() 来进行认证和数据加载
    // 如果 generator.html 独立，请在 generator.html 中单独执行认证逻辑
}

function saveAIConfig() {
    aiConfig.key = document.getElementById('apiKey').value.trim();
    aiConfig.base = document.getElementById('apiBase').value.trim();
    aiConfig.model = document.getElementById('apiModel').value.trim();
    localStorage.setItem('sd_ai_key', aiConfig.key);
    localStorage.setItem('sd_ai_base', aiConfig.base);
    localStorage.setItem('sd_ai_model', aiConfig.model);
    showToast("配置已保存！");
}

async function callAI(mode) {
    if (!aiConfig.key || !aiConfig.base) {
        showToast("❌ 请先设置 API Key 和 Base URL！");
        return;
    }
    const inputEl = document.getElementById('textInput');
    if (!inputEl || !inputEl.value.trim()) {
        showToast("❌ 请输入需要处理的文本！");
        return;
    }

    const btn = mode === 'scene' ? document.querySelector('button[onclick="callAI(\'scene\')"]') : document.querySelector('button[onclick="callAI(\'translate\')"]');
    if (!btn) return;
    const oldTxt = btn.innerText; btn.innerText = "⏳..."; btn.disabled = true;

    try {
        const sys = "You are a Stable Diffusion prompt generator. Output format: Positive Tags /// Negative Tags. Use '///' separator.";
        const prompt = mode === 'translate' ? `Translate to English tags: ${inputEl.value}` : `Generate scene tags for: ${inputEl.value}`;
        let url = aiConfig.base.endsWith('/chat/completions') ? aiConfig.base : aiConfig.base.replace(/\/$/, "") + '/chat/completions';
        
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${aiConfig.key}` },
            body: JSON.stringify({ model: aiConfig.model, messages: [{role:"system",content:sys},{role:"user",content:prompt}], temperature: 0.7 })
        });
        
        const d = await res.json();
        if(d.error) throw new Error(d.error.message);
        
        const txt = d.choices[0].message.content;
        
        if(txt.includes("///")) {
            const p = txt.split("///"); 
            aiTags = p[0].trim();
            const neg = document.getElementById('negInput'); 
            if(neg) neg.value = p[1].trim();
        } else {
            aiTags = txt.trim();
        }
        
        document.getElementById('posInput').value = aiTags;

    } catch (e) {
        showToast("❌ AI 调用失败: " + (e.message || "请检查配置和网络"));
        console.error("AI Call Error:", e);
    } finally {
        btn.innerText = oldTxt;
        btn.disabled = false;
    }
}

// 请确保您的 generator.html 中依赖的所有其他函数（如：openGenerator, copyResult, generateRandom 等）
// 也被合并到了这个 script.js 文件中，以保持功能完整性。