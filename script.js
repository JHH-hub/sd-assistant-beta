// ==========================================
// script.js - 核心逻辑修正版
// ==========================================

// --- A. 全局配置与状态 ---
const SUPABASE_URL = 'https://mjmpvgyyeqalcocuizwb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qbXB2Z3l5ZXFhbGNvY3VpendiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NzU1MzcsImV4cCI6MjA4MTQ1MTUzN30.M8S9zElBiuvVaDWTeiwRN0YeTsDqrlfzNVvCzX8-9sQ';
const ALLOWED_UID = '63ac44b9-7dc2-4827-ba39-9669e4f39147';
const DATA_TABLE_NAME = 'prompts_data'; 

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 全局数据存储变量 (由 Supabase 填充)
window._PRESETS = {};
window._COLLECTIONS = {};
window._GENERATOR_DB = {}; // 用于 generator.html

// Generator 页面特有的状态
const state = {}; 
let aiTags = "";
let aiConfig = {
    key: localStorage.getItem('sd_ai_key') || '',
    base: localStorage.getItem('sd_ai_base') || 'https://api.siliconflow.cn/v1',
    model: localStorage.getItem('sd_ai_model') || 'Qwen/Qwen2.5-7B-Instruct'
};


// ==========================================
// B. 认证、解锁与数据加载逻辑 (全局函数，解决 ReferenceError)
// ==========================================

async function checkAuthSession() {
    try {
        const { data: { session }, error } = await supabase.auth.getSession();

        if (error) throw error;

        if (session && session.user.id === ALLOWED_UID) {
            unlockApp();
            await loadProtectedData();
            // 如果是 generator 页面，数据加载后初始化卡片
            if (document.getElementById('cardGrid')) {
                initGenerator(document.getElementById('cardGrid'));
            }
        } else {
            showLockScreen('请登录以访问受保护的内容。');
            if (session) {
                 await supabase.auth.signOut();
            }
        }
    } catch (e) {
        console.error("检查会话失败:", e.message);
        showLockScreen('检查认证状态失败，请重试登录。');
    }
}

// 供 HTML 按钮调用 (全局作用域)
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
            return;
        }

        if (data.user.id === ALLOWED_UID) {
            authMessageEl.innerText = '✅ 登录成功，正在加载数据...';
            unlockApp();
            await loadProtectedData();
            // 登录后判断是否需要初始化 Generator
            if (document.getElementById('cardGrid')) {
                initGenerator(document.getElementById('cardGrid'));
            }
        } else {
            await supabase.auth.signOut();
            authMessageEl.innerText = '权限不足：该用户无权访问此应用。';
        }

    } catch (e) {
        authMessageEl.innerText = '发生未知错误，请检查网络。';
    }
}

// 供 HTML 按钮调用 (全局作用域)
async function handleLogout() {
    try {
        await supabase.auth.signOut();
        window._PRESETS = {};
        window._COLLECTIONS = {};
        window._GENERATOR_DB = {};
        showLockScreen('已登出。请重新登录。');
    } catch (e) {
        showToast("登出失败!");
    }
}


async function loadProtectedData() {
    try {
        // RLS 策略将确保只有授权用户能成功查询
        const { data, error } = await supabase
            .from(DATA_TABLE_NAME)
            .select('presets, collections, generator_db') 
            .single(); // 假设只有一条记录

        if (error) throw new Error(error.message || "数据查询失败");
        
        if (data) {
            window._PRESETS = data.presets || {};
            window._COLLECTIONS = data.collections || {};
            window._GENERATOR_DB = data.generator_db || {}; // 填充生成器数据
            console.log("数据加载成功。");
        } else {
            showToast("数据加载失败：未找到数据记录。");
        }

    } catch (e) {
        showLockScreen('数据加载失败：请检查 Supabase 表和 RLS 配置。');
        console.error("加载受保护数据失败:", e);
    }
}


// ==========================================
// C. 通用工具与 UI 交互函数 (全局函数)
// ==========================================

function showLockScreen(message) {
    document.getElementById('lockScreen').style.display = 'flex';
    const appContent = document.getElementById('appContent');
    if(appContent) appContent.style.display = 'none'; 
    document.getElementById('authMessage').innerText = message || '';
}

function unlockApp() {
    document.getElementById('lockScreen').style.display = 'none';
    document.getElementById('appContent').style.display = 'block';
}

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
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast("✅ 复制成功 (Fallback)！");
    });
}

// 供 HTML 按钮调用 (全局作用域)
function copyPreset(type) {
    if (window._PRESETS[type]) {
        copyToClipboard(window._PRESETS[type]);
    } else {
        showToast("❌ 预设不存在或尚未加载！");
    }
}

