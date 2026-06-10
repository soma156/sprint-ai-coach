import AdmZip from "adm-zip";

const templatePath = "D:/BaiduNetdiskDownload/华南师范大学总结汇报主题PPT模板.pptx";

const zip = new AdmZip(templatePath);
const entries = zip.getEntries();

console.log("=== PPTX 文件结构 ===\n");
entries.forEach(e => {
  if (!e.isDirectory) {
    console.log(`  ${e.entryName}  (${e.getData().length} bytes)`);
  }
});

// 读取主题
const themeEntry = entries.find(e => e.entryName.startsWith("ppt/theme/"));
if (themeEntry) {
  console.log("\n=== 主题配色 ===");
  const themeXml = themeEntry.getData().toString("utf-8");
  const colorMatches = themeXml.match(/<a:([^>]+)>/g) || [];
  // 提取颜色
  const colors = [];
  const colorRegex = /<a:srgbClr val="([^"]+)"/g;
  let m;
  while ((m = colorRegex.exec(themeXml)) !== null) {
    if (!colors.includes(m[1])) colors.push(m[1]);
  }
  console.log("  主题颜色:", colors.join(", "));
}

// 读取幻灯片
console.log("\n=== 幻灯片列表 ===");
entries.filter(e => e.entryName.match(/^ppt\/slides\/slide\d+\.xml$/))
  .sort((a, b) => {
    const na = parseInt(a.entryName.match(/slide(\d+)/)[1]);
    const nb = parseInt(b.entryName.match(/slide(\d+)/)[1]);
    return na - nb;
  })
  .forEach(slide => {
    const xml = slide.getData().toString("utf-8");
    // 提取文本
    const texts = [];
    const textRegex = /<a:t[^>]*>([^<]+)<\/a:t>/g;
    let tm;
    while ((tm = textRegex.exec(xml)) !== null) {
      if (tm[1].trim()) texts.push(tm[1].trim());
    }
    console.log(`\n  ${slide.entryName}: ${texts.length} 个文本元素`);
    texts.slice(0, 8).forEach(t => console.log(`    - "${t}"`));
    if (texts.length > 8) console.log(`    ... 还有 ${texts.length - 8} 个`);
  });

// 读取母版
console.log("\n=== 幻灯片母版 ===");
entries.filter(e => e.entryName.includes("slideMaster") || e.entryName.includes("slideLayout"))
  .forEach(e => console.log(`  ${e.entryName}`));
