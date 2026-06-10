import PptxGenJS from "pptxgenjs";

const pptx = new PptxGenJS();

// ===== 主题定义 =====
const DARK_BG = "0B1D3A";
const ORANGE = "FF6B2B";
const WHITE = "FFFFFF";
const LIGHT_BLUE = "4A90D9";
const GRAY = "A0AEC0";
const DARK_CARD = "112B50";

// 通用设置
pptx.defineLayout({ name: "CUSTOM", width: 13.33, height: 7.5 });
pptx.layout = "CUSTOM";
pptx.author = "AR Sports Innovation Team";
pptx.title = "AR眼镜第一人称篮球观赛体验";

// ===== 辅助函数 =====
function addDarkBg(slide) {
  slide.background = { color: DARK_BG };
}

function addFooter(slide, pageNum) {
  slide.addText(`AR POV Basketball (C) 2026`, {
    x: 0.5, y: 7.0, w: 3, h: 0.3,
    fontSize: 8, color: GRAY, fontFace: "Microsoft YaHei"
  });
  slide.addText(`${pageNum}`, {
    x: 12.3, y: 7.0, w: 0.5, h: 0.3,
    fontSize: 8, color: GRAY, fontFace: "Microsoft YaHei", align: "right"
  });
}

function addOrangeAccent(slide, x, y, w, h) {
  slide.addShape(pptx.ShapeType.rect, {
    x: x, y: y, w: w, h: h,
    fill: { color: ORANGE },
    rectRadius: 0.05,
  });
}

function addTitle(slide, title, subtitle) {
  addOrangeAccent(slide, 0.6, 1.2, 3.5, 0.06);
  slide.addText(title, {
    x: 0.6, y: 1.4, w: 11.5, h: 0.8,
    fontSize: 30, bold: true, color: WHITE, fontFace: "Microsoft YaHei"
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.6, y: 2.2, w: 11.5, h: 0.5,
      fontSize: 14, color: GRAY, fontFace: "Microsoft YaHei"
    });
  }
}

function addCard(slide, x, y, w, h, title, items) {
  slide.addShape(pptx.ShapeType.rect, {
    x: x, y: y, w: w, h: h,
    fill: { color: DARK_CARD },
    rectRadius: 0.15,
    shadow: { type: "outer", blur: 4, offset: 2, color: "000000", opacity: 0.3 }
  });
  slide.addText(title, {
    x: x + 0.2, y: y + 0.15, w: w - 0.4, h: 0.4,
    fontSize: 14, bold: true, color: ORANGE, fontFace: "Microsoft YaHei"
  });
  if (Array.isArray(items)) {
    const text = items.map((item) => `• ${item}`).join("\n");
    slide.addText(text, {
      x: x + 0.25, y: y + 0.6, w: w - 0.5, h: h - 0.8,
      fontSize: 11, color: WHITE, fontFace: "Microsoft YaHei",
      lineSpacingMultiple: 1.6, valign: "top"
    });
  } else if (items) {
    slide.addText(items, {
      x: x + 0.2, y: y + 0.55, w: w - 0.4, h: h - 0.7,
      fontSize: 11, color: WHITE, fontFace: "Microsoft YaHei",
      lineSpacingMultiple: 1.6, valign: "top"
    });
  }
}

// ==========================================
// 幻灯片 1: 标题页
// ==========================================
(() => {
  const slide = pptx.addSlide();
  addDarkBg(slide);
  addOrangeAccent(slide, 0.6, 2.5, 0.08, 1.8);

  slide.addText("AR眼镜第一人称篮球观赛体验", {
    x: 1.0, y: 2.2, w: 11, h: 1.0,
    fontSize: 40, bold: true, color: WHITE, fontFace: "Microsoft YaHei"
  });

  slide.addText("让粉丝「化身」偶像的沉浸式创新", {
    x: 1.0, y: 3.3, w: 11, h: 0.7,
    fontSize: 22, color: ORANGE, fontFace: "Microsoft YaHei"
  });

  slide.addText("体育赛事设计前沿应用（2026趋势）", {
    x: 1.0, y: 4.2, w: 11, h: 0.5,
    fontSize: 15, color: LIGHT_BLUE, fontFace: "Microsoft YaHei"
  });

  slide.addText("NBA AR POV Team  |  2026.06", {
    x: 1.0, y: 5.5, w: 11, h: 0.4,
    fontSize: 12, color: GRAY, fontFace: "Microsoft YaHei"
  });

  addOrangeAccent(slide, 1.0, 6.5, 11.3, 0.02);
  addFooter(slide, 1);
})();