// 供 HTML 按钮调用 (全局作用域)
function openCollection(type) {
    const modal = document.getElementById('collectionModal');
    const titleEl = document.getElementById('collectionTitle');
    const listEl = document.getElementById('collectionList');

    const collection = window._COLLECTIONS[type];
    
    if (!collection) {
        showToast("❌ 合集数据不存在或尚未加载！");
        return;
    }

    titleEl.innerText = collection.title || '📂 合集详情';

    listEl.innerHTML = '';
    collection.items.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'collection-item';
        itemEl.innerText = item.label || item.title || item.prompt; 
        itemEl.onclick = () => {
            copyToClipboard(item.prompt);
            closeCollection(); // 复制后关闭弹窗
        };
        listEl.appendChild(itemEl);
    });

    modal.style.display = 'flex';
}

// 供 HTML 按钮调用 (全局作用域)
function closeCollection() {
    document.getElementById('collectionModal').style.display = 'none';
}


// ==========================================
// D. Generator 页面逻辑 (应包含在原文件所有函数)
// ==========================================

function initGenerator(grid) {
    grid.innerHTML = '';
    
    // 使用全局数据源 window._GENERATOR_DB
    const database = window._GENERATOR_DB; 

    for (const [key, category] of Object.entries(database)) {
        if (!category.meta || !category.data) continue; 
        
        state[key] = {
            enabled: true, locked: false, current: null,
            data: category.data, color: category.meta.color || '#ccc'
        };

        const card = document.createElement('div');
        card.className = 'gen-card active';
        card.id = `card-${key}`;
        card.style.setProperty('--card-accent', state[key].color);
        
        card.innerHTML = `
            <div class="card-top">
                <div style="display:flex; align-items:center">
                    <div class="toggle" onclick="toggleCard('${key}')"></div>
                    <span>${category.meta.name}</span>
                </div>
                <div style="font-size:0.8rem; opacity:0.6">${category.data.length}</div>
            </div>
            <div class="card-content">
                <div class="item-group" id="group-${key}">---</div>
                <div class="item-name" id="name-${key}">点击抽取</div>
            </div>
            <div class="prompt-preview" id="prompt-${key}"></div>
            <div style="display:flex; justify-content:space-between; margin-top:10px;">
                <button class="ctrl-btn" onclick="rollSingle('${key}')">🎲</button>
                <button class="ctrl-btn" id="lock-${key}" onclick="toggleLock('${key}')">🔓</button>
                <button class="ctrl-btn" style="color:#ef4444" onclick="clearSingle('${key}')">🗑️</button>
            </div>
        `;
        grid.appendChild(card);
    }
    rollAll();
    
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        if (e.code === 'Space') { e.preventDefault(); rollAll(); }
    });
}

function rollSingle(key) {
    if (!state[key] || !state[key].enabled || state[key].locked) return;
    const dataArray = state[key].data;
    const index = Math.floor(Math.random() * dataArray.length);
    state[key].current = dataArray[index];
    
    document.getElementById(`name-${key}`).innerText = state[key].current.label || state[key].current.prompt;
    document.getElementById(`prompt-${key}`).innerText = state[key].current.prompt;
    buildFinalString();
}

function rollAll() {
    Object.keys(state).forEach(key => rollSingle(key));
}

function toggleCard(key) {
    const card = document.getElementById(`card-${key}`);
    state[key].enabled = !state[key].enabled;
    card.classList.toggle('active', state[key].enabled);
    
    // 如果关闭，清除选择并解锁
    if (!state[key].enabled) {
        clearSingle(key);
        state[key].locked = false;
        document.getElementById(`lock-${key}`).innerText = '🔓';
    } else {
        // 如果开启，重新抽取
        rollSingle(key); 
    }
    buildFinalString();
}

function toggleAll(enable) {
    Object.keys(state).forEach(key => {
        if (state[key].enabled !== enable) {
            toggleCard(key);
        }
    });
}

function toggleLock(key) {
    state[key].locked = !state[key].locked;
    document.getElementById(`lock-${key}`).innerText = state[key].locked ? '🔒' : '🔓';
    showToast(state[key].locked ? `🔒 ${state[key].current.label} 已锁定` : `🔓 已解锁`);
}

function resetLocks() {
    Object.keys(state).forEach(key => {
        if (state[key].locked) {
            toggleLock(key);
        }
    });
    showToast("🔓 所有卡片已解锁");
}

function clearSingle(key) {
    state[key].current = null;
    document.getElementById(`name-${key}`).innerText = "点击抽取";
    document.getElementById(`prompt-${key}`).innerText = "";
    document.getElementById(`group-${key}`).innerText = "---";
    buildFinalString();
}

