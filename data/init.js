// ============================================================
// 文件名: data/init.js
// 作用: 强制初始化全局数据容器，防止 TypeError 报错
// ============================================================

// 使用 window 确保容器挂载在最高层级
if (!window._PRESETS) {
    window._PRESETS = {};
}

if (!window._COLLECTIONS) {
    window._COLLECTIONS = {};
}

// 打印日志方便调试（上线后可删除）
console.log("🚀 [init.js] 核心容器已锁定。");