import AdmZip from "adm-zip";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const TEMPLATE_PATH = "D:/BaiduNetdiskDownload/华南师范大学总结汇报主题PPT模板.pptx";
const OUTPUT_PATH = "C:/Users/Aa173/新建文件夹/ai训练计划/AR篮球POV观赛体验_模板版.pptx";

// 读取模板
const zip = new AdmZip(TEMPLATE_PATH);

// ===== 幻灯片内容替换 =====
// 每个 slide: {slideFile: "<path>", replacements: [[oldText, newText], ...]}
const slideReplacements = [
  {
    // 幻灯片1: 标题页
    slide: "ppt/slides/slide1.xml",
    reps: [
      ["汇报人：", "AR POV 体育创新团队"],
      ["xxx", ""],
      ["汇报时间：", "2026.06"],
    ],
  },
  {
    // 幻灯片2: 目录
    slide: "ppt/slides/slide2.xml",
    reps: [
      ["目 录", "目 录"],
      ["请输入标题", "目录项"],
    ],
  },
];

// 改进了的替换：slide3-11 做完整替换
// 由于 PPTX 文本分散在 <a:t> 标签中, 我们直接对整个 XML 做字符串替换

// 通用替换函数
function replaceInXml(xml, replacements) {
  let result = xml;
  for (const [from, to] of replacements) {
    // 在 <a:t> 标签中查找替换
    result = result.split(from).join(to);
  }
  return result;
}

// 为每张幻灯片定义内容
const contentMap = {
  "slide3.xml": {
    title: "什么是AR眼镜第一人称观赛？",
    body: "核心概念：通过AR眼镜，现场观众可实时切换到自己喜欢的篮球运动员的第一人称视角（POV），在真实赛场视野上叠加或切换球员主观画面。\n\n• 不是单纯录像，而是AI实时重建+叠加\n• 支持个性化选择（LeBron / Curry / 本地球星）\n• 结合真实环境：既能看到现场，又能「代入」球员视角",
  },
  "slide4.xml": {
    title: "技术可行性：已进入实战阶段",
    body: "• NBA 2026 All-Star Technology Summit 正式预览 POV Mode\n• AI驱动实时球员视角观看\n• 核心技术：多机位拍摄 + AI 3D数字孪生球场 + 球员追踪系统\n• AR眼镜载体：Xreal、Ray-Ban Meta、Snap Spectacles\n• 已从VIP试点向常规赛事扩展",
  },
  "slide5.xml": {
    title: "技术架构与流程",
    body: "01 场馆部署 → 02 数据层 → 03 呈现层 → 04 用户交互\n\n5G + 边缘计算 + 多角度摄像头 + Hawk-Eye追踪系统 + AR眼镜低延迟流 + AI渲染球员POV",
  },
  "slide6.xml": {
    title: "核心优势",
    body: "对粉丝：极致沉浸感，理解球员视野与决策速度\n对赛事方：票务溢价，数据采集与精准营销\n对运动员：推广球员个人品牌，训练与粉丝教育双用\n\n参与度预估提升15-30%  |  AR体验票溢价40-60%",
  },
  "slide7.xml": {
    title: "亮点与创新点",
    body: "01 从「看球」到「代入球」：史上首次大规模第一人称实时观赛\n02 混合现实完美融合：真实赛场+数字POV无缝切换\n03 个性化与社交：粉丝可分享「POV高光」片段\n\n差异化竞争力：超越传统转播和手机AR，制造「现场独有」稀缺感",
  },
  "slide8.xml": {
    title: "实施要点与合作伙伴",
    body: "关键要素：低延迟保障（<50ms）、信息分层显示、隐私保护（AI重建为主）\n\n推荐合作方：NBA官方、Meta、Xreal、Quintar、Stats Perform、Hawk-Eye、5G运营商\n\n成本模式：眼镜租赁 + 付费高级POV + 品牌AR植入赞助",
  },
  "slide9.xml": {
    title: "潜在挑战与解决方案",
    body: "设备成本与舒适度 → 租赁模式 + 轻量化眼镜\n信息过载与晕动 → 可自定义显示层级 + AI智能过滤\n球员隐私与接受度 → AI重建为主，非真实头戴摄像头\n大规模并发处理 → 分阶段试点（VIP → 全场）+ 边缘计算",
  },
  "slide10.xml": {
    title: "预期效果与商业价值",
    body: "预期效果：观众停留时间↑25%、满意度↑35%、分享率↑50%\n\n商业模式：门票增值、付费内容订阅、品牌AR植入、虚拟商品\n\n未来展望：2026 NBA POV Mode首秀 → 2027顶级联赛常规配置 → 2028+全球体育赛事标配",
  },
  "slide11.xml": {
    title: "总结与建议",
    body: "AR眼镜第一人称POV观赛是体育赛事从「观看」走向「沉浸共创」的关键一步，已在2026 NBA技术上落地验证。\n\n行动建议：\n• 立即启动VIP试点项目\n• 与技术伙伴对接测试\n• 结合本地篮球赛事快速验证\n• 建立商业合作框架：赞助+票务+内容付费",
  },
  "slide12.xml": {
    title: "感谢聆听",
    body: "AR眼镜第一人称篮球观赛体验\n期待深度合作\n\nAR POV 体育创新团队 | 2026.06",
  },
};