// ==========================================
// 幻灯片 2: 什么是AR眼镜第一人称观赛？
// ==========================================
(() => {
  const slide = pptx.addSlide();
  addDarkBg(slide);
  addTitle(slide, "什么是AR眼镜第一人称观赛？", "Core Concept");

  // 核心概念
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.6, y: 2.8, w: 7.0, h: 3.5,
    fill: { color: DARK_CARD },
    rectRadius: 0.15
  });

  slide.addText([
    { text: "核心概念\n\n", options: { fontSize: 16, bold: true, color: ORANGE, fontFace: "Microsoft YaHei" } },
    { text: "通过AR眼镜，现场观众可实时切换到自己喜欢的篮球运动员的第一人称视角（POV），在真实赛场视野上叠加或切换球员主观画面。\n\n", options: { fontSize: 13, color: WHITE, fontFace: "Microsoft YaHei" } },
    { text: "不是单纯录像，而是AI实时重建+叠加\n", options: { fontSize: 11, color: GRAY, fontFace: "Microsoft YaHei", bullet: true } },
    { text: "支持个性化选择（LeBron / Curry / 本地球星）\n", options: { fontSize: 11, color: GRAY, fontFace: "Microsoft YaHei", bullet: true } },
    { text: "结合真实环境：既能看到现场，又能「代入」球员视角", options: { fontSize: 11, color: GRAY, fontFace: "Microsoft YaHei", bullet: true } },
  ], {
    x: 0.85, y: 2.85, w: 6.5, h: 3.4,
    valign: "top"
  });

  // 右侧对比
  slide.addShape(pptx.ShapeType.rect, {
    x: 8.0, y: 2.8, w: 5.0, h: 1.5,
    fill: { color: DARK_CARD },
    rectRadius: 0.1
  });
  slide.addText("普通观看", {
    x: 8.2, y: 2.95, w: 4.6, h: 0.4,
    fontSize: 13, bold: true, color: GRAY, fontFace: "Microsoft YaHei"
  });
  slide.addText("看台固定视角\n被动观看比赛", {
    x: 8.2, y: 3.35, w: 4.6, h: 0.8,
    fontSize: 11, color: GRAY, fontFace: "Microsoft YaHei"
  });

  slide.addShape(pptx.ShapeType.rect, {
    x: 8.0, y: 4.6, w: 5.0, h: 1.5,
    fill: { color: ORANGE },
    rectRadius: 0.1
  });
  slide.addText("AR POV模式", {
    x: 8.2, y: 4.75, w: 4.6, h: 0.4,
    fontSize: 13, bold: true, color: WHITE, fontFace: "Microsoft YaHei"
  });
  slide.addText("球员第一人称视角\nAI实时重建 + 主动代入", {
    x: 8.2, y: 5.15, w: 4.6, h: 0.8,
    fontSize: 11, color: WHITE, fontFace: "Microsoft YaHei"
  });

  addFooter(slide, 2);
})();

