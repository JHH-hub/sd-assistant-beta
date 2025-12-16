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

// 全局状态
var state = {}; 
var aiTags = "";  
var aiConfig = {
    key: localStorage.getItem('sd_ai_key') || '',
    base: localStorage.getItem('sd_ai_base') || 'https://api.siliconflow.cn/v1',
    model: localStorage.getItem('sd_ai_model') || 'Qwen/Qwen2.5-7B-Instruct'
};

// ==========================================
// 2. 权限检查逻辑 (保持不变，已修复 UID)
// ==========================================
async function checkAuth() {
    console.log("🔍 开始执行权限检查...");

    if (window.location.pathname.includes('login.html')) return;
    if (!_supabase) return; 

    const { data: { session }, error } = await _supabase.auth.getSession();

    if (!session || error) {
        // 恢复跳转，但前提是你的浏览器跟踪防护已关闭
        window.location.href = 'login.html'; 
    } else {
        if (session.user.id !== ALLOWED_UID) {
            console.error("❌ 警告：UID 不匹配！");
            await _supabase.auth.signOut();
            window.location.href = 'login.html';
        } else {
            console.log("🎉 认证通过！欢迎管理员。");
        }
    }
}
checkAuth();


// ==========================================
// 3. 核心生成器逻辑 (新增：initGenerator, rollSingle, renderCard)
// ==========================================

// 核心功能 1：初始化生成器 (解决页面空白问题)
function initGenerator(grid) {
    // 检查 database.js 是否加载成功
    if (typeof database === 'undefined' || Object.keys(database).length === 0) {
        grid.innerHTML = "<h3 style='color:red;text-align:center'>❌ database.js (数据集) 未加载或为空！</h3>";
        console.error("初始化失败：database 变量未定义或为空。请检查 database.js 文件内容。");
        return;
    }
    
    grid.innerHTML = ''; 
    
    for (const key in database) {
        if (database.hasOwnProperty(key) && database[key].name) {
            // 1. 初始化 state 结构
            state[key] = {
                name: database[key].name,
                enabled: true,
                locked: false,
                currentValue: "点击🎲按钮生成内容" 
            };

            // 2. 渲染卡片
            const cardElement = renderCard(key, state[key]);
            grid.appendChild(cardElement);
        }
    }
    
    // 初始生成一次内容
    rollAll();
    console.log("✅ 生成器初始化完成，数据已填充到 state。");
}

// 核心功能 2：随机选择逻辑 (解决 rollAll 依赖)
function rollSingle(key) {
    if (!database[key] || !database[key].tags || database[key].tags.length === 0) {
        state[key].currentValue = "无可用数据";
        return;
    }
    
    const tags = database[key].tags;
    const randomIndex = Math.floor(Math.random() * tags.length);
    const selectedTag = tags[randomIndex];
    
    // 更新全局状态和 HTML 显示
    state[key].currentValue = selectedTag;
    const cardValueElement = document.getElementById(`value-${key}`);
    if (cardValueElement) {
        cardValueElement.innerText = selectedTag;
    }
    
    // 每次随机后都更新最终字符串
    buildFinalString();
}

// 核心功能 3：渲染单个卡片 (确保卡片能被正确渲染)
function renderCard(key, data) {
    const card = document.createElement('div');
    card.className = 'gen-card';
    card.id = `card-${key}`;

    const header = document.createElement('div');
    header.className = 'card-header';
    header.innerHTML = `
        <span class="card-name">${data.name}</span>
        <div class="card-controls">
            <button class="card-btn" onclick="rollSingle('${key}')">🎲</button>
            <button class="card-btn lock-btn" id="lock-${key}" onclick="toggleLock('${key}')">🔓</button>
            <button class="card-btn enable-btn enabled" id="enable-${key}" onclick="toggleEnable('${key}')">✅</button>
        </div>
    `;
    
    const value = document.createElement('div');
    value.className = 'card-value';
    value.id = `value-${key}`;
    value.innerText = data.currentValue;

    card.appendChild(header);
    card.appendChild(value);
    
    return card;
}


// ==========================================
// 4. 全局可调用函数 (HTML onclick 依赖)
// ==========================================
function rollAll() {
    // 确保 rollSingle 已经被加载
    if (typeof window.rollSingle !== 'function') {
        console.error("❌ rollSingle 函数未定义，无法执行滚动。");
        return;
    }

    for (const k in state) {
        // 只有未锁定的和启用的才滚动
        if (state[k] && state[k].enabled && !state[k].locked) {
            // 调用全局的 rollSingle 函数
            window.rollSingle(k);
        }
    }
    // buildFinalString 应该在 script.js 中
    buildFinalString();
}
function copyFinal() { 
    const out = document.getElementById('finalOutput'); 
    if (out) copyToClipboard(out.value); 
}

function buildFinalString() {
    let finalString = aiTags.trim() ? aiTags.trim() + ",\n" : "";
    for (const key in state) {
        if (state[key] && state[key].currentValue && state[key].enabled) {
            finalString += state[key].currentValue + ",\n";
        }
    }
    finalString = finalString.replace(/,\s*$/, ""); 
    const out = document.getElementById('finalOutput');
    if (out) out.value = finalString;
}

// 锁定/启用/全选/重置逻辑
function toggleLock(key) {
    if (!state[key]) return;
    state[key].locked = !state[key].locked;
    const lockBtn = document.getElementById(`lock-${key}`);
    if (lockBtn) {
        lockBtn.innerHTML = state[key].locked ? '🔒' : '🔓';
        lockBtn.classList.toggle('locked', state[key].locked);
    }
}

function toggleEnable(key) {
    if (!state[key]) return;
    state[key].enabled = !state[key].enabled;
    const enableBtn = document.getElementById(`enable-${key}`);
    if (enableBtn) {
        enableBtn.innerHTML = state[key].enabled ? '✅' : '❌';
        enableBtn.classList.toggle('enabled', state[key].enabled);
    }
    buildFinalString();
}

function toggleAll(enabled) {
    for (const key in state) {
        if (state.hasOwnProperty(key)) {
            state[key].enabled = enabled;
            const enableBtn = document.getElementById(`enable-${key}`);
            if (enableBtn) {
                enableBtn.innerHTML = enabled ? '✅' : '❌';
                enableBtn.classList.toggle('enabled', enabled);
            }
        }
    }
    buildFinalString();
}

function resetLocks() {
    for (const key in state) {
        if (state.hasOwnProperty(key)) {
            state[key].locked = false;
            const lockBtn = document.getElementById(`lock-${key}`);
            if (lockBtn) {
                lockBtn.innerHTML = '🔓';
                lockBtn.classList.remove('locked');
            }
        }
    }
}


// ... (所有 AI 和工具函数保持不变，此处省略，但应包含在你的文件中) ...
function showToast(msg) { /* ... */ }
function copyToClipboard(text) { /* ... */ }
function openSettings() { /* ... */ }
function closeSettings() { /* ... */ }
function saveSettings() { /* ... */ }
async function callAI(mode) { /* ... */ }


// ==========================================
// 5. 页面加载初始化
// ==========================================
window.onload = function() {
    console.log("🚀 页面加载完成");

    const grid = document.getElementById('cardGrid');
    if (grid) {
        // 直接调用全局函数，相信它已经在 database.js 中定义
        if (typeof window.initGenerator === 'function') {
            window.initGenerator(grid);
        } else {
            console.error("❌ 严重错误: window.initGenerator 函数未找到。请检查 database.js 是否已加载。");
        }
    }
};