// 执行替换
for (const [slideName, content] of Object.entries(contentMap)) {
  const entry = zip.getEntry(`ppt/slides/${slideName}`);
  if (!entry) {
    console.log(`  [WARN] ${slideName} not found, skipping`);
    continue;
  }

  let xml = entry.getData().toString("utf-8");

  // 替换标题占位符
  if (content.title) {
    xml = xml.split("请输入标题").join(content.title);
    xml = xml.split("单击添加标题").join(content.title);
  }

  // 替换正文占位符
  if (content.body) {
    // 匹配常见的占位文本模式
    const placeholderPatterns = [
      "根据实际情况更改字体大小请输入汇报内容，根据实际情况更改字体大小请输入汇报内容，根据实际情况更改字体大小。",
      "请输入汇报内容，根据实际情况更改字体大小请输入汇报内容，根据实际情况更改字体大小请输入汇报内容，根据实际情况更改字体大小。",
      "请输入内容请输入内容根据实际情况更改字体大小请输入汇报内容，根据实际情况更改字体大小请输入汇报内容，根据实际情况更改字体大小。",
      "请输入内容请输入内容根据实际情况更改字体大小请输入汇报内容，根据实际情况更改字体大小请输入汇报内容。",
      "请输入内容，根据实际情况更改字体大小请输入汇报内容，请输入汇报内容，根据实际情况更改字体大小。请输入内容，根据实际情况更改字体大小。",
      "请输入内容请输入内容根据实际情况更改字体大小请输入汇报内容，请输入内容请输入内容。",
      "根据实际情况更改字体大小请输入汇报内容，根据实际情况更改字体大小。",
      "请输入内容请输入内容根据实际情况更改字体大小请输入汇报内容，根据实际情况更改字体大小。",
      "根据实际情况更改字体大小请输入汇报内容，根据实际情况更改字体大小请输入汇报内容，根据实际情况更改字体大小。",
      "为确保演示效果，请将内容调整为简洁明了的表达方式。",
    ];

    for (const pattern of placeholderPatterns) {
      if (xml.includes(pattern)) {
        xml = xml.split(pattern).join(content.body);
        break;
      }
    }
  }

  // 替换关键词占位符
  xml = xml.split("关键词").join("");

  // 替换添加标题内容
  xml = xml.split("添加标题内容").join("");

  // 替换输入文本内容
  xml = xml.split("输入文本内容").join("");

  // 更新 entry
  zip.updateFile(`ppt/slides/${slideName}`, Buffer.from(xml, "utf-8"));
  console.log(`  Updated: ${slideName} -> "${content.title}"`);
}

// 修改幻灯片1（标题页）
(() => {
  const entry = zip.getEntry("ppt/slides/slide1.xml");
  let xml = entry.getData().toString("utf-8");

  xml = xml.split("汇报人：").join("AR眼镜第一人称篮球观赛体验");
  xml = xml.split("xxx").join("让粉丝「化身」偶像的沉浸式创新");
  xml = xml.split("汇报时间：").join("2026.06  |  AR POV Team");

  zip.updateFile("ppt/slides/slide1.xml", Buffer.from(xml, "utf-8"));
  console.log(`  Updated: slide1.xml -> Title Page`);
})();

// 修改幻灯片2（目录页）
(() => {
  const entry = zip.getEntry("ppt/slides/slide2.xml");
  let xml = entry.getData().toString("utf-8");

  const tocItems = [
    "什么是AR眼镜第一人称观赛",
    "技术可行性与架构流程",
    "核心优势与创新亮点",
    "实施要点与商业价值",
  ];

  // 替换目录项
  tocItems.forEach((item, i) => {
    // 找到第i+1个"请输入标题"替换
    const idx = xml.indexOf("请输入标题");
    if (idx !== -1) {
      xml = xml.slice(0, idx) + item + xml.slice(idx + "请输入标题".length);
    }
  });

  zip.updateFile("ppt/slides/slide2.xml", Buffer.from(xml, "utf-8"));
  console.log(`  Updated: slide2.xml -> Table of Contents`);
})();

// 修改幻灯片12（结束页）
(() => {
  const entry = zip.getEntry("ppt/slides/slide12.xml");
  let xml = entry.getData().toString("utf-8");

  xml = xml.split("汇报人：").join("AR POV 体育创新团队");
  xml = xml.split("xxx").join("");
  xml = xml.split("汇报时间：").join("2026.06");
  xml = xml.split("汇报结束，感谢观看").join("期待AR篮球POV早日落地");

  zip.updateFile("ppt/slides/slide12.xml", Buffer.from(xml, "utf-8"));
  console.log(`  Updated: slide12.xml -> Thank You Page`);
})();

// 保存
zip.writeZip(OUTPUT_PATH);
console.log(`\nPPT generated: ${OUTPUT_PATH}`);