// ==========================================
// 幻灯片 3: 技术可行性
// ==========================================
(() => {
  const slide = pptx.addSlide();
  addDarkBg(slide);
  addTitle(slide, "技术可行性：已进入实战阶段", "Technology Readiness – 2026 Update");

  addCard(slide, 0.6, 2.8, 5.5, 3.8, "2026最新进展", [
    "NBA 2026 All-Star Technology Summit 正式预览 POV Mode",
    "AI驱动实时球员视角观看",
    "核心技术：多机位拍摄 + AI 3D数字孪生球场 + 球员追踪系统",
    "AR眼镜载体：Xreal、Ray-Ban Meta、Snap Spectacles",
    "已从VIP试点向常规赛事扩展",
  ]);

  // 右侧 AR眼镜产品生态
  slide.addShape(pptx.ShapeType.rect, {
    x: 6.6, y: 2.8, w: 6.2, h: 3.8,
    fill: { color: DARK_CARD },
    rectRadius: 0.15
  });
  slide.addText("AR眼镜产品生态", {
    x: 6.8, y: 2.95, w: 5.8, h: 0.4,
    fontSize: 14, bold: true, color: ORANGE, fontFace: "Microsoft YaHei"
  });

  const devices = [
    { name: "Xreal Air 2", status: "已商用" },
    { name: "Ray-Ban Meta", status: "千万级出货" },
    { name: "Snap Spectacles 5", status: "开发者版" },
    { name: "Apple Vision (未来)", status: "行业标杆潜力" },
  ];

  devices.forEach((d, i) => {
    const dy = 3.5 + i * 0.65;
    slide.addShape(pptx.ShapeType.rect, {
      x: 7.0, y: dy, w: 5.2, h: 0.5,
      fill: { color: i % 2 === 0 ? DARK_CARD : DARK_BG },
      rectRadius: 0.05
    });
    slide.addText(d.name, {
      x: 7.1, y: dy, w: 2.8, h: 0.5,
      fontSize: 12, color: WHITE, fontFace: "Microsoft YaHei", valign: "middle"
    });
    slide.addText(d.status, {
      x: 10.0, y: dy, w: 2.0, h: 0.5,
      fontSize: 10, color: ORANGE, fontFace: "Microsoft YaHei", valign: "middle", align: "right"
    });
  });

  addFooter(slide, 3);
})();

// ==========================================
// 幻灯片 4: 技术架构与流程
// ==========================================
(() => {
  const slide = pptx.addSlide();
  addDarkBg(slide);
  addTitle(slide, "如何实施：技术架构与流程", "Technical Architecture");

  const steps = [
    { num: "01", title: "场馆部署", desc: "5G + 边缘计算\n多角度高精度摄像头" },
    { num: "02", title: "数据层", desc: "Hawk-Eye追踪系统\n实时生成3D模型" },
    { num: "03", title: "呈现层", desc: "AR眼镜低延迟流\nAI渲染球员POV" },
    { num: "04", title: "用户交互", desc: "语音/手势/App\n即时切换球员" },
  ];

  steps.forEach((s, i) => {
    const sx = 0.6 + i * 3.15;
    const sy = 2.8;

    slide.addShape(pptx.ShapeType.rect, {
      x: sx, y: sy, w: 2.8, h: 2.6,
      fill: { color: DARK_CARD },
      rectRadius: 0.1
    });

    slide.addText(s.num, {
      x: sx + 0.2, y: sy + 0.15, w: 0.6, h: 0.5,
      fontSize: 20, bold: true, color: ORANGE, fontFace: "Microsoft YaHei"
    });

    slide.addText(s.title, {
      x: sx + 0.2, y: sy + 0.7, w: 2.4, h: 0.4,
      fontSize: 15, bold: true, color: WHITE, fontFace: "Microsoft YaHei"
    });

    slide.addText(s.desc, {
      x: sx + 0.2, y: sy + 1.3, w: 2.4, h: 1.0,
      fontSize: 11, color: GRAY, fontFace: "Microsoft YaHei", lineSpacingMultiple: 1.6
    });

    if (i < 3) {
      slide.addText("→", {
        x: sx + 2.75, y: sy + 0.9, w: 0.4, h: 0.4,
        fontSize: 18, color: ORANGE, align: "center"
      });
    }
  });

  slide.addText("实施路径: 短期 VIP租赁+基础POV → 中期 全场覆盖+个性化 → 长期 Metaverse远程同步体验", {
    x: 0.6, y: 5.8, w: 12, h: 0.5,
    fontSize: 11, color: LIGHT_BLUE, fontFace: "Microsoft YaHei",
  });

  addOrangeAccent(slide, 0.6, 5.55, 11.5, 0.02);
  addFooter(slide, 4);
})();

