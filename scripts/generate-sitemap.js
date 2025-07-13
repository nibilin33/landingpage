#!/usr/bin/env node

/**
 * 自动生成 sitemap.xml 脚本
 * 运行: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

// 配置
const CONFIG = {
  baseUrl: 'https://ielts.liqueai.com',
  outputPath: path.join(__dirname, '../public/sitemap.xml'),
  lastmod: new Date().toISOString().split('T')[0], // YYYY-MM-DD 格式
};

// 网站页面配置
const PAGES = [
  {
    url: '/',
    priority: '1.0',
    changefreq: 'weekly',
    description: 'Main Landing Page'
  },
  {
    url: '/#mock',
    priority: '0.8',
    changefreq: 'monthly',
    description: 'Mock Test Section'
  },
  {
    url: '/#practice',
    priority: '0.8',
    changefreq: 'monthly',
    description: 'Practice Test Section'
  },
  {
    url: '/#plan',
    priority: '0.8',
    changefreq: 'monthly',
    description: 'Study Plan Section'
  },
  {
    url: '/#faq',
    priority: '0.7',
    changefreq: 'monthly',
    description: 'FAQ Section'
  }
];

// 可选页面（根据需要启用）
const OPTIONAL_PAGES = [
  {
    url: '/?lang=zh',
    priority: '0.9',
    changefreq: 'weekly',
    description: 'Chinese Version',
    enabled: false // 设置为 true 启用
  },
  {
    url: '/privacy',
    priority: '0.4',
    changefreq: 'yearly',
    description: 'Privacy Policy',
    enabled: false
  },
  {
    url: '/terms',
    priority: '0.4',
    changefreq: 'yearly',
    description: 'Terms of Service',
    enabled: false
  }
];

/**
 * 生成单个 URL 条目
 */
function generateUrlEntry(page) {
  return `  <!-- ${page.description} -->
  <url>
    <loc>${CONFIG.baseUrl}${page.url}</loc>
    <lastmod>${CONFIG.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
}

/**
 * 生成完整的 sitemap XML
 */
function generateSitemap() {
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

  const xmlFooter = `
</urlset>`;

  // 生成主要页面
  const mainPages = PAGES.map(generateUrlEntry).join('\n\n');
  
  // 生成可选页面
  const optionalPages = OPTIONAL_PAGES
    .filter(page => page.enabled)
    .map(generateUrlEntry)
    .join('\n\n');

  // 组合完整的 XML
  let xmlContent = xmlHeader + '\n\n' + mainPages;
  
  if (optionalPages) {
    xmlContent += '\n\n  <!-- Optional Pages -->\n' + optionalPages;
  }
  
  xmlContent += xmlFooter;

  return xmlContent;
}

/**
 * 写入文件
 */
function writeSitemap() {
  try {
    const xmlContent = generateSitemap();
    
    // 确保目录存在
    const dir = path.dirname(CONFIG.outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // 写入文件
    fs.writeFileSync(CONFIG.outputPath, xmlContent, 'utf8');
    
    console.log('✅ Sitemap 生成成功!');
    console.log(`📄 文件位置: ${CONFIG.outputPath}`);
    console.log(`📅 更新时间: ${CONFIG.lastmod}`);
    console.log(`🔗 页面数量: ${PAGES.length + OPTIONAL_PAGES.filter(p => p.enabled).length}`);
    
  } catch (error) {
    console.error('❌ Sitemap 生成失败:', error.message);
    process.exit(1);
  }
}

/**
 * 验证 sitemap 格式
 */
function validateSitemap() {
  try {
    const content = fs.readFileSync(CONFIG.outputPath, 'utf8');
    
    // 基本 XML 格式检查
    if (!content.includes('<?xml') || !content.includes('<urlset')) {
      throw new Error('Invalid XML format');
    }
    
    // URL 数量检查
    const urlCount = (content.match(/<url>/g) || []).length;
    if (urlCount === 0) {
      throw new Error('No URLs found in sitemap');
    }
    
    console.log(`✅ Sitemap 验证通过 (${urlCount} URLs)`);
    return true;
    
  } catch (error) {
    console.error('❌ Sitemap 验证失败:', error.message);
    return false;
  }
}

// 主函数
function main() {
  console.log('🚀 开始生成 sitemap.xml...');
  
  writeSitemap();
  
  if (validateSitemap()) {
    console.log('\n📋 下一步建议:');
    console.log('1. 检查文件: cat public/sitemap.xml');
    console.log('2. 提交到 Google Search Console');
    console.log('3. 提交到 Bing Webmaster Tools');
    console.log(`4. 访问: ${CONFIG.baseUrl}/sitemap.xml 验证可访问性`);
  }
}

// 如果直接运行脚本
if (require.main === module) {
  main();
}

module.exports = {
  generateSitemap,
  writeSitemap,
  validateSitemap,
  CONFIG,
  PAGES,
  OPTIONAL_PAGES
};
