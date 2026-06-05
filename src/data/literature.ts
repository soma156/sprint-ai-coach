// 短跑运动科学知识库

export interface ScienceTopic {
  id: string
  title: string
  category: '生物力学' | '训练科学' | '运动生理' | '伤病预防' | '营养恢复' | '青训发展'
  summary: string
  keyFindings: string[]
  practicalApplication: string
  references: string[]
  searchLinks: { label: string; url: string }[]
}

export const scienceTopics: ScienceTopic[] = [
  // ========== 生物力学 ==========
  {
    id: 'sprint-biomechanics',
    title: '短跑的生物力学基础：步频 vs 步幅的优化',
    category: '生物力学',
    summary: '短跑速度 = 步频 × 步幅。世界顶级短跑运动员步频约4.5-4.8步/秒，步幅约2.4-2.7米。博尔特的成功在于他能在保持极高步频的同时拥有远超常人的步幅——这得益于他1.95m的身高和出色的下肢力量。研究表明，精英运动员在最大速度阶段，触地时间仅0.08-0.12秒，腾空时间约0.12-0.14秒。',
    keyFindings: [
      '最大速度阶段触地时间与成绩高度相关（r=-0.73）',
      '身体质心垂直位移与水平速度的比值越小，机械效率越高',
      '着地时脚相对于身体质心的水平距离是制动力的关键决定因素',
      '精英短跑运动员起跑前10m约需5-6步，而非新手常见的8-10步',
    ],
    practicalApplication: '训练中应同时发展步频和步幅。步频受限的运动员应多做A-Skip、小步跑等快速地面转换训练；步幅受限的运动员应加强伸髋力量（臀推、腘绳肌训练）和柔韧性。',
    references: ['Mann, R. (2011). The Mechanics of Sprinting and Hurdling', 'Hunter, J.P. et al. (2004). Interaction of step length and step rate during sprint running'],
    searchLinks: [
      { label: '知网：短跑生物力学+步频步幅', url: 'https://kns.cnki.net/kns8s/search?keyword=短跑+生物力学+步频+步幅' },
      { label: 'Google Scholar: Sprint Biomechanics', url: 'https://scholar.google.com/scholar?q=sprint+biomechanics+step+frequency+length' },
      { label: 'PubMed: Sprint Running Mechanics', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=sprint+running+biomechanics' },
    ],
  },
  {
    id: 'ground-reaction-force',
    title: '地面反作用力与短跑推进效率',
    category: '生物力学',
    summary: '短跑每一步的地面反作用力可达体重的3-6倍。研究发现，短跑成绩与垂直地面反作用力的峰值高度相关——但更重要的是力的方向。优秀短跑运动员能将更多力量导向水平方向（推进力），而非垂直方向。着地时踝关节的刚性和跟腱的弹性回馈在其中起决定性作用。',
    keyFindings: [
      '精英短跑者每一步的水平推进力峰值可达体重的0.5-0.7倍',
      '着地支撑期前50ms内的力输出对加速阶段尤为重要',
      '踝关节刚性（ankle stiffness）与最大速度阶段的成绩显著相关',
      '跟腱的弹性回馈贡献了奔跑中约35%的机械能',
    ],
    practicalApplication: '踝关节刚性训练（Pogo Jump、直腿跑）和跟腱增强训练（跳深、北欧弯举）是提高地面反作用力利用效率的关键。力量训练应注重发力速率（RFD）而非仅关注最大力量。',
    references: ['Weyand, P.G. et al. (2000). Faster top running speeds are achieved with greater ground forces', 'Clark, K.P. & Weyand, P.G. (2014). Are running speeds maximized with simple-spring stance mechanics?'],
    searchLinks: [
      { label: '知网：地面反作用力+短跑', url: 'https://kns.cnki.net/kns8s/search?keyword=地面反作用力+短跑' },
      { label: 'Google Scholar: Ground Reaction Force Sprint', url: 'https://scholar.google.com/scholar?q=ground+reaction+force+sprint+running' },
    ],
  },

  // ========== 训练科学 ==========
  {
    id: 'periodization-sprint',
    title: '短跑训练周期化：从准备期到比赛期的科学规划',
    category: '训练科学',
    summary: '短跑训练的周期化模型通常分为：一般准备期（GPP）、专项准备期（SPP）、比赛期和过渡期。GPP阶段侧重基础力量和一般体能，SPP阶段逐步增加专项速度和爆发力训练比例。研究表明，非线性周期化（每周混合多种训练刺激）比传统的线性周期化在短跑中更有效——因为这更贴近短跑本身的多样化需求。',
    keyFindings: [
      '准备期力量训练应占总训练量40-50%，比赛期降至20-25%',
      '最大速度训练在比赛期前4-6周达到峰值，之后逐步减量',
      '减量期（taper）2-3周可将成绩提升2-3%（约0.15-0.25s/100m）',
      '每周至少保留1次最大速度训练以维持神经适应',
    ],
    practicalApplication: '赛季规划建议：GPP 6-8周（基础力量+技术）→ SPP 4-6周（专项速度+爆发力）→ 比赛期4-8周（维持速度+减量）→ 过渡期2-4周（主动恢复）。每个阶段结束后评估并根据实际状态调整下一阶段。',
    references: ['Bompa, T. & Haff, G.G. (2009). Periodization: Theory and Methodology of Training', 'Issurin, V.B. (2010). New horizons for the methodology and physiology of training periodization'],
    searchLinks: [
      { label: '知网：短跑训练周期化', url: 'https://kns.cnki.net/kns8s/search?keyword=短跑+周期训练+年度计划' },
      { label: 'Google Scholar: Sprint Periodization', url: 'https://scholar.google.com/scholar?q=sprint+training+periodization+model' },
    ],
  },
  {
    id: 'flywheel-training',
    title: '腘绳肌离心训练与损伤预防：北欧弯举的科学证据',
    category: '训练科学',
    summary: '腘绳肌拉伤是短跑最常见伤病，发生率高达12-16%/赛季。系统综述和荟萃分析表明，定期进行北欧弯举训练可将腘绳肌拉伤风险降低51-65%。北欧弯举训练腘绳肌在拉长状态下的离心力量——这正是短跑摆动期末端腘绳肌受伤的机制。研究建议每周进行2-3次，每次3-4组，从辅助版本逐步进阶。',
    keyFindings: [
      '北欧弯举训练可使腘绳肌离心力量提高15-25%（8周训练后）',
      '赛季中持续进行北欧弯举比仅在准备期进行效果更好',
      '北欧弯举的离心阶段速度越慢，预防效果越好（3-5秒下放）',
      '结合臀肌激活训练可进一步提高预防效果（协同作用）',
    ],
    practicalApplication: '短跑运动员应在全年训练中保持北欧弯举——准备期每周3次（4组×4-6次），比赛期每周1-2次（3组×3-4次维持）。初学者从弹力带辅助版开始。训练前务必激活臀肌（臀桥15-20次）。',
    references: ['Petersen, J. et al. (2011). Preventive effect of eccentric training on acute hamstring injuries', 'van der Horst, N. et al. (2015). The preventive effect of the Nordic hamstring exercise'],
    searchLinks: [
      { label: '知网：腘绳肌损伤+离心训练', url: 'https://kns.cnki.net/kns8s/search?keyword=腘绳肌+离心训练+损伤预防' },
      { label: 'PubMed: Nordic Hamstring Injury Prevention', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=nordic+hamstring+injury+prevention+sprint' },
    ],
  },

  // ========== 运动生理 ==========
  {
    id: 'energy-system-sprint',
    title: '短跑的能量代谢：ATP-PC系统与糖酵解',
    category: '运动生理',
    summary: '100m短跑约90-95%的能量来自ATP-PC系统（磷酸原系统），5-10%来自无氧糖酵解。ATP-PC系统提供极短时间（6-10秒）内的最大功率输出。200m和400m项目中糖酵解的占比逐步增加——400m项目约60%来自糖酵解。训练应针对不同项目的能量系统特征来设计。',
    keyFindings: [
      '100m全程ATP消耗约3.5-4.0 mmol/kg肌肉',
      '磷酸肌酸在6秒内消耗约60-70%，30秒内基本耗尽',
      '肌酸补剂可使肌肉磷酸肌酸储备增加20-30%，提升反复冲刺能力',
      '400m运动员的最大血乳酸可达20-25 mmol/L（静息值的10倍+）',
    ],
    practicalApplication: '60m/100m运动员重点发展ATP-PC系统（最大冲刺6-8秒，组间充分休息3-5分钟）。200m/400m运动员需额外发展糖酵解耐受能力（重复冲刺30-60秒，组间不完全恢复）。肌酸补剂对短跑（特别是反复冲刺项目）有明确效果。',
    references: ['Hirvonen, J. et al. (1987). Breakdown of high-energy phosphate compounds in human skeletal muscle', 'Gastin, P.B. (2001). Energy system interaction and relative contribution during maximal exercise'],
    searchLinks: [
      { label: '知网：短跑能量代谢+ATP', url: 'https://kns.cnki.net/kns8s/search?keyword=短跑+能量代谢+磷酸原' },
      { label: 'Google Scholar: Energy Systems Sprint', url: 'https://scholar.google.com/scholar?q=energy+system+contribution+100m+sprint' },
    ],
  },
  {
    id: 'post-activation',
    title: '激活后增强效应（PAP）在短跑热身中的应用',
    category: '运动生理',
    summary: '激活后增强效应（PAP）是指进行大负荷力量训练后，随后的爆发力表现会出现短暂但显著的增强。研究显示，深蹲3-5次@85-90%1RM后休息8-12分钟，100m成绩可提高0.1-0.2秒。PAP的机制与肌球蛋白调节轻链磷酸化和神经兴奋性提高有关。关键技巧：负荷要够重但不至力竭，休息时间要够长（不是越短越好）。',
    keyFindings: [
      'PAP效果在力量训练后4-12分钟达到峰值（因人而异）',
      '力量水平越高的运动员PAP效果越明显',
      'PAP可使起跑阶段的发力速率提高5-10%',
      '冲刺距离越长，PAP效果越弱（100m>200m>400m）',
    ],
    practicalApplication: '赛前热身中加入PAP：完成常规动态热身后→杠铃半蹲3次×85%1RM→休息8-10分钟→上起跑器。先通过训练课测试自己的最佳负荷和休息时间。不是所有运动员都适合PAP，力量基础差的运动员效果有限。',
    references: ['Tillin, N.A. & Bishop, D. (2009). Factors modulating post-activation potentiation', 'Seitz, L.B. & Haff, G.G. (2016). Factors modulating post-activation potentiation of jump, sprint'],
    searchLinks: [
      { label: '知网：激活后增强+短跑', url: 'https://kns.cnki.net/kns8s/search?keyword=激活后增强+PAP+短跑' },
      { label: 'PubMed: Post Activation Potentiation Sprint', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=post+activation+potentiation+sprint+performance' },
    ],
  },

  // ========== 伤病预防 ==========
  {
    id: 'acl-prevention-sprint',
    title: '短跑运动员ACL损伤的神经肌肉控制预防',
    category: '伤病预防',
    summary: '虽然短跑是直线运动，但训练中的变向、跳跃着地和力量训练中的不当姿势都可能导致ACL（前交叉韧带）损伤。女性短跑运动员的ACL损伤风险是男性的2-4倍（生物力学和激素因素）。神经肌肉控制训练——特别是着地技术和臀中肌激活——可将ACL损伤风险降低50-70%。',
    keyFindings: [
      '着地时膝关节外翻（膝内扣）是ACL损伤的强预测因子',
      '臀中肌无力与膝关节外翻高度相关',
      '训练前进行15分钟神经肌肉激活可使着地技术显著改善',
      '短期（6周）神经肌肉训练即可产生显著的保护效果',
    ],
    practicalApplication: '每堂训练课前进行弹力带侧向行走+蚌式开合+单腿臀桥激活臀中肌。着地技术训练：跳箱着地时检查膝盖是否对齐第二三脚趾。下肢力量训练中始终保持膝盖对齐脚尖。',
    references: ['Hewett, T.E. et al. (2005). Biomechanical measures of neuromuscular control and valgus loading of the knee', 'Mandelbaum, B.R. et al. (2005). Effectiveness of a neuromuscular and proprioceptive training program'],
    searchLinks: [
      { label: '知网：ACL损伤+神经肌肉训练+短跑', url: 'https://kns.cnki.net/kns8s/search?keyword=ACL损伤+神经肌肉+运动预防' },
      { label: 'PubMed: ACL Prevention Sprint Athletes', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=ACL+injury+prevention+sprint+athletes' },
    ],
  },

  // ========== 营养恢复 ==========
  {
    id: 'creatine-sprint',
    title: '肌酸补剂对短跑表现的循证分析',
    category: '营养恢复',
    summary: '肌酸（一水肌酸）是短跑领域研究最充分、证据最坚实的补剂。荟萃分析表明，肌酸补剂可将单次冲刺表现提高5-8%，反复冲刺能力提高10-15%。肌酸通过增加肌肉磷酸肌酸储备、加速ATP再合成和提高训练适应来发挥作用。标准用法：每天3-5g维持剂量（无需加载期），长期服用安全。',
    keyFindings: [
      '5天加载期（20g/天）后肌肉肌酸含量增加约20%，但每天3-5g×28天可达同样效果',
      '肌酸对60-200m项目的效果优于400m以上项目',
      '与碳水同服可增加肌酸吸收率约60%',
      '长期服用（>5年）无已知副作用——肌酸是研究最充分的补剂之一',
    ],
    practicalApplication: '每天3-5g一水肌酸，任意时间服用（建议每天固定时间）。训练日随训练后餐服用效果最佳（胰岛素促进吸收）。无需循环使用（一直服用即可）。选择纯一水肌酸（最便宜也最有效的形式）。',
    references: ['Kreider, R.B. et al. (2017). ISSN exercise & sports nutrition review update', 'Branch, J.D. (2003). Effect of creatine supplementation on body composition and performance'],
    searchLinks: [
      { label: '知网：肌酸+短跑+运动表现', url: 'https://kns.cnki.net/kns8s/search?keyword=肌酸+短跑+运动表现' },
      { label: 'PubMed: Creatine Sprint Performance', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=creatine+supplementation+sprint+performance' },
    ],
  },
  {
    id: 'sleep-recovery-sprint',
    title: '睡眠与短跑恢复：为什么8小时不是最优解',
    category: '营养恢复',
    summary: '研究表明，9-10小时的睡眠对高强度训练的短跑运动员来说显著优于8小时。充足的睡眠可提高反应速度、降低感知疲劳和提高训练适应。一项对NCAA短跑运动员的研究发现，每天睡眠从8小时增加到9-10小时后，100m成绩提高了约0.15秒。睡眠剥夺（<6小时）则导致反应速度下降10-20%。',
    keyFindings: [
      '运动员应目标9小时+的睡眠/天（包括午睡）',
      '深度睡眠（慢波睡眠）阶段是生长激素分泌高峰——对肌肉修复至关重要',
      '睡前1小时避免蓝光（手机/电脑）可增加深度睡眠时间约30分钟',
      '运动后即刻补充蛋白+碳水的"睡前加餐"可能改善睡眠中肌肉合成',
    ],
    practicalApplication: '目标：晚上9-10小时睡眠 + 白天20-30分钟午睡。固定入睡和起床时间。睡前30分钟进行腹式呼吸（5-10分钟）帮助从交感神经（训练状态）切换到副交感神经（恢复状态）。',
    references: ['Mah, C.D. et al. (2011). The effects of sleep extension on the athletic performance', 'Fullagar, H.H.K. et al. (2015). Sleep and athletic performance'],
    searchLinks: [
      { label: '知网：睡眠+运动恢复+运动员', url: 'https://kns.cnki.net/kns8s/search?keyword=睡眠+运动恢复+运动员' },
      { label: 'PubMed: Sleep Sprint Performance', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=sleep+extension+sprint+performance+athletes' },
    ],
  },

  // ========== 青训发展 ==========
  {
    id: 'youth-sprint-development',
    title: '青少年短跑运动员的长期发展模型',
    category: '青训发展',
    summary: '青少年短跑运动员的发展不应追求"越早越好"。研究支持LTAD（长期运动员发展）模型：8-12岁应侧重基本运动技能（跑跳投）、多样化和趣味性；13-16岁逐步增加专项化但保持多项目参与；17岁+逐步进入高强度专项训练。过早专项化（<13岁）与更高的伤病风险和运动倦怠率相关。',
    keyFindings: [
      'PHV（身高增长高峰）后6-12个月是发展有氧和力量的最佳窗口期',
      '青少年阶段的训练量增长应<10%/年（10%规则可降低伤病风险50%）',
      '保持多项目参与（田径+球类等）至16岁的运动员成年后成绩更好',
      '青春期前（<11岁）不应进行最大力量测试（1RM）',
    ],
    practicalApplication: '8-12岁：游戏化训练、基本跑跳技术、无负重力量训练。13-15岁：引入系统技术训练（A-skip、起跑等）、自重力量训练、保持球类等其他运动。16-18岁：逐步增加专项训练量、引入轻负重力量训练、开始参加全国性比赛。',
    references: ['Balyi, I. & Hamilton, A. (2004). Long-Term Athlete Development', 'Lloyd, R.S. & Oliver, J.L. (2012). The Youth Physical Development Model'],
    searchLinks: [
      { label: '知网：青少年短跑+长期发展+选材', url: 'https://kns.cnki.net/kns8s/search?keyword=青少年+短跑+长期发展' },
      { label: 'Google Scholar: Youth Sprint Development LTAD', url: 'https://scholar.google.com/scholar?q=youth+sprint+long+term+athlete+development' },
    ],
  },
]

export const CATEGORY_TABS = [
  { key: '全部' as const, label: '全部', icon: '📚' },
  { key: '生物力学' as const, label: '生物力学', icon: '🔬' },
  { key: '训练科学' as const, label: '训练科学', icon: '📐' },
  { key: '运动生理' as const, label: '运动生理', icon: '🧬' },
  { key: '伤病预防' as const, label: '伤病预防', icon: '🏥' },
  { key: '营养恢复' as const, label: '营养恢复', icon: '🍽️' },
  { key: '青训发展' as const, label: '青训发展', icon: '🌱' },
]
