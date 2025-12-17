// ==========================================
// 🔒 安全加固版
// ==========================================
const HASHED_PASS = "8e64c69538f00b6c9071274eacba018b41be370f6e488109175f880590d05fa3";

(function() {
    function showAuthModal() {
        const mainContent = document.getElementById('main-content');
        const savedPass = sessionStorage.getItem('siteAccess');
        
        // 1. 检查 Session：如果已存有密码，计算其哈希进行二次验证
        if (savedPass && CryptoJS.SHA256(savedPass).toString() === HASHED_PASS) {
            if (decryptAndInitialize(savedPass)) {
                if (mainContent) mainContent.style.display = 'block';
                return;
            }
        }

        // 2. 未登录或验证失败：创建自定义登录界面
        const authOverlay = document.createElement('div');
        authOverlay.id = 'authOverlay';
        authOverlay.style = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(15, 23, 42, 0.9); backdrop-filter: blur(12px);
            z-index: 10000; display: flex; justify-content: center; align-items: center;
        `;
        
        authOverlay.innerHTML = `
            <div style="background: #1e293b; padding: 40px; border-radius: 20px; border: 1px solid #334155; text-align: center; width: 320px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5);">
                <div style="font-size: 3rem; margin-bottom: 20px;">🔒</div>
                <h2 style="color: white; margin-bottom: 10px;">身份验证</h2>
                <p style="color: #94a3b8; font-size: 0.9rem;">此工具仅限内部使用</p>
                <input type="password" id="passInput" placeholder="请输入访问密码" 
                    style="width: 100%; padding: 12px; margin: 20px 0; background: #0f172a; border: 1px solid #475569; color: white; border-radius: 8px; text-align: center; outline: none;">
                <button id="authBtn" style="width: 100%; padding: 12px; background: #6366f1; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">进入系统</button>
                <p id="authMsg" style="color: #ef4444; font-size: 0.8rem; margin-top: 15px; display: none;">验证失败，请重试</p>
            </div>
        `;

        document.body.appendChild(authOverlay);

        const input = authOverlay.querySelector('#passInput');
        const btn = authOverlay.querySelector('#authBtn');

        btn.onclick = () => handleLogin(input.value);
        input.onkeydown = (e) => { if (e.key === 'Enter') handleLogin(input.value); };
    }

    // 处理登录逻辑
    function handleLogin(userInput) {
        const msg = document.getElementById('authMsg');
      
        const inputHash = CryptoJS.SHA256(userInput).toString();
        
        if (inputHash === HASHED_PASS) {
         
            if (decryptAndInitialize(userInput)) {
                sessionStorage.setItem('siteAccess', userInput); 
                document.getElementById('authOverlay').remove();
                document.getElementById('main-content').style.display = 'block';
            } else {
                msg.innerText = "数据解密失败，请检查数据库文件";
                msg.style.display = 'block';
            }
        } else {
            msg.innerText = "密码错误，请重试";
            msg.style.display = 'block';
            document.getElementById('passInput').value = '';
        }
    }

    // 🔓 核心：解密并挂载数据
    function decryptAndInitialize(pass) {
        try {
            if (!window._LOCKED_DATA) return false;
            const bytes = CryptoJS.AES.decrypt(window._LOCKED_DATA, pass);
            const decryptedStr = bytes.toString(CryptoJS.enc.Utf8);
            if (!decryptedStr) return false;

            window.database = JSON.parse(decryptedStr);
            
            // 初始化 generator 网格渲染
            const grid = document.getElementById('cardGrid');
            if (grid && typeof initGenerator === 'function') {
                initGenerator(grid);
            }
            return true;
        } catch (e) {
            return false;
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showAuthModal);
    } else {
        showAuthModal();
    }
})();

// ==========================================
// 🛠️ 工具函数与 AI 配置 
// ==========================================
const state = {}; 
let aiTags = "";  
let aiConfig = {
    key: localStorage.getItem('sd_ai_key') || '',
    base: localStorage.getItem('sd_ai_base') || 'https://api.siliconflow.cn/v1',
    model: localStorage.getItem('sd_ai_model') || 'Qwen/Qwen2.5-7B-Instruct'
};

function showToast(msg) {
    let t = document.getElementById('toast');
    if (!t) {
        t = document.createElement('div');
        t.id = 'toast'; t.className = 'toast';
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
        const ta = document.createElement("textarea");
        ta.value = text; document.body.appendChild(ta);
        ta.select(); document.execCommand("copy");
        document.body.removeChild(ta);
        showToast("✅ 复制成功！");
    });
}

// ==========================================
// A. 预设库逻辑 (Index Page)
// ==========================================
function copyPreset(type) {
    if (typeof window._PRESETS === 'undefined') {
        showToast("❌ 数据文件未加载！");
        return;
    }
    const text = window._PRESETS[type];
    if (!text || text.length < 2) { 
        showToast("⚠️ 该指令暂无内容");
        return;
    }
    copyToClipboard(text);
}

function openCollection(type) {
    if (typeof window._COLLECTIONS === 'undefined') return;
    const data = window._COLLECTIONS[type];
    if (!data) return;

    const titleEl = document.getElementById('collectionTitle');
    const listContainer = document.getElementById('collectionList');
    const modalEl = document.getElementById('collectionModal');

    if (!titleEl || !listContainer || !modalEl) return;

    titleEl.innerText = data.title;
    listContainer.innerHTML = ''; 

    data.items.forEach(item => {
        const btn = document.createElement('div');
        btn.className = 'collection-item';
        btn.innerText = item.name;
        btn.onclick = () => {
            if(!item.prompt || item.prompt === "...") showToast("⚠️ 暂无内容");
            else copyToClipboard(item.prompt);
        };
        listContainer.appendChild(btn);
    });
    modalEl.style.display = 'flex';
}

function closeCollection() {
    const modalEl = document.getElementById('collectionModal');
    if (modalEl) modalEl.style.display = 'none';
}

// ==========================================
// B. 生成器逻辑 (Generator Page)
// ==========================================
function initGenerator(grid) {
    grid.innerHTML = '';
    // 检查全局变量是否已解密
    if (!window.database) return;

    for (const [key, category] of Object.entries(window.database)) {
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

function toggleCard(k) { state[k].enabled = !state[k].enabled; updateCardUI(k); buildFinalString(); }
function toggleLock(k) { state[k].locked = !state[k].locked; updateCardUI(k); }
function updateCardUI(k) {
    const card = document.getElementById(`card-${k}`);
    const lockBtn = document.getElementById(`lock-${k}`);
    if (!card || !lockBtn) return;
    state[k].enabled ? card.classList.add('active') : card.classList.remove('active');
    lockBtn.innerText = state[k].locked ? '🔒' : '🔓';
    if(state[k].enabled && !state[k].current) rollSingle(k);
}
function rollSingle(k) {
    if (!state[k].enabled && !state[k].current) return;
    const item = state[k].data[Math.floor(Math.random() * state[k].data.length)];
    state[k].current = item;
    document.getElementById(`group-${k}`).innerText = item.group;
    document.getElementById(`name-${k}`).innerText = item.name;
    document.getElementById(`prompt-${k}`).innerText = item.prompt;
    buildFinalString();
}
function clearSingle(k) {
    state[k].current = null;
    document.getElementById(`group-${k}`).innerText = "---";
    document.getElementById(`name-${k}`).innerText = "---";
    document.getElementById(`prompt-${k}`).innerText = "";
    buildFinalString();
}
function toggleAll(v) { for (const k in state) { if (state[k].enabled !== v) toggleCard(k); } }
function resetLocks() { for (const k in state) { if (state[k].locked) toggleLock(k); } }
function rollAll() { for (const k in state) { if (state[k].enabled && !state[k].locked) rollSingle(k); } buildFinalString(); }

function buildFinalString() {
    const parts = [];
    const prefix = document.getElementById('loraInput')?.value.trim();
    if (prefix) parts.push(prefix);
    for (const k in state) { if (state[k].enabled && state[k].current) parts.push(state[k].current.prompt); }
    if (aiTags) parts.push(aiTags);
    const out = document.getElementById('finalOutput');
    if (out) out.value = parts.join(", ");
}
function copyFinal() { const out = document.getElementById('finalOutput'); if (out) copyToClipboard(out.value); }