// ==========================================
// 幻灯片 5: 实施要点与合作伙伴
// ==========================================
(() => {
  const slide = pptx.addSlide();
  addDarkBg(slide);
  addTitle(slide, "实施要点与合作伙伴", "Key Elements & Partners");

  addCard(slide, 0.6, 2.8, 3.8, 3.6, "关键要素", [
    "低延迟保障（<50ms）",
    "信息分层显示（避免过载）",
    "隐私保护（AI重建为主）",
    "非真实头戴摄像头",
  ]);

  addCard(slide, 4.8, 2.8, 3.8, 3.6, "推荐合作方", [
    "NBA官方 / Meta / Xreal",
    "Quintar 空间计算",
    "Stats Perform / Hawk-Eye",
    "5G运营商（场馆覆盖）",
  ]);

  addCard(slide, 9.0, 2.8, 3.8, 3.6, "成本模式", [
    "眼镜租赁收入",
    "付费高级POV（球星视角）",
    "品牌AR植入赞助",
    "VIP体验溢价",
  ]);

  addFooter(slide, 5);
})();

// ==========================================
// 幻灯片 6: 核心优势
// ==========================================
(() => {
  const slide = pptx.addSlide();
  addDarkBg(slide);
  addTitle(slide, "核心优势", "Why AR POV Matters");

  const advantages = [
    {
      title: "对粉丝",
      items: [
        "极致沉浸感：理解球员视野",
        "情感连接：与偶像「同场战斗」",
        "新手友好：快速看懂比赛",
        "社交分享：POV高光片段",
      ],
      highlight: "参与度预估提升 15-30%",
    },
    {
      title: "对赛事方",
      items: [
        "票务溢价（AR体验专区）",
        "数据采集与精准营销",
        "年轻化吸引（Gen Z主力）",
        "赛事IP差异化竞争力",
      ],
      highlight: "AR体验票溢价 40-60%",
    },
    {
      title: "对运动员/联赛",
      items: [
        "推广球员个人品牌",
        "训练与粉丝教育双用",
        "创造新内容品类",
        "扩大全球影响力",
      ],
      highlight: "球员品牌价值提升 20%+",
    },
  ];

  advantages.forEach((a, i) => {
    const ax = 0.6 + i * 4.2;

    slide.addShape(pptx.ShapeType.rect, {
      x: ax, y: 2.8, w: 3.9, h: 3.5,
      fill: { color: DARK_CARD },
      rectRadius: 0.1
    });

    slide.addText(a.title, {
      x: ax + 0.2, y: 2.9, w: 3.5, h: 0.4,
      fontSize: 14, bold: true, color: ORANGE, fontFace: "Microsoft YaHei"
    });

    slide.addText(a.items.map(item => `• ${item}`).join("\n"), {
      x: ax + 0.25, y: 3.4, w: 3.4, h: 2.0,
      fontSize: 11, color: WHITE, fontFace: "Microsoft YaHei", lineSpacingMultiple: 1.8, valign: "top"
    });

    addOrangeAccent(slide, ax + 0.15, 5.8, 3.6, 0.35);
    slide.addText(a.highlight, {
      x: ax + 0.15, y: 5.8, w: 3.6, h: 0.35,
      fontSize: 10, bold: true, color: WHITE, fontFace: "Microsoft YaHei", align: "center"
    });
  });

  addFooter(slide, 6);
})();

