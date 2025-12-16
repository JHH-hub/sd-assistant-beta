// =========================================================
// beta_drawer_logic.js - Beta 抽卡器逻辑 (Supabase Auth + Draw)
// =========================================================

const ALLOWED_EMAIL = '2506048806@qq.com';
const authScreen = document.getElementById('auth-screen');
const mainContent = document.getElementById('drawer-main-content');
const authMessage = document.getElementById('auth-message');
const authButton = document.getElementById('authButton');
const authStatus = document.getElementById('auth-status');

// 检查 Supabase 客户端是否存在
if (typeof supabase === 'undefined') {
    if (typeof showToast === 'function') {
        showToast('❌ 错误: Supabase 客户端未初始化！请检查 database.js 或您的初始化文件');
    }
    if (authMessage) {
        authMessage.innerText = '错误: Supabase 客户端未初始化！请检查初始化文件。';
        if (authButton) authButton.disabled = true;
    }
}


// 页面初始化：检查当前登录状态 (函数名保留，供 beta_drawer.html 调用)
async function checkSession() {
    if (typeof supabase === 'undefined') return;

    try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) throw error;

        if (session) {
            const userEmail = session.user.email;
            if (userEmail === ALLOWED_EMAIL) {
                unlockContent(userEmail);
            } else {
                await supabase.auth.signOut();
                showAuthScreen('非授权用户，请使用正确邮箱登录。');
            }
        } else {
            showAuthScreen(`请输入您的授权邮箱（${ALLOWED_EMAIL}）以获取验证链接。`);
        }
    } catch (error) {
        console.error('Supabase 检查会话错误:', error);
        showAuthScreen('检查登录状态失败，请重试。');
    }
}

function showAuthScreen(message) {
    if (authScreen) authScreen.classList.remove('hidden');
    if (mainContent) mainContent.classList.add('hidden');
    if (authMessage) authMessage.innerText = message;
    if (authStatus) {
        authStatus.innerText = '🔑 登录';
        authStatus.onclick = () => showAuthScreen('已登出，请重新登录。');
    }
    const emailInput = document.getElementById('authEmail');
    if (emailInput) {
        emailInput.value = ALLOWED_EMAIL;
        emailInput.disabled = true;
    }
    if (authButton) {
        authButton.disabled = false;
        authButton.innerText = '发送验证链接';
    }
}

function unlockContent(email) {
    if (authScreen) authScreen.classList.add('hidden');
    if (mainContent) mainContent.classList.remove('hidden');
    if (typeof showToast === 'function') {
         showToast('🎉 登录成功，欢迎回来！');
    }
    if (authStatus) {
        authStatus.innerText = `👋 ${email} (登出)`;
        authStatus.onclick = handleLogout;
    }
}

// 供 beta_drawer.html 调用
async function handleAuth() {
    if (typeof supabase === 'undefined') return;

    const email = document.getElementById('authEmail').value.trim();
    if (email !== ALLOWED_EMAIL) {
        if (typeof showToast === 'function') {
            showToast('❌ 邮箱未授权！请使用 ' + ALLOWED_EMAIL);
        }
        return;
    }

    authButton.disabled = true;
    authButton.innerText = '发送中...';

    const { error } = await supabase.auth.signInWithOtp({ 
        email: email,
        options: {
            emailRedirectTo: window.location.href 
        }
    });

    if (error) {
        console.error('登录请求错误:', error);
        if (typeof showToast === 'function') {
            showToast('❌ 发送失败: ' + error.message);
        }
        authButton.disabled = false;
        authButton.innerText = '重新发送';
    } else {
        if (typeof showToast === 'function') {
            showToast('✅ 验证链接已发送至您的邮箱！请检查收件箱。');
        }
        authMessage.innerHTML = `✅ 验证链接已发送至 <b>${email}</b>！请检查收件箱并点击链接登录。`;
        authButton.innerText = '链接已发送';
    }
}

// 供 beta_drawer.html 调用
async function handleLogout() {
    if (typeof supabase === 'undefined') return;
    const { error } = await supabase.auth.signOut();
    
    if (error) {
        console.error('登出失败:', error);
        if (typeof showToast === 'function') {
            showToast('❌ 登出失败: ' + error.message);
        }
    } else {
        if (typeof showToast === 'function') {
            showToast('🚪 已安全登出。');
        }
        showAuthScreen('已登出，请使用授权邮箱重新登录。');
    }
}


// ===============================================
// 🎯 抽卡核心逻辑 (P1 任务) - 模拟 generator.html
// ===============================================

function getRandomItem(arr) {
    if (!arr || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
}

// 供 beta_drawer.html 调用
function startDraw() {
    if (typeof database === 'undefined' || Object.keys(database).length === 0) {
        const display = document.getElementById('result-display');
        if (display) {
             display.innerHTML = '<p style="color:#ef4444">🚨 错误：未找到抽卡数据（database 对象为空或未加载）。</p>';
        }
        if (typeof showToast === 'function') {
            showToast('❌ 抽卡数据缺失！');
        }
        return;
    }

    const categories = Object.keys(database);
    
    if (categories.length === 0) {
         if (typeof showToast === 'function') showToast('❌ 抽卡数据为空！');
         return;
    }

    const selectedTags = [];
    const selectionCount = Math.min(categories.length, 3); // 限制最多抽 3 个类别

    // 随机抽取 3 个不同类别的标签
    const usedIndices = new Set();
    while (selectedTags.length < selectionCount) {
        const index = Math.floor(Math.random() * categories.length);
        if (usedIndices.has(index)) continue;
        
        const categoryKey = categories[index];
        const categoryData = database[categoryKey];
        
        // 尝试从 categoryData 中随机抽取一个标签
        const randomItem = getRandomItem(categoryData.items); 
        
        if (randomItem && randomItem.prompt) {
            selectedTags.push({
                category: categoryData.meta.name,
                name: randomItem.name,
                prompt: randomItem.prompt
            });
            usedIndices.add(index);
        }
    }

    let finalPrompt = selectedTags.map(t => t.prompt).join(', ');
    
    if (finalPrompt === "") {
        finalPrompt = "未能成功抽取有效关键词。请检查 database.js 中的数据结构。";
    }

    const resultDisplay = document.getElementById('result-display');
    if (resultDisplay) {
        resultDisplay.innerHTML = `
            <h3 style="margin-top:0; color:var(--accent-color);">🎰 抽卡结果 (3 Tags):</h3>
            <div style="text-align:left; padding: 10px; background:#1f2937; border-radius:8px; width:100%; word-break: break-word;">
                <p style="margin-bottom: 5px; color:var(--text-sub); font-size:0.9rem;">Positive Prompt:</p>
                <code style="color:var(--text-main); font-size:1rem;">${finalPrompt}</code>
            </div>
            <div style="margin-top: 15px; font-size: 0.9rem; color: var(--text-sub); text-align: left; width: 100%;">
                <p style="margin: 0 0 5px 0; color:var(--text-main);">卡牌详情:</p>
                ${selectedTags.map(t => `<p style="margin: 2px 0;">[${t.category}] ${t.name} -> <code>${t.prompt}</code></p>`).join('')}
            </div>
        `;
    }

    if (typeof showToast === 'function') {
        showToast('✅ 抽卡完成，结果已显示！');
    }
}

document.addEventListener('DOMContentLoaded', checkSession);