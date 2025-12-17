// ==========================================
// 🔒 客户端密码保护：极简实现
// ==========================================
const SITE_PASS = "pxlsan"; 

(function() {
    // 立即检查权限，不需要等待 load 事件，越快越好
    function verify() {
        const mainContent = document.getElementById('main-content');
        
        // --- 🆕 新增：自动获取 URL 中的密码和 Token ---
        if (hash.includes('pw=')) {
            const params = new URLSearchParams(hash.substring(1));
            const urlPw = params.get('pw');
            if (urlPw === SITE_PASS) {
                sessionStorage.setItem('siteAccess', SITE_PASS);
                // 注意：这里不要清理 hash，留给 Supabase 的登录逻辑去读取 access_token
            }
        }
        // --------------------------------------------

        if (sessionStorage.getItem('siteAccess') === SITE_PASS) {
            if (mainContent) mainContent.style.display = 'block';
            return;
        }

        let attempts = 3;
        while (attempts > 0) {
            const userInput = prompt("🔒 请输入访问密码："); 
            if (userInput === SITE_PASS) {
                sessionStorage.setItem('siteAccess', SITE_PASS);
                if (mainContent) mainContent.style.display = 'block';
                return;
            } else {
                attempts--;
                if (attempts > 0) alert(`密码错误。您还有 ${attempts} 次机会。`);
            }
        }

        // 失败处理
        document.body.innerHTML = `
            <div style="text-align:center; padding:50px; color:#f1f5f9; background:#0f172a; height:100vh;">
                <h1>❌ 访问被拒绝</h1>
                <p>密码错误或尝试次数过多，请刷新页面重试。</p>
            </div>
        `;
    }

    // 确保在 DOM 加载后立即执行显示逻辑
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', verify);
    } else {
        verify();
    }
})();

// ==========================================
// script.js 
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





// ==========================================
// script.js - 纯净逻辑版 (原有代码从这里开始)
// ==========================================

// ... 你的原有代码（如：const state = {};...）保持不变 ...


// ==========================================
// A. 预设库逻辑 (Index Page)
// ==========================================

// 复制单项预设 (从 window._PRESETS 读取)
function copyPreset(type) {
    // 检查数据是否加载
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

// 打开二级菜单 (从 window._COLLECTIONS 读取)
function openCollection(type) {
    if (typeof window._COLLECTIONS === 'undefined') return;
    
    const data = window._COLLECTIONS[type];
    if (!data) {
        showToast("⚠️ 该合集暂无数据");
        return;
    }

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
            if(!item.prompt || item.prompt === "...") {
                showToast("⚠️ 暂无内容");
            } else {
                copyToClipboard(item.prompt);
            }
        };
        listContainer.appendChild(btn);
    });

    modalEl.style.display = 'flex';
}

function closeCollection() {
    const modalEl = document.getElementById('collectionModal');
    if (modalEl) modalEl.style.display = 'none';
}

// 绑定弹窗关闭事件
const collectionModal = document.getElementById('collectionModal');
if(collectionModal) {
    collectionModal.addEventListener('click', function(e) {
        if (e.target === this) closeCollection();
    });
}

// ==========================================
// B. 生成器逻辑 (Generator Page)
// ==========================================

window.onload = function() {
    // 检查是否为 generator 页面
    const grid = document.getElementById('cardGrid');
    if (grid) {
        if (typeof database === 'undefined') {
            grid.innerHTML = "<h3 style='color:red;text-align:center'>❌ 未找到 database.js</h3>";
            return;
        }
        initGenerator(grid);
    }
};

function initGenerator(grid) {
    grid.innerHTML = '';
    for (const [key, category] of Object.entries(database)) {
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

// 简化的交互函数
function toggleCard(k) { state[k].enabled = !state[k].enabled; updateCardUI(k); buildFinalString(); }
function toggleLock(k) { state[k].locked = !state[k].locked; updateCardUI(k); }
function updateCardUI(k) {
    const card = document.getElementById(`card-${k}`);
    const lockBtn = document.getElementById(`lock-${k}`);
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

// AI 设置 & 调用 (保持不变)
function openSettings() { document.getElementById('settingsModal').style.display='flex'; document.getElementById('apiKey').value = aiConfig.key; }
function closeSettings() { document.getElementById('settingsModal').style.display='none'; }
function saveSettings() {
    aiConfig.key = document.getElementById('apiKey').value.trim();
    aiConfig.base = document.getElementById('apiBase').value.trim();
    aiConfig.model = document.getElementById('apiModel').value.trim();
    localStorage.setItem('sd_ai_key', aiConfig.key);
    localStorage.setItem('sd_ai_base', aiConfig.base);
    localStorage.setItem('sd_ai_model', aiConfig.model);
    closeSettings();
}
async function callAI(mode) {
    if (!aiConfig.key) { alert("请先配置 API Key"); openSettings(); return; }
    const inputEl = document.getElementById('aiInput');
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
            const p = txt.split("///"); aiTags = p[0].trim();
            const neg = document.getElementById('negInput'); if(neg) neg.value = p[1].trim();
        } else aiTags = txt.trim();
        buildFinalString(); showToast("✨ 成功!");
    } catch(e) { alert("错误: " + e.message); } finally { btn.innerText = oldTxt; btn.disabled = false; }
}