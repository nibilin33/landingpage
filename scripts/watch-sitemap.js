#!/usr/bin/env node

/**
 * 开发环境 sitemap 监听脚本
 * 当文件发生变化时自动重新生成 sitemap
 * 运行: node scripts/watch-sitemap.js
 */

const fs = require('fs');
const path = require('path');
const { generateSitemap, writeSitemap, CONFIG } = require('./generate-sitemap.js');

// 监听的文件和目录
const WATCH_PATHS = [
  path.join(__dirname, '../src'),
  path.join(__dirname, '../public'),
  path.join(__dirname, 'generate-sitemap.js')
];

console.log('🔍 Sitemap 监听模式启动...');
console.log('📁 监听目录:', WATCH_PATHS);

// 防抖函数
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 生成 sitemap 的防抖版本
const debouncedGenerate = debounce(() => {
  console.log('\n📝 文件变化detected，重新生成 sitemap...');
  writeSitemap();
}, 1000);

// 监听文件变化
WATCH_PATHS.forEach(watchPath => {
  if (fs.existsSync(watchPath)) {
    fs.watch(watchPath, { recursive: true }, (eventType, filename) => {
      if (filename && !filename.includes('node_modules') && !filename.includes('.git')) {
        console.log(`📄 文件变化: ${filename} (${eventType})`);
        debouncedGenerate();
      }
    });
    console.log(`✅ 监听: ${watchPath}`);
  } else {
    console.log(`⚠️  路径不存在: ${watchPath}`);
  }
});

// 初始生成
console.log('\n🚀 初始生成 sitemap...');
writeSitemap();

console.log('\n💡 提示: 按 Ctrl+C 停止监听');

// 优雅退出
process.on('SIGINT', () => {
  console.log('\n\n👋 Sitemap 监听已停止');
  process.exit(0);
});