// ==========================================
// 幻灯片 7: 亮点与创新点
// ==========================================
(() => {
  const slide = pptx.addSlide();
  addDarkBg(slide);
  addTitle(slide, "亮点与创新点", "Highlights & Innovation");

  const highlights = [
    {
      num: "01",
      title: "从「看球」到「代入球」",
      desc: "史上首次大规模第一人称实时观赛体验",
    },
    {
      num: "02",
      title: "混合现实完美融合",
      desc: "真实赛场 + 数字POV无缝切换，非替代而是增强",
    },
    {
      num: "03",
      title: "个性化与社交",
      desc: "粉丝可分享「POV高光」片段，形成UGC内容生态",
    },
  ];

  highlights.forEach((h, i) => {
    const hx = 0.6 + i * 4.2;

    slide.addShape(pptx.ShapeType.rect, {
      x: hx, y: 2.8, w: 3.9, h: 2.0,
      fill: { color: DARK_CARD },
      rectRadius: 0.1
    });

    slide.addText(h.num, {
      x: hx + 0.2, y: 2.9, w: 0.5, h: 0.5,
      fontSize: 28, bold: true, color: ORANGE, fontFace: "Microsoft YaHei"
    });

    slide.addText(h.title, {
      x: hx + 1.0, y: 2.85, w: 2.7, h: 0.5,
      fontSize: 14, bold: true, color: WHITE, fontFace: "Microsoft YaHei"
    });

    slide.addText(h.desc, {
      x: hx + 0.2, y: 3.5, w: 3.5, h: 0.9,
      fontSize: 11, color: GRAY, fontFace: "Microsoft YaHei"
    });
  });

  addCard(slide, 0.6, 5.1, 12.1, 1.6, "差异化竞争力", [
    "超越传统转播和手机AR — 提供「现场独有」稀缺感",
    "与文旅、赞助深度结合 — 「从XXX视角看品牌」全新植入模式",
    "创造全新内容品类 — 球员POV精彩集锦 = 社交媒体病毒传播",
  ]);

  addFooter(slide, 7);
})();

// ==========================================
// 幻灯片 8: 潜在挑战与解决方案
// ==========================================
(() => {
  const slide = pptx.addSlide();
  addDarkBg(slide);
  addTitle(slide, "潜在挑战与解决方案", "Challenges & Solutions");

  const challenges = [
    { challenge: "设备成本与舒适度", solution: "租赁模式 + 轻量化眼镜迭代" },
    { challenge: "信息过载与晕动", solution: "可自定义显示层级 + AI智能过滤" },
    { challenge: "球员隐私与接受度", solution: "AI重建为主，非真实头戴摄像头" },
    { challenge: "大规模并发处理", solution: "分阶段试点（VIP → 全场）+ 边缘计算" },
  ];

  // 表头 - 挑战
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.6, y: 2.8, w: 6.0, h: 0.45, fill: { color: ORANGE }
  });
  slide.addText("挑战", {
    x: 0.6, y: 2.8, w: 6.0, h: 0.45,
    fontSize: 13, bold: true, color: WHITE, fontFace: "Microsoft YaHei", align: "center"
  });

  // 表头 - 解决方案
  slide.addShape(pptx.ShapeType.rect, {
    x: 6.7, y: 2.8, w: 6.0, h: 0.45, fill: { color: LIGHT_BLUE }
  });
  slide.addText("解决方案", {
    x: 6.7, y: 2.8, w: 6.0, h: 0.45,
    fontSize: 13, bold: true, color: WHITE, fontFace: "Microsoft YaHei", align: "center"
  });

  challenges.forEach((c, i) => {
    const cy = 3.35 + i * 0.9;

    slide.addShape(pptx.ShapeType.rect, {
      x: 0.6, y: cy, w: 6.0, h: 0.75,
      fill: { color: i % 2 === 0 ? DARK_CARD : DARK_BG },
    });
    slide.addText(c.challenge, {
      x: 0.8, y: cy, w: 5.6, h: 0.75,
      fontSize: 12, color: WHITE, fontFace: "Microsoft YaHei", valign: "middle"
    });

    slide.addShape(pptx.ShapeType.rect, {
      x: 6.7, y: cy, w: 6.0, h: 0.75,
      fill: { color: i % 2 === 0 ? DARK_CARD : DARK_BG },
    });
    slide.addText(c.solution, {
      x: 6.9, y: cy, w: 5.6, h: 0.75,
      fontSize: 12, color: WHITE, fontFace: "Microsoft YaHei", valign: "middle"
    });

    slide.addText("→", {
      x: 6.3, y: cy, w: 0.5, h: 0.75,
      fontSize: 16, color: ORANGE, align: "center", valign: "middle"
    });
  });

  addFooter(slide, 8);
})();