function buildFinalString() {
    const parts = [];
    
    // 1. Lora / 起手式 (始终保留)
    const lora = document.getElementById('loraInput').value.trim();
    if (lora) {
        parts.push(lora);
    }
    
    // 2. 启用的且已抽取的部分
    Object.keys(state).forEach(key => {
        if (state[key].enabled && state[key].current && state[key].current.prompt) {
            parts.push(state[key].current.prompt);
        }
    });
    
    const finalPrompt = parts.join(', ');
    document.getElementById('finalOutput').value = finalPrompt;
}

function copyFinal() {
    const pos = document.getElementById('finalOutput').value.trim();
    const neg = document.getElementById('negInput').value.trim();
    
    let result = pos;
    if (neg) {
        result += ' /// ' + neg;
    }
    
    copyToClipboard(result);
}

// --- AI 设置与调用 ---
function openSettings() {
    document.getElementById('apiKey').value = aiConfig.key;
    document.getElementById('apiBase').value = aiConfig.base;
    document.getElementById('apiModel').value = aiConfig.model;
    document.getElementById('settingsModal').style.display = 'flex';
}

function closeSettings() {
    document.getElementById('settingsModal').style.display = 'none';
}

function saveSettings() {
    aiConfig.key = document.getElementById('apiKey').value.trim();
    aiConfig.base = document.getElementById('apiBase').value.trim();
    aiConfig.model = document.getElementById('apiModel').value.trim();
    localStorage.setItem('sd_ai_key', aiConfig.key);
    localStorage.setItem('sd_ai_base', aiConfig.base);
    localStorage.setItem('sd_ai_model', aiConfig.model);
    closeSettings();
    showToast("配置已保存！");
}

async function callAI(mode) {
    const inputEl = document.getElementById('aiInput');
    if (!aiConfig.key || !aiConfig.base) {
        showToast("❌ 请先设置 API Key 和 Base URL！");
        return;
    }
    if (!inputEl || !inputEl.value.trim()) {
        showToast("❌ 请输入需要处理的文本！");
        return;
    }

    const btn = document.querySelector(`button[onclick="callAI('${mode}')"]`);
    if (!btn) return;
    const oldTxt = btn.innerText; btn.innerText = "⏳..."; btn.disabled = true;

    try {
        const sys = "You are a Stable Diffusion prompt generator. Output format: Positive Tags /// Negative Tags. Use '///' separator.";
        const prompt = mode === 'translate' ? `Translate to English tags, focusing on quality and artistic style: ${inputEl.value}` : `Generate artistic and detailed Stable Diffusion scene tags for: ${inputEl.value}`;
        
        let url = aiConfig.base.endsWith('/chat/completions') ? aiConfig.base : aiConfig.base.replace(/\/$/, "") + '/chat/completions';
        
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${aiConfig.key}` },
            body: JSON.stringify({ model: aiConfig.model, messages: [{role:"system",content:sys},{role:"user",content:prompt}], temperature: 0.7 })
        });
        
        const d = await res.json();
        if(d.error) throw new Error(d.error.message || JSON.stringify(d));
        
        const txt = d.choices[0].message.content;
        
        let posTags = txt.trim();
        let negTags = "";
        
        // 解析 Positive /// Negative 格式
        if(txt.includes("///")) {
            const p = txt.split("///").map(s => s.trim());
            posTags = p[0];
            negTags = p[1] || "";
        }
        
        // 更新 Prompt 输入框
        const posInput = document.getElementById('loraInput');
        posInput.value = posTags;
        
        // 更新负面 Prompt
        const negInput = document.getElementById('negInput'); 
        if(negInput) negInput.value = negTags;
        
        aiTags = posTags;
        
        // 自动更新最终字符串
        buildFinalString(); 

    } catch (e) {
        showToast("❌ AI 调用失败: " + (e.message || "请检查配置和网络"));
        console.error("AI Call Error:", e);
    } finally {
        btn.innerText = oldTxt;
        btn.disabled = false;
    }
}


// ==========================================
// E. 页面加载入口点
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    checkAuthSession();
    
    // 绑定弹窗关闭事件，防止点击背景无法关闭
    const collectionModal = document.getElementById('collectionModal');
    if(collectionModal) {
        collectionModal.addEventListener('click', function(e) {
            if (e.target === this) closeCollection();
        });
    }

    const settingsModal = document.getElementById('settingsModal');
    if(settingsModal) {
        settingsModal.addEventListener('click', function(e) {
            if (e.target === this) closeSettings();
        });
    }
});