// ==========================================
// 幻灯片 9: 预期效果与商业价值
// ==========================================
(() => {
  const slide = pptx.addSlide();
  addDarkBg(slide);
  addTitle(slide, "预期效果与商业价值", "Expected Impact & Business Model");

  addCard(slide, 0.6, 2.8, 5.8, 2.0, "预期效果", [
    "观众停留时间增加 25%、满意度增加 35%",
    "社交媒体分享率增加 50%（POV高光UGC）",
    "成为赛事标志性创新IP",
  ]);

  addCard(slide, 6.8, 2.8, 5.9, 2.0, "商业模式", [
    "门票增值（AR专区溢价）",
    "付费内容订阅（球星POV套餐）",
    "品牌AR植入 + 虚拟商品收入",
  ]);

  // 未来展望
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.6, y: 5.2, w: 12.1, h: 1.5,
    fill: { color: DARK_CARD },
    rectRadius: 0.1
  });

  slide.addText("未来展望", {
    x: 0.9, y: 5.3, w: 5, h: 0.35,
    fontSize: 14, bold: true, color: ORANGE, fontFace: "Microsoft YaHei"
  });

  slide.addText([
    { text: "2026", options: { fontSize: 12, bold: true, color: ORANGE } },
    { text: "  NBA All-Star POV Mode 首秀", options: { fontSize: 12, color: WHITE } },
    { text: "    →    ", options: { fontSize: 12, color: GRAY } },
    { text: "2027", options: { fontSize: 12, bold: true, color: ORANGE } },
    { text: "  顶级联赛常规配置", options: { fontSize: 12, color: WHITE } },
    { text: "    →    ", options: { fontSize: 12, color: GRAY } },
    { text: "2028+", options: { fontSize: 12, bold: true, color: ORANGE } },
    { text: "  全球体育赛事标配 + Metaverse联动", options: { fontSize: 12, color: WHITE } },
  ], {
    x: 0.9, y: 5.8, w: 11.5, h: 0.5,
    valign: "middle"
  });

  addFooter(slide, 9);
})();

// ==========================================
// 幻灯片 10: 总结与建议
// ==========================================
(() => {
  const slide = pptx.addSlide();
  addDarkBg(slide);
  addTitle(slide, "总结与建议", "Conclusion & Next Steps");

  // 一句话总结
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.6, y: 2.8, w: 12.1, h: 1.2,
    fill: { color: ORANGE },
    rectRadius: 0.1
  });
  slide.addText("AR眼镜第一人称POV观赛是体育赛事从「观看」走向「沉浸共创」的关键一步，已在2026 NBA技术上落地验证。", {
    x: 0.9, y: 2.85, w: 11.5, h: 1.1,
    fontSize: 16, bold: true, color: WHITE, fontFace: "Microsoft YaHei",
    valign: "middle", align: "center"
  });

  addCard(slide, 0.6, 4.3, 7.5, 2.5, "行动建议", [
    "立即启动VIP试点项目，选择2-3场本地赛事",
    "与技术伙伴（Meta/Xreal/5G运营商）对接测试",
    "结合本地篮球赛事快速验证并收集反馈数据",
    "建立商业合作框架：赞助 + 票务 + 内容付费",
  ]);

  // Q&A
  slide.addShape(pptx.ShapeType.rect, {
    x: 8.5, y: 4.3, w: 4.2, h: 2.5,
    fill: { color: DARK_CARD },
    rectRadius: 0.1
  });
  slide.addText("Q & A", {
    x: 8.5, y: 4.5, w: 4.2, h: 0.6,
    fontSize: 24, bold: true, color: ORANGE, fontFace: "Microsoft YaHei", align: "center"
  });
  slide.addText("\n感谢聆听\n期待深度合作", {
    x: 8.5, y: 5.2, w: 4.2, h: 1.2,
    fontSize: 13, color: GRAY, fontFace: "Microsoft YaHei", align: "center", lineSpacingMultiple: 1.8
  });

  addFooter(slide, 10);
})();

// ==========================================
// 保存文件
// ==========================================
const outputPath = "C:/Users/Aa173/新建文件夹/ai训练计划/AR眼镜第一人称篮球观赛体验.pptx";
await pptx.writeFile({ fileName: outputPath });
console.log("PPT generated successfully!");
console.log("Path: " + outputPath);
console.log("10 slides, dark blue + orange basketball theme");
