// 短跑运动科学知识库

export interface ScienceTopic {
  id: string
  title: string
  category: '生物力学' | '训练科学' | '运动生理' | '伤病预防' | '营养恢复' | '青训发展' | '运动心理' | '科技应用'
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
      { label: 'Google Scholar: Youth Sprint Development', url: 'https://scholar.google.com/scholar?q=youth+sprint+long+term+athlete+development' },
    ],
  },

  // ========== 加速训练专题 ==========
  {
    id: 'acceleration-mechanics',
    title: '短跑加速阶段的技术优化：前10米的科学',
    category: '训练科学',
    summary: '加速阶段（0-30m）是100m和200m比赛中速度变化最大的阶段。研究显示，精英短跑运动员在加速阶段的身体前倾角从起跑的约45度逐渐过渡到约10-15度（30m处）。加速阶段的关键在于最大化水平推进力与最小化制动力——每一脚的着地应发生在身体质心后方或正下方，而非前方。研究发现加速阶段的地面接触时间是最大速度阶段的约1.5-2倍，但力量输出却更大。',
    keyFindings: ['前10步的身体前倾角应维持在35-45度', '着地点在质心后方可产生纯推进力（无制动）', '加速阶段触地时间约0.16-0.20s（最大速度阶段约0.09-0.12s）', '每一步的步长递增幅度约为5-10cm/步'],
    practicalApplication: '加速训练：10-30m起跑练习（重点感受身体前倾+着地在身后）。使用雪橇推和上坡跑发展专项加速力量。避免过早抬起躯干（"站立跑"是加速阶段最常见的技术错误）。录像分析自己的前10步——身体前倾角是否保持？着地点是否正确？',
    references: ['Nagahara, R. et al. (2018). Kinematics of transition during human accelerated sprinting', 'Debaere, S. et al. (2013). From block clearance to sprint running'],
    searchLinks: [
      { label: '知网：短跑加速阶段+技术分析', url: 'https://kns.cnki.net/kns8s/search?keyword=短跑+加速阶段+技术' },
      { label: 'Google Scholar: Sprint Acceleration Phase', url: 'https://scholar.google.com/scholar?q=sprint+acceleration+phase+mechanics' },
    ],
  },
  {
    id: 'max-velocity-training',
    title: '最大速度训练：如何在短跑中达到并维持最高速度',
    category: '训练科学',
    summary: '最大速度（约40-70m区间）是短跑中速度最快的阶段，也是区分精英与次精英的关键阶段。精英运动员的最大速度可达12m/s以上（博尔特2009柏林100m最大速度约12.3m/s）。训练最大速度的核心：①在无疲劳状态下进行全力冲刺（组间充分休息5-8分钟）；②训练距离控制在40-60m（刚好达到最大速度后停止，避免速度下降）；③每周至少1-2次最大速度训练以维持神经适应。',
    keyFindings: ['最大速度训练的总量应控制在300-400m/次', '组间休息比至少1:25（跑4秒=休息至少100秒）', '飞人跑（Fly Run，30m加速+30m最大速度计时）是最佳训练手段', '最大速度的衰退（>60m）主要由于中枢疲劳而非肌肉疲劳'],
    practicalApplication: '经典最大速度训练：充分热身后→30m加速区（不计时）+30m最大速度区（计时）→步行回起点（完整休息）→重复4-6次。记录每次30m最大速度区时间，如果第5-6次明显下降说明体能不足或休息不够。此训练只适合在比赛期和专项准备期进行（训练频率每周1-2次）。',
    references: ['Clark, K.P. et al. (2020). The national football league combine 40-yd dash', 'Mero, A. et al. (1992). Biomechanics of sprint running'],
    searchLinks: [
      { label: '知网：最大速度训练+飞人跑', url: 'https://kns.cnki.net/kns8s/search?keyword=最大速度+短跑+飞人跑' },
      { label: 'Google Scholar: Max Velocity Sprint Training', url: 'https://scholar.google.com/scholar?q=max+velocity+sprint+training+fly+run' },
    ],
  },
  {
    id: 'resisted-sprint',
    title: '抗阻冲刺训练：雪橇推/拉的科学负荷',
    category: '训练科学',
    summary: '抗阻冲刺（雪橇推/拉、上坡跑、弹力带等）是发展加速阶段专项力量的主要手段。关键问题是：多大阻力最适合？研究共识：10-20%体重的阻力最适合发展加速阶段力量，超过30%体重会显著改变跑步技术（身体过度前倾、步频降低），训练效果反而转移不到实际短跑中。轻阻力（<10%体重）可用于最大速度阶段（虽然此阶段使用较少）。',
    keyFindings: ['雪橇推最佳阻力：10-20%体重（发展加速）', '阻力>30%体重会显著改变短跑生物力学', '轻阻力（5-10%体重）可用于最大速度阶段', '雪橇推和上坡跑的效果相似（选择取决于器材条件）'],
    practicalApplication: '赛季准备期：雪橇推4-6×20-30m，阻力15-20%体重，组间休息3分钟。如果无雪橇，可用上坡跑替代（坡度3-5度）。注意：抗阻冲刺后进行2-3次无阻力的正常冲刺，帮助神经系统"转移"训练效果。',
    references: ['Alcaraz, P.E. et al. (2008). Effects of three types of resisted sprint training', 'Petrakos, G. et al. (2016). Resisted sled towing for sprint performance'],
    searchLinks: [
      { label: '知网：抗阻冲刺+雪橇训练', url: 'https://kns.cnki.net/kns8s/search?keyword=抗阻冲刺+雪橇训练+短跑' },
      { label: 'Google Scholar: Resisted Sprint Training Sled', url: 'https://scholar.google.com/scholar?q=resisted+sprint+training+sled+load+optimal' },
    ],
  },

  // ========== 恢复专题 ==========
  {
    id: 'cold-water-immersion',
    title: '冷水浸泡（CWI）对短跑恢复的效果与争议',
    category: '营养恢复',
    summary: '冷水浸泡（8-15°C，10-15分钟）是运动员最常用的恢复手段之一，但其对短跑训练适应的长期影响存在争议。支持方：CWI可减轻训练后24-48小时的延迟性肌肉酸痛（DOMS），降低肌酸激酶（CK）水平，主观恢复感更好。反对方：长期在力量训练后使用CWI可能减弱肌肉肥大和力量增长信号——这可能不利于准备期希望增加力量的运动员。实用建议：比赛期和减量期使用CWI促进恢复，力量训练增肌期避免训练后立即CWI。',
    keyFindings: ['CWI可减少DOMS约20-30%（荟萃分析）', '力量训练后立即CWI可能减弱肌肥大信号（长期效果约减少15-20%）', '水温10-15°C、浸泡10-15分钟是最佳参数', 'CWI对短跑表现的急性恢复效果明确（训练后24h内）'],
    practicalApplication: '比赛期：高强度训练或比赛后使用CWI（10-15°C/10分钟）促进恢复。准备期力量训练后：至少等待4小时再进行CWI，或改用对比水浴（冷热交替）。个人化：有些运动员对CWI反应好，有些反应一般——建议自己测试并记录恢复感受。',
    references: ['Poppendieck, W. et al. (2013). Cooling and recovery from exercise', 'Roberts, L.A. et al. (2015). Post-exercise cold water immersion attenuates acute anabolic signalling'],
    searchLinks: [
      { label: '知网：冷水浸泡+运动恢复', url: 'https://kns.cnki.net/kns8s/search?keyword=冷水浸泡+运动恢复+短跑' },
      { label: 'Google Scholar: Cold Water Immersion Sprint Recovery', url: 'https://scholar.google.com/scholar?q=cold+water+immersion+sprint+recovery+performance' },
    ],
  },
  {
    id: 'compression-garment',
    title: '压缩服装对短跑恢复和表现的影响',
    category: '营养恢复',
    summary: '压缩服装（压缩裤/袜等）通过外部压力促进静脉回流，理论上可加速代谢产物清除、减少肌肉振荡和微损伤。研究结论：压缩服装对运动表现（力量、速度）的即时提升效果不大（<2%），但训练后穿着压缩服装24-48小时可显著改善恢复指标（降低CK水平、减少主观酸痛感）。压缩服装的恢复效果可能通过改善睡眠质量间接实现。',
    keyFindings: ['运动后穿压缩裤24h可降低CK水平15-25%', '压缩服装对运动表现的即时效果有限（效应量小）', '压缩压力在15-25mmHg最为适宜', '对睡眠时静脉回流的改善是恢复效果的可能机制'],
    practicalApplication: '赛间恢复：比赛或高强度训练后立即换上压缩裤，持续穿着24小时。旅行恢复：长途飞行时穿压缩袜减少腿部肿胀和疲劳。不要期望压缩服装直接提高你的100m成绩——它的价值在于加速恢复，让你更快准备好下一次训练。',
    references: ['Hill, J. et al. (2014). Compression garments and recovery from exercise', 'Born, D.P. et al. (2013). Bringing light into the dark: effects of compression clothing'],
    searchLinks: [
      { label: '知网：压缩服装+运动恢复', url: 'https://kns.cnki.net/kns8s/search?keyword=压缩服装+运动恢复+肌肉' },
      { label: 'Google Scholar: Compression Garment Recovery Athletes', url: 'https://scholar.google.com/scholar?q=compression+garment+recovery+athletes+sprint' },
    ],
  },
  {
    id: 'active-recovery',
    title: '主动恢复 vs 被动恢复：短跑训练间的恢复策略',
    category: '营养恢复',
    summary: '训练间和训练后的恢复方式直接影响下一次训练质量。荟萃分析表明：训练后立即进行低强度有氧活动（30-40%VO2max，15-20分钟）比完全静止恢复能更快地清除血乳酸（约快40-50%）。但对短跑运动员来说，训练日之间的主动恢复（如轻量骑行、游泳、动态拉伸）比训练后即刻的慢跑更重要——因为它既促进血液循环又不增加下肢关节冲击。',
    keyFindings: ['低强度主动恢复（30-40%最大心率）比完全静止恢复快40-50%清除乳酸', '完全休息日（被动恢复）在赛季中同样重要——每周至少1天', '泡沫轴+轻量骑行是短跑运动员的最佳主动恢复组合', '水上慢跑（泳池）是零冲击的主动恢复方式——特别适合跟腱/膝盖不适时'],
    practicalApplication: '高强度训练后：20分钟骑行或泡沫轴放松（非慢跑——慢跑对短跑选手的下肢冲击太大）。比赛日次日：游泳或水中慢跑20-30分钟。每周安排1天完全休息（无任何训练）。不要把"主动恢复"变成"隐形训练"——强度必须低到能边做边轻松对话的程度。',
    references: ['Dupont, G. et al. (2004). Passive versus active recovery during high-intensity intermittent exercises', 'Menzies, P. et al. (2010). Blood lactate clearance during active recovery'],
    searchLinks: [
      { label: '知网：主动恢复+运动性疲劳', url: 'https://kns.cnki.net/kns8s/search?keyword=主动恢复+运动性疲劳+短跑' },
      { label: 'Google Scholar: Active Recovery Sprint Performance', url: 'https://scholar.google.com/scholar?q=active+recovery+sprint+performance+blood+lactate' },
    ],
  },

  // ========== 饮食营养专题 ==========
  {
    id: 'protein-timing-sprint',
    title: '蛋白质摄入时机：短跑运动员的"合成窗口"',
    category: '营养恢复',
    summary: '蛋白质摄入时机对短跑运动员的肌肉修复和训练适应有显著影响。研究一致表明：训练后30-60分钟内摄入20-30g优质蛋白质（约0.3g/kg体重）可最大化肌肉蛋白质合成（MPS）反应。睡前摄入40g酪蛋白（慢消化蛋白）可提供夜间持续的氨基酸供应，使MPS在睡眠期间提高约22%。全天均匀分配蛋白质摄入（每3-4小时约20-30g）比集中在一两餐摄入效果更好。',
    keyFindings: ['训练后30-60分钟是蛋白质合成的"黄金窗口"', '每餐20-30g蛋白质即可最大化MPS（超过此量无额外增益）', '睡前40g酪蛋白可提升夜间MPS约22%', '全天均匀分配蛋白质比集中摄入效果好（合成效率更高）'],
    practicalApplication: '训练后：乳清蛋白25g+香蕉（快速吸收+碳水补充糖原）。睡前：牛奶/希腊酸奶200-250g（酪蛋白缓慢释放氨基酸）。全天摄入：4-5餐每餐含20-30g蛋白质（举例：早鸡蛋3个+午鸡胸肉150g+加餐蛋白粉+晚三文鱼150g+睡前酸奶）。',
    references: ['Areta, J.L. et al. (2013). Timing and distribution of protein ingestion', 'Res, P.T. et al. (2012). Protein ingestion before sleep improves postexercise overnight recovery'],
    searchLinks: [
      { label: '知网：蛋白质摄入时机+运动恢复', url: 'https://kns.cnki.net/kns8s/search?keyword=蛋白质摄入时机+运动恢复+运动员' },
      { label: 'Google Scholar: Protein Timing Sprint Athletes', url: 'https://scholar.google.com/scholar?q=protein+timing+muscle+protein+synthesis+athletes' },
    ],
  },
  {
    id: 'nitrate-sprint',
    title: '硝酸盐（甜菜根汁）对短跑表现的影响',
    category: '营养恢复',
    summary: '膳食硝酸盐（主要来源：甜菜根、菠菜、芝麻菜）可在体内转化为一氧化氮（NO），NO通过扩张血管改善血液流动和线粒体效率。对短跑运动员来说，硝酸盐补剂的主要作用可能不在最大速度本身，而在反复冲刺能力的维持——研究显示补充硝酸盐后，第5-8次冲刺的速度衰减显著减小。硝酸盐的效果在低氧条件下（如高原训练）更为显著。',
    keyFindings: ['补充甜菜根汁（~400mg硝酸盐）可提高反复冲刺能力5-8%', '硝酸盐对单次最大速度的急性提升效果有限（<2%）', '低氧条件下硝酸盐的效果更显著（高原训练可用）', '训练前2-3小时补充效果最佳'],
    practicalApplication: '反复冲刺训练日或400m比赛前：训练/比赛前2-3小时饮用甜菜根汁（~70ml浓缩汁或500ml甜菜根饮料）。不要用漱口水（抗菌漱口水杀死口腔中转化硝酸盐的细菌，效果减半）。连续补充3-6天比单次补充效果更好（加载效应）。',
    references: ['Jones, A.M. (2014). Dietary nitrate supplementation and exercise performance', 'Thompson, C. et al. (2015). Dietary nitrate improves sprint performance'],
    searchLinks: [
      { label: '知网：硝酸盐+甜菜根+运动表现', url: 'https://kns.cnki.net/kns8s/search?keyword=甜菜根+硝酸盐+运动表现' },
      { label: 'Google Scholar: Nitrate Beetroot Sprint Performance', url: 'https://scholar.google.com/scholar?q=dietary+nitrate+beetroot+sprint+performance' },
    ],
  },

  // ========== 伤病康复专题 ==========
  {
    id: 'hamstring-rehab',
    title: '急性腘绳肌拉伤后重返短跑的循证康复方案',
    category: '伤病预防',
    summary: '腘绳肌拉伤是短跑最常见的损伤（占所有损伤的12-16%）。重返赛场（RTP）的决策不应仅凭时间，而应基于功能标准。研究推荐的分阶段康复方案：第1阶段（0-7天）控制炎症和疼痛；第2阶段（1-3周）逐步引入离心训练和低强度跑步；第3阶段（3-6周）专项跑步训练（A-skip、渐进加速冲刺）和北欧弯举；第4阶段（6-8周起）全速冲刺和重返比赛。过早RTP（<3周）的复发率高达30-50%。',
    keyFindings: ['功能标准（而非时间）决定重返赛场时机', 'RTP标准：等速肌力测试>90%健侧、无痛全速冲刺、北欧弯举可完成>70%角度', '过早RTP（<3周）复发率30-50%', '康复中包含北欧弯举可将再伤率降低约50%'],
    practicalApplication: '受伤后不要自己判断重返时间！找运动康复师进行等速肌力测试。RTP前必须通过的功能测试：①双腿腘绳肌等速肌力差异<10%；②全速30m冲刺无疼痛；③北欧弯举可独立控制下降到至少45度。即使所有测试都通过了，重返后的前2周训练量应减半，逐步递增。',
    references: ['Hickey, J.T. et al. (2017). Criteria for progressing rehabilitation and determining RTP', 'Mendiguchia, J. et al. (2017). A return to sport algorithm for hamstring injuries'],
    searchLinks: [
      { label: '知网：腘绳肌拉伤+康复方案+重返赛场', url: 'https://kns.cnki.net/kns8s/search?keyword=腘绳肌+拉伤+康复+重返赛场' },
      { label: 'Google Scholar: Hamstring Injury Return to Sprint', url: 'https://scholar.google.com/scholar?q=hamstring+injury+return+to+sprint+rehabilitation' },
    ],
  },
  {
    id: 'achilles-rehab',
    title: '跟腱病变在短跑运动员中的管理与康复',
    category: '伤病预防',
    summary: '跟腱病变（跟腱炎/跟腱病）是短跑运动员第二常见的下肢过度使用伤病。本质是跟腱的退行性改变而非传统炎症，因此"休息等它自己好"不是有效策略。循证康复的核心是：渐进式负重离心训练——特别是Hakan Alfredson的经典方案（直膝+屈膝提踵，3×15次，每天两次，持续12周）。离心训练通过刺激胶原蛋白重塑来修复退化的跟腱组织。',
    keyFindings: ['离心训练（Alfredson方案）治愈率约60-90%（系统综述）', '离心训练中的疼痛是被允许的（VAS<5/10即可继续）', '完全休息不训练反而延缓跟腱修复（适量负荷是"信号"）', '体外冲击波（ESWT）可作为离心训练的辅助手段'],
    practicalApplication: 'Alfredson方案：①直膝提踵3×15次+②屈膝提踵3×15次——两种各做两组，每天两次（早晚各一次），持续12周。训练中允许轻微疼痛（0-5/10分），如果超过5分则减量。不要在急性期（剧烈疼痛期）做离心训练——先等疼痛缓解到可接受水平再开始。',
    references: ['Alfredson, H. et al. (1998). Heavy-load eccentric calf muscle training for chronic Achilles tendinosis', 'Malliaras, P. et al. (2013). Achilles and patellar tendinopathy loading programmes'],
    searchLinks: [
      { label: '知网：跟腱病+离心训练+康复', url: 'https://kns.cnki.net/kns8s/search?keyword=跟腱病+离心训练+康复' },
      { label: 'Google Scholar: Achilles Tendinopathy Eccentric Sprinters', url: 'https://scholar.google.com/scholar?q=achilles+tendinopathy+eccentric+training+sprint' },
    ],
  },
  {
    id: 'shin-splints',
    title: '胫骨内侧应力综合征（Shin Splints）的预防与管理',
    category: '伤病预防',
    summary: '胫骨内侧应力综合征（MTSS/"Shin Splints"）是短跑新手和训练量突然增加的运动员最常见的小腿疼痛原因。MTSS本质是胫骨骨膜在反复地面冲击下的微损伤累积。风险因素：训练量增长过快（>30%/周）、硬地面训练、足过度内翻、旧跑鞋（缓冲已丧失）。预防的核心：训练量管理（10%规则）+胫骨前肌力量训练+合适的训练地面+及时更换跑鞋。',
    keyFindings: ['每周训练量增长超过30%是MTSS的最强预测因素', '胫骨前肌力量弱是MTSS的可干预风险因素', '跑步鞋每500-800公里应更换（缓冲性能下降约40%）', '草地/塑胶跑道上的MTSS发生率显著低于水泥/沥青'],
    practicalApplication: '黄金10%规则：每周训练量增长率不超过10%。胫骨前肌力量训练：每天3×15-25次胫骨前肌提拉（背屈训练）。如果出现胫骨内侧压痛：减少跑量50%，冰敷15分钟×3次/天，检查跑鞋是否需要更换。疼痛超过2周不减——必须看运动医学科，排除胫骨应力骨折（需要骨扫描或MRI诊断）。',
    references: ['Moen, M.H. et al. (2009). Medial tibial stress syndrome: a critical review', 'Newman, P. et al. (2013). Risk factors for MTSS in athletes'],
    searchLinks: [
      { label: '知网：胫骨应力综合征+短跑', url: 'https://kns.cnki.net/kns8s/search?keyword=胫骨应力综合征+跑步+预防' },
      { label: 'Google Scholar: Shin Splints Sprint Athletes', url: 'https://scholar.google.com/scholar?q=medial+tibial+stress+syndrome+sprinters' },
    ],
  },
  {
    id: 'low-back-pain-sprint',
    title: '短跑运动员的下背痛：原因、预防与康复',
    category: '伤病预防',
    summary: '下背痛在短跑运动员中的发生率约20-30%，主要与以下因素相关：①腰椎过度前凸（骨盆前倾）——常见于髋屈肌紧张+臀肌无力的运动员；②核心抗旋转力量不足——短跑每一步的交替运动使腰椎承受反复旋转力矩；③错误的深蹲/硬拉技术——特别是负重时腰椎未能保持中立位。McKenzie伸展和核心稳定性训练是治疗短跑相关下背痛的一线方案。',
    keyFindings: ['骨盆前倾与短跑运动员下背痛高度相关（r=0.65）', '核心抗旋转力量不足是下背痛的独立风险因素', '正确姿势的硬拉/深蹲本身对腰椎有益（错误姿势则相反）', '8周核心稳定性训练可将下背痛发生率降低约40%'],
    practicalApplication: '每日做：①髋屈肌拉伸（弓步位保持30秒/侧×2组）②死虫式（3×10次/侧）③弹力带抗旋转推举（3×10次/侧）。力量训练中严格保持腰椎中立位——宁可减轻重量也不要在弓背姿势下完成硬拉/深蹲。如果下背痛伴随腿部放射性疼痛或麻木——必须立即就诊（排除椎间盘突出）。',
    references: ['Hides, J.A. et al. (2001). Long-term effects of specific stabilizing exercises for first-episode low back pain', 'McGill, S.M. (2010). Core training: evidence translating to better performance'],
    searchLinks: [
      { label: '知网：短跑+下背痛+核心稳定性', url: 'https://kns.cnki.net/kns8s/search?keyword=短跑+下背痛+核心训练' },
      { label: 'Google Scholar: Low Back Pain Sprint Athletes', url: 'https://scholar.google.com/scholar?q=low+back+pain+sprint+athletes+core+stability' },
    ],
  },

  // ========== 运动心理专题 ==========
  {
    id: 'pre-competition-anxiety',
    title: '赛前焦虑对短跑表现的影响与应对策略',
    category: '生物力学',
    summary: '赛前焦虑对短跑表现的影响呈倒U型曲线（耶克斯-多德森定律）：适度焦虑提升警觉性和反应速度，过度焦虑则通过肌肉紧张和注意力分散降低表现。短跑特别容易受焦虑影响——因为起跑器的"各就位-预备"阶段本身就是一个高压时刻。认知重评（将"我很紧张"重新定义为"我的身体已经准备好了"）和赛前例行流程（固定的热身+心理准备流程）是应对赛前焦虑最有效的心理技能。',
    keyFindings: ['适度焦虑可使起跑反应时提高0.02-0.05s', '过度焦虑使肌肉紧张度增加15-25%（降低步频和放松能力）', '赛前例行流程可将焦虑水平降低约30%（稳定感+控制感）', '呼吸控制（4-7-8法：吸气4秒-屏息7秒-呼气8秒）对急性焦虑最有效'],
    practicalApplication: '建立个人赛前例行流程（从热身到起跑器之间的固定步骤），每次训练和比赛都严格执行。赛前1小时：听熟悉的音乐（不要换新歌）。起跑前30秒：做一次深呼吸（4-7-8）放松肩部和面部。如果手抖——这是肾上腺素在起作用，利用它而非对抗它。在训练中有意识地模拟"高压环境"（计时、与队友竞赛）来适应压力。',
    references: ['Craft, L.L. et al. (2004). The relationship between exercise and clinical anxiety', 'Cotterill, S.T. (2013). Pre-performance routines in sport: current understanding'],
    searchLinks: [
      { label: '知网：赛前焦虑+运动表现+短跑', url: 'https://kns.cnki.net/kns8s/search?keyword=赛前焦虑+短跑+运动表现' },
      { label: 'Google Scholar: Pre Competition Anxiety Sprint', url: 'https://scholar.google.com/scholar?q=pre+competition+anxiety+sprint+performance' },
    ],
  },

  // ========== 科技应用专题 ==========
  {
    id: 'video-analysis-sprint',
    title: '视频分析在短跑技术诊断中的应用',
    category: '生物力学',
    summary: '视频分析是短跑技术训练最实用、性价比最高的工具。即使一部手机拍摄的慢动作视频（120-240fps），配合正确的分析框架，也能发现大量技术问题。关键分析指标：着地点位置（相对于身体质心）、膝关节驱动高度、躯干角度变化、摆臂幅度与方向、步频与步幅的平衡。研究显示，结合视频反馈的训练可将技术改进速度提高2-3倍（vs 仅靠口头指导）。关键不是拍摄本身，而是知道"看什么参数"。',
    keyFindings: ['视频反馈可将技术学习速度提高2-3倍', '侧视+前/后视两个角度足以覆盖90%的技术分析需求', '着地点位置和躯干角度是最容易通过视频发现的技术问题', '120fps+可清晰看到触地和离地时刻（60fps不够）'],
    practicalApplication: '装备：手机+三脚架+120/240fps慢动作模式。拍摄角度：侧视（看躯干角度/步幅/着地点）+前视或后视（看摆臂对称性/膝盖是否内扣）。分析流程：记录-回放-对比（与自己的PB视频或精英运动员视频对比）-提取1-2个关键改进点-针对性训练。每次训练只关注1-2个改进点（不要试图一次性改正所有问题）。',
    references: ['Lees, A. (2002). Technique analysis in sports', 'Wilson, C. et al. (2018). Video-based training to improve perceptual-cognitive skills'],
    searchLinks: [
      { label: '知网：视频分析+短跑技术诊断', url: 'https://kns.cnki.net/kns8s/search?keyword=视频分析+短跑+技术诊断' },
      { label: 'Google Scholar: Video Analysis Sprint Biomechanics', url: 'https://scholar.google.com/scholar?q=video+analysis+sprint+biomechanics+technique' },
    ],
  },
  {
    id: 'force-plate-sprint',
    title: '测力台在短跑训练中的应用：从科研到训练场',
    category: '生物力学',
    summary: '测力台（Force Plate）是短跑生物力学研究的金标准工具。它能测量地面反作用力（GRF）的三个分量、压力中心（COP）轨迹和力量发展速率（RFD）。对教练员而言，最有价值的指标是：发力不对称指数（左右腿差异<10%为正常）和发力速率RFD（神经肌肉爆发力的直接指标）。现在已有便携式测力台（如Hawkin Dynamics），价格不再高不可攀，逐步进入训练场而非仅限于实验室。',
    keyFindings: ['发力不对称>15%与伤病风险增加相关', 'CMJ反向纵跳的RFD与短跑加速阶段成绩高度相关（r=0.78）', '测力台数据可检测出肉眼无法发现的微不对称', '便携式测力台已使"场上测试"成为现实'],
    practicalApplication: '如果有条件使用测力台：每月测试1次CMJ反向纵跳+蹲跳（SJ），追踪RFD和峰值功率的变化趋势。关注左右腿发力不对称——如果不对称>15%，在力量训练中增加弱侧的单侧训练量。如果无条件——立定跳远+立定三级跳可作为爆发力的简易测试（但精度远不如测力台）。',
    references: ['Beckham, G. et al. (2016). The reliability of force plate data', 'McMahon, J.J. et al. (2018). The role of force plates in athlete monitoring'],
    searchLinks: [
      { label: '知网：测力台+短跑+爆发力测试', url: 'https://kns.cnki.net/kns8s/search?keyword=测力台+短跑+爆发力+CMJ' },
      { label: 'Google Scholar: Force Plate Sprint Biomechanics', url: 'https://scholar.google.com/scholar?q=force+plate+sprint+biomechanics+CMJ+RFD' },
    ],
  },
  {
    id: 'gps-tracking-sprint',
    title: 'GPS/IMU可穿戴技术在短跑训练负荷监控中的应用',
    category: '训练科学',
    summary: 'GPS和惯性测量单元（IMU）可穿戴设备正从团队运动（足球/橄榄球）向田径短跑延伸。对短跑运动员而言，最有用的是IMU而非GPS——因为GPS的采样率（10-18Hz）对短跑来说太低（100m可能只采集到3-5个数据点）。高采样率IMU（>100Hz）可以测量：步频、触地时间、摆动时间、垂直刚度、不对称指数等。这使教练员可以客观量化训练负荷和监测疲劳/伤病风险。',
    keyFindings: ['IMU（>100Hz）比GPS（10-18Hz）更适合短跑的步态分析', '触地时间不对称>15%与腘绳肌伤病风险增加相关', '每周训练负荷的急性/慢性比值（ACWR）>1.5与伤病风险增加相关', 'IMU的步频数据与高速摄像的金标准相关性>0.95'],
    practicalApplication: '如果使用可穿戴设备（如Catapult、STATSports等）：每周监测ACWR（最近1周训练负荷÷最近4周平均负荷）。保持ACWR在0.8-1.3之间（<0.8可能训练不足，>1.5伤病风险显著增加）。关注触地时间不对称——如果某一侧突然增加，可能是代偿或微损伤的信号。即使没有昂贵设备，RPE（主观疲劳评分）×训练时间的手动记录也是有效的负荷监控手段。',
    references: ['Gabbett, T.J. (2016). The training-injury prevention paradox', 'Buchheit, M. & Simpson, B.M. (2017). Player-tracking technology'],
    searchLinks: [
      { label: '知网：可穿戴设备+训练负荷+田径', url: 'https://kns.cnki.net/kns8s/search?keyword=可穿戴+训练负荷+田径+短跑' },
      { label: 'Google Scholar: IMU Sprint Running Biomechanics', url: 'https://scholar.google.com/scholar?q=IMU+wearable+sprint+running+biomechanics+training+load' },
    ],
  },

  // ========== 饮食专题补充 ==========
  {
    id: 'carb-loading-sprint',
    title: '短跑运动员需要碳水加载吗？',
    category: '营养恢复',
    summary: '传统碳水加载（赛前3天高碳水+减训）是为马拉松等耐力项目设计的。对短跑（100-400m）运动员而言，碳水加载是否有用？答案：400m运动员可能受益（因为400m约60%依赖糖酵解供能），100-200m运动员不需要传统碳水加载——磷酸原系统不需要大量肌糖原。但赛前24小时维持正常高碳水饮食（非"加载"）可以确保肌糖原处于满格状态，同时让身体感觉"有能量"。',
    keyFindings: ['传统碳水加载（3天）对100-200m表现无显著提升', '400m运动员可从赛前24h高碳水饮食中受益（延缓后程疲劳）', '赛前餐（赛前3-4小时）比碳水加载对短跑更重要', '低碳水饮食（<3g/kg/天）会降低短跑训练质量和感知活力'],
    practicalApplication: '100/200m选手：不需要碳水加载。只需赛前24h正常高碳水饮食（6-8g/kg体重碳水）。赛前餐（3-4小时前）：易消化的碳水+中等蛋白质+低脂肪（如白米饭+鸡胸肉）。赛前1小时：如果紧张吃不下正餐，可用能量棒/香蕉补充。400m选手：赛前2天碳水增加至8-10g/kg，赛前4小时正常赛前餐。',
    references: ['Burke, L.M. et al. (2011). Carbohydrates for training and competition', 'Sherman, W.M. et al. (1981). Effect of exercise-diet manipulation on muscle glycogen'],
    searchLinks: [
      { label: '知网：碳水加载+短跑+比赛营养', url: 'https://kns.cnki.net/kns8s/search?keyword=碳水+短跑+赛前饮食+营养' },
      { label: 'Google Scholar: Carbohydrate Loading Sprint Performance', url: 'https://scholar.google.com/scholar?q=carbohydrate+loading+sprint+performance+nutrition' },
    ],
  },
  {
    id: 'beta-alanine-400m',
    title: 'β-丙氨酸对400m短跑表现的专项效果',
    category: '营养恢复',
    summary: 'β-丙氨酸是肌肽的前体物质，肌肽在肌肉中作为pH缓冲剂——在高强度运动导致肌肉酸化时延缓pH下降，从而延缓疲劳。β-丙氨酸补剂对持续1-4分钟的高强度运动（恰好是400m短跑）效果最为显著。荟萃分析表明，补充β-丙氨酸4-10周可将400m项目成绩提高约1-2%（约0.5-1秒）。对100-200m的效果不明显（因为ATP-PC系统不依赖糖酵解缓冲）。',
    keyFindings: ['β-丙氨酸对400m成绩的提升约1-2%（效果量与训练水平相关）', '补充4周以上才出现显著效果（需要累积肌肽含量）', '标准剂量：3.2-6.4g/天（分2-4次服用以减少皮肤刺痛感）', '皮肤刺痛感（paresthesia）是无害的正常反应，缓释片可减少此副作用'],
    practicalApplication: '400m运动员：准备期开始补充β-丙氨酸（3.2g/天分2次），持续至少4周，比赛期维持。100/200m运动员：不需要专项补充β-丙氨酸（效果证据不足）。如果出现皮肤刺痛——分多次小剂量服用或用缓释配方。不要与肌酸同时服用（竞争肠道吸收——一个上午一个下午）。',
    references: ['Saunders, B. et al. (2017). β-alanine supplementation to improve exercise capacity', 'Hobson, R.M. et al. (2012). Effects of β-alanine supplementation on exercise performance'],
    searchLinks: [
      { label: '知网：β-丙氨酸+400米+短跑', url: 'https://kns.cnki.net/kns8s/search?keyword=β-丙氨酸+400米+运动表现' },
      { label: 'Google Scholar: Beta Alanine 400m Sprint', url: 'https://scholar.google.com/scholar?q=beta+alanine+supplementation+400m+sprint+performance' },
    ],
  },

  // ========== 运动心理 (补充3篇) ==========
  {
    id: 'mental-imagery-sprint',
    title: '心理意象训练对短跑起跑表现的影响',
    category: '运动心理',
    summary: '心理意象（Mental Imagery）是在大脑中反复模拟某个动作或场景但不进行实际身体活动。对短跑运动员而言，赛前和训练中运用心理意象——特别是起跑器上的"各就位-预备-枪响"序列——已被证明可以：①提高起跑反应速度约0.02-0.05秒；②降低赛前焦虑水平；③增强技术动作的肌肉记忆。fMRI研究显示，心理意象激活的脑区与实际运动时的脑区高度重叠（运动皮层、基底节、小脑），这是其有效性的神经科学基础。',
    keyFindings: ['心理意象可提高起跑反应速度0.02-0.05s（效应量中等）', 'PETTLEP模型（物理/环境/任务/时机/学习/情绪/视角）是应用框架', '内部视角意象（第一人称）比外部视角（第三人称）对短跑更有效', '心理意象+实际训练的组合效果优于单独进行其中任何一项'],
    practicalApplication: '赛前1周每天进行10-15分钟心理意象训练：闭眼→想象自己站在起跑器上→听到"各就位"→感受脚踩踏板→"预备"→肌肉绷紧→枪响→爆发起跑。用第一人称视角（通过自己的眼睛看），包括声音（枪声/观众的呼喊）、触觉（跑道）、情绪（紧张但自信）。训练后也进行心理意象（"回放"刚才的好技术）。',
    references: ['Holmes, P.S. & Collins, D.J. (2001). The PETTLEP approach to motor imagery', 'Jeannerod, M. (2001). Neural simulation of action: a unifying mechanism for motor cognition'],
    searchLinks: [
      { label: '知网：心理意象+短跑+起跑', url: 'https://kns.cnki.net/kns8s/search?keyword=心理意象+短跑+起跑+运动心理' },
      { label: 'Google Scholar: Mental Imagery Sprint Start', url: 'https://scholar.google.com/scholar?q=mental+imagery+sprint+start+PETTLEP' },
    ],
  },
  {
    id: 'motivation-climate-sprint',
    title: '动机氛围对短跑运动员长期发展的影响',
    category: '运动心理',
    summary: '运动心理学区分两种动机氛围：任务导向（强调个人进步、努力和技能掌握）与自我导向（强调赢过他人、排名和外部奖励）。研究一致表明，任务导向的动机氛围与更好的长期发展结果相关：运动员更享受训练、坚持时间更长、面对挫折的韧性更强、更少出现运动倦怠。对青少年短跑运动员而言，教练和父母的反馈方式起决定性作用——"你这次起跑比上周好"（任务导向）vs "你这次赢了他真棒"（自我导向）。',
    keyFindings: ['任务导向动机与长期运动坚持率正相关（r=0.45）', '过度强调输赢的自我导向氛围与运动倦怠风险正相关', '教练的语言反馈方式可塑造运动员的动机取向', '高任务+适度自我的"混合动机"运动员成绩最好（不排斥竞争但更关注自我提升）'],
    practicalApplication: '教练反馈优化：①表扬努力和进步（"你这周的抬膝高度明显提高了"）而非只表扬结果；②设置过程目标（"今天起跑反应时<0.15s"）而非只设结果目标（"今天要跑第一名"）；③失败后先肯定努力再分析技术原因。自我对话训练：运动员学会在失误后对自己说"学到了什么"而非"我太差了"。',
    references: ['Duda, J.L. & Balaguer, I. (2007). Coach-created motivational climate', 'Keegan, R.J. et al. (2010). The motivational atmosphere in youth sport'],
    searchLinks: [
      { label: '知网：动机氛围+运动心理+青少年', url: 'https://kns.cnki.net/kns8s/search?keyword=动机氛围+运动心理+青少年运动员' },
      { label: 'Google Scholar: Motivational Climate Sprint Athletes', url: 'https://scholar.google.com/scholar?q=motivational+climate+task+ego+sprint+athletes' },
    ],
  },
  {
    id: 'choking-under-pressure',
    title: '短跑比赛中的"窒息"现象：压力下的技术崩溃',
    category: '运动心理',
    summary: '"窒息"（Choking）指运动员在压力下出现技术水平显著低于正常水平的现象——尤其是在大赛的决赛轮次。短跑特别容易发生窒息：因为比赛时间极短（<10-45秒），没有"纠正错误"的时间窗口，一个技术失误（如起跑反应过慢、第一步跨得过大）就会葬送整场比赛。窒息的理论机制有两种：①"有意识加工假说"（压力下运动员过度关注自动化的技术动作，干扰了正常的自动化执行）；②"注意力分散假说"（压力下无关信息占据了工作记忆容量）。',
    keyFindings: ['压力下运动员的起跑反应时可能延长0.05-0.10s', '"有意识加工"理论解释了技术自动化程度越高越不容易窒息的规律', '赛前例行流程是预防窒息最有效的心理工具', '模拟高压训练（如制造"必须达标否则处罚"的情境）可提高抗压能力'],
    practicalApplication: '预防窒息的三步法：①建立并严格执行赛前例行流程（减少不确定性→减少认知负荷）；②在训练中模拟高压情境（计时测试、公开表演、惩罚性训练）以提高抗压能力；③学习将"紧张感"重新定义为"兴奋感"——生理反应（心跳加快）是一样的，不同的只是大脑对它的解读。如果比赛出现了窒息：赛后分析要聚焦技术原因（"起跑第一步跨太大了"）而非个人特质（"我心理素质太差"）。',
    references: ['Beilock, S.L. & Carr, T.H. (2001). On the fragility of skilled performance', 'Baumeister, R.F. (1984). Choking under pressure: self-consciousness and paradoxical effects'],
    searchLinks: [
      { label: '知网：运动窒息+压力+短跑', url: 'https://kns.cnki.net/kns8s/search?keyword=窒息+压力+短跑+运动心理' },
      { label: 'Google Scholar: Choking Under Pressure Sprint', url: 'https://scholar.google.com/scholar?q=choking+under+pressure+sprint+performance' },
    ],
  },

  // ========== 科技应用 (补充3篇) ==========
  {
    id: 'timing-system-sprint',
    title: '电子计时系统在短跑训练中的演变与应用',
    category: '科技应用',
    summary: '从手持秒表到全自动计时（FAT）再到激光/视频计时系统，短跑计时精度已从0.1秒提升到0.001秒。现代训练中常用的计时工具包括：分段计时系统（如Freelap/Brower）在第10/20/30/40/50/60m处放置发射器记录分段成绩；激光计时（如Optojump/Microgate）用于测试和起跑反应训练；视频计时（如Dartfish/CoachNow）结合技术分析。分段计时数据是优化短跑各阶段表现的核心指标。',
    keyFindings: ['分段计时（10m间隔）是分析短跑速度曲线的最实用方法', '30m分段计时是评估加速能力的最常用指标', '最大速度阶段（40-60m）的计时标准差通常<0.02s（精英水平）', '电子计时比手动计时平均快0.15-0.25s（人工反应延迟）'],
    practicalApplication: '每月进行一次分段计时测试（10/20/30/40/50/60m），记录各段的累计时间和每10m分段速度。关注：①30m时间（加速能力）；②50-60m时间变化（速度保持能力）；③最大速度出现的时间点（越晚越好——说明加速更长）。如果30-40m段突然加速（"跳跃式加速"），说明起跑阶段发力不足。',
    references: ['Haugen, T. & Buchheit, M. (2016). Sprint running performance monitoring', 'Bezodis, I. et al. (2008). The reliability of 30-m sprint time'],
    searchLinks: [
      { label: '知网：电子计时+短跑+分段计时', url: 'https://kns.cnki.net/kns8s/search?keyword=电子计时+短跑+分段计时+训练' },
      { label: 'Google Scholar: Electronic Timing Sprint Training', url: 'https://scholar.google.com/scholar?q=electronic+timing+sprint+split+times+training' },
    ],
  },
  {
    id: 'emg-sprint',
    title: '表面肌电图（sEMG）在短跑技术诊断中的应用',
    category: '科技应用',
    summary: '表面肌电图（sEMG）通过在皮肤表面电极记录肌肉的电活动，可揭示短跑中不同肌群的激活时序、激活强度和协同模式。研究发现：①腘绳肌在短跑摆动期末端（着地前）的激活达到峰值——这是腘绳肌受伤的关键时刻；②臀大肌的激活在支撑期中期达到峰值（伸髋发力）；③精英短跑运动员的腘绳肌-股四头肌共激活比（H:Q co-activation ratio）显著高于次精英——更强的腘绳肌共激活可能是一种保护机制。',
    keyFindings: ['腘绳肌在摆动期末端的激活峰值是支撑期的1.5-2倍（解释了此阶段的受伤高发）', '精英运动员的臀大肌激活比次精英早约15-20ms（更快"准备好"发力）', '腘绳肌-股四头肌共激活比越高，膝关节稳定性越好', 'sEMG+3D动作捕捉是最完整的短跑技术分析方案（但设备昂贵）'],
    practicalApplication: '虽然sEMG设备昂贵，但理解其核心发现可以帮助优化训练：①为什么北欧弯举对腘绳肌保护如此重要——它强化了摆动期末端的离心控制力；②为什么臀肌激活训练（蚌式/臀桥）不可或缺——臀肌的"早启动"需要神经通路的预先兴奋。如果条件允许（运动科学实验室/国家队资源），建议在康复期使用sEMG客观评估腘绳肌恢复情况。',
    references: ['Higashihara, A. et al. (2010). Hamstring muscles function in sprint running', 'Jönhagen, S. et al. (2009). Hamstring muscle activation in elite sprinters'],
    searchLinks: [
      { label: '知网：肌电图+短跑+肌肉激活', url: 'https://kns.cnki.net/kns8s/search?keyword=表面肌电图+短跑+肌肉激活' },
      { label: 'Google Scholar: EMG Sprint Running Activation', url: 'https://scholar.google.com/scholar?q=EMG+sprint+running+muscle+activation+hamstring' },
    ],
  },
  {
    id: 'ai-sprint-analysis',
    title: '人工智能在短跑技术分析中的前沿应用',
    category: '科技应用',
    summary: 'AI和计算机视觉正逐步改变短跑技术分析的方式。基于深度学习的姿态估计算法（如OpenPose、MediaPipe）可从普通手机视频中自动提取关节坐标，计算关节角度、步频、步幅等生物力学参数——无需昂贵的动作捕捉实验室。2023年后，多个研究组已开发出基于AI的短跑技术自动分析系统，可实时反馈技术问题（如"着地点过于靠前""膝关节驱动不足"）。目前的局限：数据标注依赖专家时间，对不同体型/种族的泛化能力有限。',
    keyFindings: ['AI姿态估计的关节坐标误差已降至2-4cm（与金标准动作捕捉相比）', '基于单摄像头视频的AI分析已可检测到>70%的常见技术错误', 'AI分析+专家审核的混合模式是目前最佳实践', 'AI模型对青少年运动员的泛化误差比成人高（数据偏差问题）'],
    practicalApplication: '可以使用免费的AI姿态分析工具（如OpenPose或一些运动App）初步分析自己的短跑技术视频。注意：AI分析结果是参考性的（不是诊断性的），应与教练的实际观感交叉验证。最有价值的AI功能——用手机同时从侧视和前视两个角度拍摄，AI自动计算步频、步幅、膝关节角度等参数——以前需要昂贵设备现在免费能做。',
    references: ['Cronin, N.J. et al. (2020). Markerless 2D kinematic analysis of underwater running', 'Needham, L. et al. (2021). The accuracy of several pose estimation methods'],
    searchLinks: [
      { label: '知网：人工智能+短跑+技术分析', url: 'https://kns.cnki.net/kns8s/search?keyword=人工智能+短跑+技术分析+姿态估计' },
      { label: 'Google Scholar: AI Pose Estimation Sprint Biomechanics', url: 'https://scholar.google.com/scholar?q=pose+estimation+AI+sprint+biomechanics+deep+learning' },
    ],
  },

  // ========== 伤病预防 (补充3篇) ==========
  {
    id: 'groin-injury-sprint',
    title: '腹股沟损伤在短跑中的机制与预防',
    category: '伤病预防',
    summary: '腹股沟（内收肌群）损伤是短跑运动员第三常见的肌肉损伤（仅次于腘绳肌和跟腱）。损伤机制：短跑加速阶段中，髋关节在屈伸的同时还需要维持侧向稳定性——内收肌群在拉长-缩短周期中承受巨大应力。风险因素：①髋内收肌力量薄弱（特别是离心力量）；②内收肌-外展肌力量比<0.8（表示内收肌相对弱）；③赛季前训练量突然增加。与腘绳肌损伤不同，腹股沟损伤的恢复期通常更长（4-8周vs 2-6周），因为内收肌日常使用频率高（行走/坐下都用到）。',
    keyFindings: ['髋内收肌离心力量弱是腹股沟损伤的最强预测因子', '内收肌/外展肌力量比<0.8时损伤风险增加2-3倍', '哥本哈根内收肌训练（Copenhagen Adductor Exercise）可将风险降低40-60%', '腹股沟损伤的平均恢复期4-8周，复发性高于腘绳肌损伤'],
    practicalApplication: '预防方案（每周2-3次）：①哥本哈根内收肌训练（3组×6-8次/侧）→ 训练内收肌离心力量；②弹力带侧向行走（3组×12-15步/方向）→ 激活外展肌+平衡内外肌群比例；③青蛙式拉伸（每侧2组×30s）→ 维持内收肌柔韧性。如果腹股沟区域出现疼痛（特别是在冲刺或突然变向时），立即停止训练并冰敷——早期诊断和治疗可将恢复期缩短2-3周。',
    references: ['Harøy, J. et al. (2019). The Copenhagen Adductor Exercise for groin problems', 'Thorborg, K. et al. (2014). Clinical examination and physical assessment of hip and groin injuries'],
    searchLinks: [
      { label: '知网：腹股沟损伤+短跑+预防', url: 'https://kns.cnki.net/kns8s/search?keyword=腹股沟+损伤+短跑+内收肌' },
      { label: 'Google Scholar: Groin Injury Sprint Athletes Prevention', url: 'https://scholar.google.com/scholar?q=groin+injury+sprint+adductor+prevention+Copenhagen' },
    ],
  },
  {
    id: 'plantar-fasciitis-sprint',
    title: '足底筋膜炎在短跑运动员中的管理与康复',
    category: '伤病预防',
    summary: '足底筋膜炎（Plantar Fasciitis）是短跑运动员足部最常见的过度使用伤病。由于短跑全程用前脚掌着地和发力，足底筋膜承受反复的巨大牵拉力（每一步约承受体重3-6倍的地面反作用力）。慢性足底筋膜炎的病理本质不是"炎症"而是筋膜退行性改变（fasciosis），因此传统抗炎治疗（NSAIDs、冰敷）只对急性期有效。循证康复的核心包括：①足底筋膜和小腿后侧的拉伸；②足底内在肌群的力量训练（毛巾抓趾）；③夜间夹板（防止睡眠中足底筋膜缩短）。',
    keyFindings: ['足底筋膜的弹性模量在跑步中支撑期增加约50%（被动牵拉）', '小腿三头肌的柔韧性差与足底筋膜炎风险高度相关', '每天进行小腿拉伸和足底筋膜拉伸可将康复时间缩短约50%', '足底筋膜炎的完全康复时间通常为6-18个月（慢性）——早期干预至关重要'],
    practicalApplication: '晨起第一步的足底刺痛（晨痛）是足底筋膜炎的典型症状——不要忽视！预防和早期管理：①每天拉伸小腿（直膝+屈膝各2组×30s）；②训练后滚冰矿泉水瓶在足底（冰敷+按摩双重效果）；③毛巾抓趾训练（3组×30s）强化足底内在肌群；④检查并更换旧跑鞋（每500-800km）。如果晨痛持续超过2周，去看运动康复科/足踝科。',
    references: ['Rathleff, M.S. et al. (2015). High-load strength training improves outcome in plantar fasciitis', 'Digiovanni, B.F. et al. (2003). Tissue-specific plantar fascia-stretching exercise'],
    searchLinks: [
      { label: '知网：足底筋膜炎+跑步+康复', url: 'https://kns.cnki.net/kns8s/search?keyword=足底筋膜炎+跑步+短跑+康复' },
      { label: 'Google Scholar: Plantar Fasciitis Sprint Running', url: 'https://scholar.google.com/scholar?q=plantar+fasciitis+sprint+running+rehabilitation' },
    ],
  },
  {
    id: 'stress-fracture-sprint',
    title: '应力性骨折在短跑运动员中的预警信号与管理',
    category: '伤病预防',
    summary: '应力性骨折是骨组织在反复载荷下发生的微裂纹累积——短跑中特别容易发生在胫骨、跖骨和腓骨。与急性骨折不同，应力性骨折的疼痛通常是渐进性的：最初只在训练中出现，"热身后缓解"，随着损伤加重，疼痛会持续到休息时，甚至夜间。危险信号：局部骨压痛（用手指按压骨的特定位置会剧烈疼痛）+ 单腿跳跃测试（患侧单腿跳落地剧痛）。MRI是确诊的金标准（X光在早期可能无法检测到裂纹）。',
    keyFindings: ['女性运动员三联征（低能量可用性+月经紊乱+低骨密度）使应力骨折风险增加3-5倍', '训练量每周增加>30%与应力骨折风险显著相关', '维生素D缺乏（<30ng/mL）与应力骨折风险增加相关', '完全恢复并重返训练的中位时间约12-14周（取决于部位和严重程度）'],
    practicalApplication: '预防（最重要的措施）：①严格执行10%周增量规则（每周训练量增加不超过10%）；②确保钙（1000-1300mg/天）+维生素D（2000-4000IU/天）；③在草地/塑胶跑道而非水泥地面训练；④如果出现局部骨压痛+单腿跳痛，立即停止跑步并看运动医学/骨科——"继续跑忍一忍"会使微裂纹发展成完全骨折。',
    references: ['Bennell, K.L. et al. (1999). Risk factors for stress fractures in track and field athletes', 'Tenforde, A.S. et al. (2016). Association of the Female Athlete Triad risk stratification'],
    searchLinks: [
      { label: '知网：应力性骨折+短跑+胫骨', url: 'https://kns.cnki.net/kns8s/search?keyword=应力性骨折+短跑+胫骨+跖骨' },
      { label: 'Google Scholar: Stress Fracture Sprint Athletes', url: 'https://scholar.google.com/scholar?q=stress+fracture+sprint+track+field+risk+factors' },
    ],
  },

  // ========== 营养恢复 (补充2篇) ==========
  {
    id: 'hydration-electrolyte-sprint',
    title: '短跑运动员的水合状态与电解质平衡',
    category: '营养恢复',
    summary: '虽然短跑持续时间短（<45秒），看似不需要特别关注水合状态——但脱水对短跑的影响可能被低估。研究显示，体重1-2%的轻度脱水即可使最大力量输出降低2-3%，起跑反应时延长0.02-0.05秒。对400m运动员来说，脱水的影响更显著（因为高强度运动持续时间更长）。关键电解质的流失（通过出汗）：钠（主要）、钾、镁——其中低镁状态与肌肉痉挛风险增加相关。尿液颜色是水合状态最简单有效的自检方法（淡黄色=正常，深黄色/棕色=脱水）。',
    keyFindings: ['体重1-2%的脱水可使爆发力下降2-3%', '训练前2小时补充500-600ml水可将脱水风险显著降低', '尿液颜色（Ucol）与血浆渗透压的相关系数r=0.70-0.85', '低镁状态与运动诱发性肌肉痉挛风险增加相关'],
    practicalApplication: '水合策略：训练前2-3小时喝500-600ml水，训练前15分钟再喝200-300ml。训练中（特别是热身+耐力训练超过45分钟时）每15-20分钟喝150-300ml。训练后：称体重→每减少0.5kg体重=补充750ml水+电解质。自检：每天早晨第一次尿液应为淡黄色——如果连续几天深黄，增加全天饮水量。',
    references: ['Sawka, M.N. et al. (2007). Exercise and fluid replacement', 'Shirreffs, S.M. & Sawka, M.N. (2011). Fluid and electrolyte needs for training'],
    searchLinks: [
      { label: '知网：水合状态+短跑+电解质', url: 'https://kns.cnki.net/kns8s/search?keyword=水合状态+短跑+电解质+运动表现' },
      { label: 'Google Scholar: Hydration Sprint Performance Electrolyte', url: 'https://scholar.google.com/scholar?q=hydration+status+sprint+performance+electrolyte+balance' },
    ],
  },
  {
    id: 'caffeine-sprint-dosing',
    title: '咖啡因对短跑表现的剂量效应与个体差异',
    category: '营养恢复',
    summary: '咖啡因是研究最充分、效果最一致的运动增强剂之一——对短跑同样有效。荟萃分析表明，咖啡因可将单次冲刺表现提高3-5%（相当于100m约0.05-0.15秒提升）。最佳剂量为3-6mg/kg体重（相当于70kg运动员摄入210-420mg=约2-4杯咖啡），在训练/比赛前45-60分钟摄入。但咖啡因的个体反应差异巨大——这与CYP1A2基因（肝脏咖啡因代谢酶）的多态性有关：约40%的人为"快速代谢者"（咖啡因效果好），约10%为"慢速代谢者"（可能无效甚至反作用）。',
    keyFindings: ['咖啡因3-6mg/kg剂量可将短跑表现提高3-5%', 'CYP1A2基因型影响咖啡因的反应（快速/慢速代谢者）', '赛前45-60分钟摄入效果最佳（血药浓度峰值约60分钟）', '长期摄入产生耐受性（效果减弱），赛前7天"咖啡因戒断"可恢复敏感性'],
    practicalApplication: '不要在大赛日第一次尝试咖啡因！在训练中先测试自己的最佳剂量和反应：从3mg/kg开始（约200mg=2杯浓咖啡），记录（1）主观感觉（警觉/焦虑/心跳）（2）客观成绩（计时）。如果效果不明显且无副作用，逐步增加到6mg/kg。赛前1周停止所有咖啡因摄入（恢复敏感性），赛前1小时按已测试的剂量使用。了解自己的CYP1A2基因型（可通过23andMe等消费基因检测获得）。',
    references: ['Grgic, J. et al. (2019). Wake up and smell the coffee: caffeine supplementation and exercise performance', 'Guest, N. et al. (2018). Caffeine, CYP1A2 genotype, and endurance performance'],
    searchLinks: [
      { label: '知网：咖啡因+短跑+剂量+运动表现', url: 'https://kns.cnki.net/kns8s/search?keyword=咖啡因+短跑+剂量+运动表现' },
      { label: 'Google Scholar: Caffeine Dosing Sprint Performance CYP1A2', url: 'https://scholar.google.com/scholar?q=caffeine+dose+sprint+performance+CYP1A2+genotype' },
    ],
  },

  // ========== 青训发展 (补充2篇) ==========
  {
    id: 'relative-age-effect-sprint',
    title: '相对年龄效应在青少年短跑选材中的影响',
    category: '青训发展',
    summary: '相对年龄效应（RAE）指在同一年龄组中，出生月份较早（1-3月）的青少年因身体发育上的微小优势（更高/更强/更快）而在运动选材中被过度代表的现象。研究发现，在青少年短跑（特别是U15-U18组），1-3月出生的运动员比例高达40-50%（期望值应为25%）。这意味着许多有天赋的"晚发育者"（特别是8-12月出生）在早期被忽视——他们的运动潜力可能在青春期后期（16-18岁）才显现出来，但此时可能已经退出了田径。',
    keyFindings: ['青少年短跑中Q1（1-3月）出生者比例约40-50%（同期望值25%）', 'RAE在青春期中期（13-16岁）最为显著', '按生物年龄（而非日历年龄）分组可显著降低RAE的影响', '晚发育者在16-18岁后常表现出反超趋势（"晚期优势"）'],
    practicalApplication: '教练和选材部门应该：①了解本队运动员的出生月份分布——如果Q1占比过高，说明可能存在RAE选材偏差；②在U15-U18年龄段使用"生物年龄"（根据骨龄/发育阶段）而非日历年龄进行分组；③对"晚出生+晚发育"的青少年保持耐心——他们的成长曲线可能比别人晚2-3年。家长：如果你家孩子是8-12月出生但跑得快——他可能比同龄早出生者更有天赋（因为他在身体劣势下仍能竞争）。',
    references: ['Cobley, S. et al. (2009). Annual age-grouping and athlete development', 'Helsen, W.F. et al. (2005). The relative age effect in youth soccer'],
    searchLinks: [
      { label: '知网：相对年龄效应+青少年+短跑选材', url: 'https://kns.cnki.net/kns8s/search?keyword=相对年龄效应+青少年+短跑+选材' },
      { label: 'Google Scholar: Relative Age Effect Youth Sprint', url: 'https://scholar.google.com/scholar?q=relative+age+effect+youth+sprint+track+field' },
    ],
  },
  {
    id: 'early-specialization-risk',
    title: '早期专项化的风险：多项目训练对青少年短跑运动员的保护作用',
    category: '青训发展',
    summary: '大量证据表明，过早的单一短跑专项化（<13岁）与更高的伤病率、运动倦怠率和更短的竞技寿命相关。而"多样化运动参与"——在14-16岁前保持2-3项不同运动的参与（如田径+足球+篮球）——可以：①发展更全面的运动技能基础（协调性/空间感知/反应速度）；②降低重复性劳损风险（不同运动交替使用不同肌群和关节）；③减少心理倦怠。值得注意的是，"多样化"不等于"不训练"——青少年阶段仍应有系统的训练，只是内容不应100%集中在短跑专项上。',
    keyFindings: ['<13岁专项化的运动员大学阶段退出率约70%', '多个项目参与的青少年成年后达到精英水平的概率更高', '早期多样化运动员的速度峰值通常出现在18-22岁（vs 专项化者14-17岁）——但长期发展更优', '青少年阶段每周应至少保留1-2天用于非专项运动/游戏化训练'],
    practicalApplication: '8-12岁：70%多样化运动（田径/球类/游戏）+30%基础跑跳技术。13-15岁：50%田径专项（不含100%短跑）+30%其他运动+20%基础力量（自重）。16岁+：逐渐增加短跑专项比例但保持跨项目活动（如同时参与4×100m接力和跳远）。关键信条："慢即是快"——在青少年阶段看起来"训练不够"的多样化方案，在成年后往往产生更好的长期发展结果。',
    references: ['Jayanthi, N.A. et al. (2015). Sports specialization in young athletes', 'Moesch, K. et al. (2011). Late specialization: the key to success in sports'],
    searchLinks: [
      { label: '知网：早期专项化+青少年短跑+多项目训练', url: 'https://kns.cnki.net/kns8s/search?keyword=早期专项化+青少年+短跑+多项目' },
      { label: 'Google Scholar: Early Specialization Sprint Youth Athletes', url: 'https://scholar.google.com/scholar?q=early+sport+specialization+youth+sprint+athletes' },
    ],
  },

  // ========== 训练科学 (补充2篇) ==========
  {
    id: 'contrast-training-sprint',
    title: '对比训练在短跑力量-速度转化中的应用',
    category: '训练科学',
    summary: '对比训练（Contrast Training）是在同一训练组内交替进行大负荷力量训练和爆发性运动（如跳跃或冲刺）。经典的对比训练组合：杠铃深蹲3次×85%1RM → 休息30秒 → 立定跳远5次（或30m冲刺）。原理是利用激活后增强效应（PAP）——大负荷力量训练后神经系统的兴奋性短暂提高，使随后的爆发性运动表现更好。研究显示，8周对比训练比传统力量训练能更有效地转化力量为速度（100m成绩提升约0.1-0.2秒 vs 0.05-0.1秒）。',
    keyFindings: ['对比训练比传统力量训练的短跑迁移效果高约1.5-2倍', '大负荷与爆发性运动的间隔时间应为30秒-4分钟（因个体差异不同）', '对比训练最适合在专项准备期使用（力量基础已建立后）', '过度使用对比训练会导致神经疲劳——每周不超过2次'],
    practicalApplication: '典型对比训练课（专项准备期）：①杠铃半蹲3次×85%1RM→休息2分钟→30m冲刺→休息3分钟→重复4组；②杠铃高翻3次×80%1RM→休息2分钟→立定跳远5次→休息3分钟→重复3组。注意：对比训练前充分热身（包括动态拉伸+逐渐递增的大负荷热身组），每周限制在1-2次（不与其他高神经负荷训练叠加）。',
    references: ['Seitz, L.B. & Haff, G.G. (2016). Factors modulating post-activation potentiation', 'Ebben, W.P. (2002). Complex training: a brief review'],
    searchLinks: [
      { label: '知网：对比训练+短跑+激活后增强', url: 'https://kns.cnki.net/kns8s/search?keyword=对比训练+短跑+激活后增强+PAP' },
      { label: 'Google Scholar: Contrast Training Sprint Performance PAP', url: 'https://scholar.google.com/scholar?q=contrast+training+sprint+post+activation+potentiation' },
    ],
  },
  {
    id: 'warmup-protocol-sprint',
    title: '短跑热身方案的循证优化',
    category: '训练科学',
    summary: '热身（Warm-Up）的质量直接影响短跑表现和伤病风险。循证研究支持的最佳热身结构包括三个渐进阶段：①一般热身（5-10分钟低强度有氧+动态拉伸）→ 提高肌肉温度和血液循环；②专项激活（10-15分钟短跑Drills+渐进加速）→ 激活神经肌肉通路和专项运动模式；③强度准备（5分钟起跑练习+PAP激活如2-3次快速半蹲）→ 做好全速冲刺的神经准备。研究显示，结构化的热身可将冲刺表现提高3-5%，并将肌肉拉伤风险降低约30-40%。',
    keyFindings: ['三个阶段的热身结构比随意热身效率高约30-40%', '动态拉伸优于静态拉伸（训练前静态拉伸降低力量输出3-5%）', '热身中核心温度每升高1°C，神经传导速度增加约2-3m/s', '热身效果在结束后约15-20分钟开始衰减——热身结束与比赛开始的时间间隔应<10分钟'],
    practicalApplication: '标准赛前热身流程（总时长约30-35分钟）：0-5min 轻跑+臀腿动态拉伸 → 5-10min A-Skip/B-Skip等技术Drills（2×30m每种） → 10-15min 加速跑（50%-70%-85%-95%各1次×30m） → 15-20min 3次起跑反应练习+2次半蹲跳 → 25-30min 动态恢复（保持活动不冷却） → 30min 上赛道。比赛开始前10分钟完成热身——不要过早热身完了等太久。',
    references: ['Bishop, D. (2003). Warm up I and II', 'McGowan, C.J. et al. (2015). Warm-up strategies for sport and exercise'],
    searchLinks: [
      { label: '知网：热身方案+短跑+循证', url: 'https://kns.cnki.net/kns8s/search?keyword=热身+短跑+动态拉伸+准备活动' },
      { label: 'Google Scholar: Warm Up Protocol Sprint Performance', url: 'https://scholar.google.com/scholar?q=warm+up+protocol+sprint+performance+evidence+based' },
    ],
  },

  // ========== 运动生理补充 ==========
  {
    id: 'cns-fatigue-sprint',
    title: '中枢神经系统疲劳对短跑表现的短期与长期影响',
    category: '运动生理',
    summary: '中枢神经系统（CNS）疲劳是短跑训练中最隐蔽但影响最大的疲劳类型——它不像肌肉酸痛那样能被直接感知，但会显著降低发力速率（RFD）和反应速度。CNS疲劳的标志性症状：①即使肌肉感觉"不累"，冲刺速度却明显下降；②起跑反应时比平时延长0.05秒以上；③睡眠时间正常但醒来仍感疲倦。CNS的恢复速度远慢于肌肉——高强度速度训练后，肌肉24-48小时可恢复，但CNS可能需要72-96小时才能完全恢复。这就是为什么精英短跑运动员每周最多进行3次全速冲刺训练。',
    keyFindings: ['CNS疲劳后发力速率（RFD）可下降15-25%且持续48-72小时', '高强度速度训练后中枢驱动（central drive）下降是CNS疲劳的主要机制', 'CNS恢复所需时间是肌肉恢复的2-3倍', '心率变异性（HRV）是监测CNS疲劳的最实用无创指标'],
    practicalApplication: '追踪CNS疲劳：每天早晨测HRV（用心率带+手机App如HRV4Training），如果连续3天下降，暂停速度训练1-2天。CNS恢复策略：①保证完全休息日（不做任何训练）；②高质量睡眠（9h+）；③避免同时进行多种高CNS负荷训练（如最大速度+最大力量训练放在同一天只在准备期偶尔进行）；④注意生活中的CNS负荷（压力/熬夜/咖啡因过量）叠加在训练疲劳之上。',
    references: ['Taylor, J.L. & Gandevia, S.C. (2008). A comparison of central aspects of fatigue', 'Halson, S.L. (2014). Monitoring training load to understand fatigue in athletes'],
    searchLinks: [
      { label: '知网：中枢疲劳+短跑+HRV', url: 'https://kns.cnki.net/kns8s/search?keyword=中枢疲劳+短跑+心率变异性' },
      { label: 'Google Scholar: CNS Fatigue Sprint Performance Recovery', url: 'https://scholar.google.com/scholar?q=central+nervous+system+fatigue+sprint+performance+HRV' },
    ],
  },
  {
    id: 'heat-adaptation-sprint',
    title: '热适应对短跑表现的影响及训练策略',
    category: '运动生理',
    summary: '在高温环境下（特别是夏季室外比赛），热应激可显著降低短跑表现——核心体温每升高1°C，最大冲刺速度下降约1-2%。热适应训练（连续7-14天在热环境中进行中等强度训练）可通过以下适应机制改善热环境下的表现：①血浆容量增加（5-15%），改善心血管稳定性；②出汗率提高和出汗阈值降低，散热效率提高；③主观热感觉降低，心理耐受性提高。热适应对400m运动员的益处大于100/200m（因为运动持续时间更长，热累积更多）。',
    keyFindings: ['7-14天热适应训练可将热环境下冲刺表现恢复至常温水平', '热适应后血浆容量增加5-15%', '热训练的交叉适应效应可改善常温下的耐力（但短跑证据不足）', '主动热适应（运动中）比被动热适应（桑拿/热水浴）效果更好但更耗时'],
    practicalApplication: '如果夏季有重要比赛：赛前2周进行热适应训练——每天30-60分钟低强度训练（如技术Drills+慢跑）在热环境中（室外中午或室内调高温度），训练中不额外降温。如果无法进行热适应训练：赛前进行预冷策略（冰浆/冷毛巾敷颈部和腋下）可在一定程度上抵消热应激——但预冷效果仅持续约15-20分钟（适合100/200m但不够400m）。',
    references: ['Racinais, S. et al. (2015). Consensus recommendations on training and competing in the heat', 'Lorenzo, S. et al. (2010). Heat acclimation improves exercise performance'],
    searchLinks: [
      { label: '知网：热适应+短跑+高温比赛', url: 'https://kns.cnki.net/kns8s/search?keyword=热适应+短跑+高温+运动表现' },
      { label: 'Google Scholar: Heat Acclimation Sprint Performance', url: 'https://scholar.google.com/scholar?q=heat+acclimation+sprint+performance+hot+environment' },
    ],
  },
  {
    id: 'pacing-strategy-400m',
    title: '400m短跑的配速策略：科学还是直觉？',
    category: '运动生理',
    summary: '400m短跑是短跑中唯一需要"配速策略"的项目——速度不能从始至终最大输出，否则最后100-150m会急剧衰减。研究显示最优配速是"正配速"（positive pacing）：前200m约为最大速度的93-95%，后200m递减——通常前200m比后200m快约1-2秒。精英400m运动员的前后200m差距约1-3秒（如43.03s = 前200m 20.8s + 后200m 22.2s）。过度激进的起跑（如前200m用98%最大速度）会导致后程衰减达3-5秒。',
    keyFindings: ['最优400m配速是"正配速"——前200m比后200m快1-3秒', '过度激进的前200m导致后程衰减3-5秒', '400m前半与后半的最佳时间差与运动员的速度耐力水平相关', '精英运动员在400m最后100m的速度通常下降10-15%'],
    practicalApplication: '在训练中用分段计时优化配速：在200m和300m处放置计时点。根据200m PB设定400m前200m目标时间（通常比200m PB慢约1-1.5秒）。训练中反复跑"前200m控制配速+后200m维持节奏"的模拟（如3×300m，每个前200m按目标配速跑后100m维持）。比赛策略：前200m"有控制的快"（不要疯狂全力），300m处评估体能决定最后100m是保持还是加速还是"咬牙撑住"。',
    references: ['van Ingen Schenau, G.J. et al. (1994). Optimization of sprinting performance in running', 'Hanon, C. & Gajer, B. (2009). Velocity and stride parameters of 400m'],
    searchLinks: [
      { label: '知网：400米+配速策略+分段计时', url: 'https://kns.cnki.net/kns8s/search?keyword=400米+配速策略+分段+短跑' },
      { label: 'Google Scholar: 400m Sprint Pacing Strategy', url: 'https://scholar.google.com/scholar?q=400m+sprint+pacing+strategy+velocity+distribution' },
    ],
  },
  {
    id: 'blood-flow-restriction-sprint',
    title: '血流限制训练在短跑康复和辅助训练中的应用',
    category: '运动生理',
    summary: '血流限制训练（BFR，Blood Flow Restriction）通过在肢体近端（大腿/上臂根部）施加适度压力（约40-80%动脉闭塞压）来限制静脉回流，同时保持动脉供血。BFR的独特价值在于：使用仅20-30%1RM的极轻重量即可产生与70-80%1RM大重量训练相似的肌肉肥大和力量增益。这对短跑运动员的康复期和减量期特别有价值——当因伤病不能进行大负荷训练时，BFR可帮助维持肌肉质量；比赛减量期用BFR辅助可保持力量而不增加神经肌肉疲劳。',
    keyFindings: ['BFR+20-30%1RM训练可产生与70-80%1RM大重量相似的力量增益', 'BFR训练的肌肉肥大效果约相当于传统大重量训练的60-80%', 'BFR对肌腱和韧带应力极小——非常适合康复期', 'BFR的安全性与传统训练相当（前提：正确使用专业BFR袖带）'],
    practicalApplication: '如果赛季中因轻伤不能深蹲：使用BFR袖带+30%1RM轻重量做深蹲（4组×15-30次，组间休息30秒），可维持大部分力量。每次BFR训练总时长<20分钟（长时间压迫有神经风险）。不要使用弹力带或绳索DIY BFR——压力不均匀有危险——使用专业BFR设备。有深静脉血栓风险、高血压未控、怀孕者禁止BFR。',
    references: ['Loenneke, J.P. et al. (2012). Low intensity blood flow restriction training: a meta-analysis', 'Patterson, S.D. et al. (2019). Blood flow restriction exercise'],
    searchLinks: [
      { label: '知网：血流限制训练+康复+肌肉力量', url: 'https://kns.cnki.net/kns8s/search?keyword=血流限制+BFR+康复+力量训练' },
      { label: 'Google Scholar: Blood Flow Restriction Training Sprint Rehab', url: 'https://scholar.google.com/scholar?q=blood+flow+restriction+training+sprint+rehabilitation' },
    ],
  },

  // ========== 训练科学补充 ==========
  {
    id: 'overspeed-training',
    title: '超速训练：牵引辅助冲刺的科学与实践',
    category: '训练科学',
    summary: '超速训练（Overspeed Training）通过外部辅助（下坡跑、弹力带牵引、高速牵引装置如1080 Sprint）让运动员短暂体验超过自身最大速度的步频和神经系统激活。理论是"神经超速适应"——让中枢神经系统"学习"更高的运动频率上限。研究显示，超速训练可将最大速度提高1-3%（约0.1-0.3m/s），但前提是辅助速度不超过自身最大速度的105-108%——超过此阈值会导致"刹车效应"（运动员下意识地用制动力减速以保护自己）。',
    keyFindings: ['超速训练的辅助速度应<自身最大速度的108%（超过此值产生刹车效应）', '下坡跑的最佳坡度1-3度（>3度改变跑步力学）', '弹力带牵引超速训练对步频的提高效果优于步幅', '超速训练每周最多1次（神经适应需要更长的恢复时间）'],
    practicalApplication: '安全超速训练方案：①下坡冲刺：在1-3度缓坡上进行40-60m最大速度冲刺（只做3-4次/周）；②弹力带辅助：搭档在前方用弹力带提供水平牵引（约5-10%体重的牵引力），冲刺30-40m；③如果条件允许使用1080 Sprint高速牵引——最精准可控的方案。每次超速训练后立即进行3次无辅助正常冲刺（帮助神经系统"转移"适应效果）。任何关节不适（特别是腘绳肌和跟腱）立即停止。',
    references: ['Clark, D.A. et al. (2009). The effects of overspeed training on sprint performance', 'Ebben, W.P. (2008). The optimal downhill slope for acute overspeed running'],
    searchLinks: [
      { label: '知网：超速训练+下坡跑+短跑', url: 'https://kns.cnki.net/kns8s/search?keyword=超速训练+下坡跑+短跑+牵引' },
      { label: 'Google Scholar: Overspeed Training Sprint Assisted Running', url: 'https://scholar.google.com/scholar?q=overspeed+training+sprint+assisted+towing' },
    ],
  },
  {
    id: 'microdosing-sprint',
    title: '训练微剂量化：高频低量训练在短跑中的应用',
    category: '训练科学',
    summary: '训练微剂量化（Microdosing）是将训练量分散到更多天数中、但每天的训练刺激更小的训练组织方式。例如：传统方案可能一周3次力量训练（每次60-90分钟），微剂量方案改为一周6次（每次20-30分钟）。理论优势：①更频繁的刺激维持持续的合成代谢信号；②每次训练疲劳积累少，不影响速度训练质量；③总训练量可以相同甚至更大。对短跑运动员而言，微剂量化特别适合"比赛期"——在需要保持力量和爆发力的同时不能因训练疲劳影响比赛速度。',
    keyFindings: ['微剂量化可在保持总训练量的同时降低单次训练疲劳', '对力量维持阶段特别有效（效果与传统3次/周相当）', '微剂量化组的训练依从性通常比传统方案高', '不适合准备期的大力量增长阶段（此阶段需要足够的训练刺激集中度）'],
    practicalApplication: '比赛期微剂量力量训练示例：周一至周六，每天6组力量训练动作（不同的动作轮换），每组仅做1-3次大重量（>85%1RM）或3-5次爆发力（<60%1RM快速）。每天总训练时间约20分钟。周日完全休息。关键：每天的训练刺激足够小到不影响速度训练但又能发送力量"维持"信号。可以训练前作为神经激活来做（刚好替代传统热身中的力量元素）。',
    references: ['Cunanan, A.J. et al. (2018). The microdosing sprint training approach', 'Haff, G.G. & Nimphius, S. (2012). Training principles for power'],
    searchLinks: [
      { label: '知网：微剂量化+训练频率+短跑', url: 'https://kns.cnki.net/kns8s/search?keyword=微剂量+训练频率+短跑+力量维持' },
      { label: 'Google Scholar: Microdosing Training Sprint Strength Maintenance', url: 'https://scholar.google.com/scholar?q=microdosing+training+frequency+sprint+strength+maintenance' },
    ],
  },

  // ========== 营养恢复补充 ==========
  {
    id: 'iron-deficiency-sprint',
    title: '铁缺乏对短跑运动表现的影响及筛查管理',
    category: '营养恢复',
    summary: '铁缺乏（特别是功能性铁缺乏——血清铁蛋白<35μg/L但血红蛋白正常）在短跑运动员中比想象中更常见，尤其是女性运动员（月经过多）和青少年运动员（快速生长+训练消耗）。铁是血红蛋白（氧气运输）和肌红蛋白（肌肉氧气储存）的关键成分，也是线粒体电子传递链（ATP生产）的必需辅因子。即使血红蛋白正常，低铁蛋白状态也会降低肌肉的氧化代谢效率——这对400m运动员特别重要（有氧贡献约40%），但对100/200m运动员影响较小。',
    keyFindings: ['女性运动员铁缺乏率约20-35%（男运动员约5-10%）', '铁蛋白<35μg/L即使血红蛋白正常也可能影响运动表现', '血清铁蛋白+血红蛋白+转铁蛋白饱和度三者联合评估最准确', '口服铁剂+维生素C（促进吸收）治疗8-12周可使铁蛋白水平翻倍'],
    practicalApplication: '每年至少做一次血常规+血清铁蛋白检查（最好在赛季前），女性运动员建议每6个月一次。如果铁蛋白<35μg/L：口服铁剂（如Ferrograd）+维生素C 500mg（促进吸收）→早餐前30分钟空腹服用（避免与钙/咖啡/茶同服——间隔2小时）。补铁4周后复查铁蛋白追踪改善。不要自行盲目补铁——铁超载（铁蛋白>300μg/L）对肝脏有害。',
    references: ['Peeling, P. et al. (2008). Iron status and the athlete', 'Sim, M. et al. (2019). Iron considerations for the athlete'],
    searchLinks: [
      { label: '知网：铁缺乏+运动员+运动表现', url: 'https://kns.cnki.net/kns8s/search?keyword=铁缺乏+运动员+铁蛋白+短跑' },
      { label: 'Google Scholar: Iron Deficiency Sprint Athletes Performance', url: 'https://scholar.google.com/scholar?q=iron+deficiency+sprint+athletes+ferritin+performance' },
    ],
  },
  {
    id: 'collagen-sprint',
    title: '胶原蛋白肽对短跑运动员结缔组织健康的作用',
    category: '营养恢复',
    summary: '胶原蛋白肽（特别是水解胶原蛋白+维生素C组合）对短跑运动员的肌腱、韧带和关节软骨健康有潜在的积极作用。研究机制：胶原蛋白肽中的特定氨基酸（甘氨酸、脯氨酸、羟脯氨酸）可直接被结缔组织摄取，在维生素C作为辅因子的条件下刺激胶原合成。训练前60分钟摄入15g胶原蛋白肽+50mg维生素C，血液中的胶原合成标志物（P1NP）在运动后升高约20-30%——这意味着这一时间窗口可能优化肌腱和韧带的训练适应。',
    keyFindings: ['训练前60分钟摄入15g胶原蛋白+50mg维C可使胶原合成标志物升高20-30%', '胶原蛋白肽对韧带和肌腱健康的作用>对肌肉的作用', '慢性跟腱病变患者从胶原蛋白补剂中可能特别受益', '胶原蛋白不能替代乳清蛋白——其对肌肉蛋白合成的作用远弱于乳清'],
    practicalApplication: '特别受益人群：①有慢性跟腱问题的运动员；②高强度增强式训练阶段（跳深/跨步跳等增加肌腱负荷）；③赛季准备期的力量增长阶段（肌腱的适应速度比肌肉慢——胶原蛋白可能帮助"跟上"）。用法：训练前60分钟摄入15g水解胶原蛋白肽+50-100mg维生素C（或一杯橙汁）。这不是必须的补剂——肌肉恢复用乳清蛋白，肌腱恢复考虑胶原蛋白肽。',
    references: ['Shaw, G. et al. (2017). Vitamin C-enriched gelatin supplementation before intermittent activity', 'Close, G.L. et al. (2019). Collagen peptide supplementation for athletes'],
    searchLinks: [
      { label: '知网：胶原蛋白肽+运动损伤+肌腱', url: 'https://kns.cnki.net/kns8s/search?keyword=胶原蛋白肽+运动损伤+肌腱+韧带' },
      { label: 'Google Scholar: Collagen Peptide Supplementation Tendon Health Sprint', url: 'https://scholar.google.com/scholar?q=collagen+peptide+tendon+health+athletes+sprint' },
    ],
  },
  {
    id: 'gut-training-sprint',
    title: '肠道训练：短跑运动员赛前营养的肠道耐受性',
    category: '营养恢复',
    summary: '赛前"肠道问题"（恶心、腹痛、腹泻）是许多短跑运动员的隐性困扰——尤其在比赛日的高压+高温环境下。肠道训练（Gut Training）是让胃肠道逐步适应赛前和赛中的营养摄入。原理：胃肠道就像任何器官一样，可以通过渐进超负荷来提高功能和耐受性。研究显示，2周的肠道训练方案可将运动诱发性肠道症状的发生率降低约40-60%。肠道训练的关键是"在训练中模拟比赛日的营养计划"而非只在比赛日才用。',
    keyFindings: ['2周肠道训练可将运动肠道症状发生率降低40-60%', '肠道可适应性提高碳水吸收率约20-30%', '赛前营养方案必须在训练中多次测试（非大赛日首次使用）', 'FODMAP限制饮食（赛前24h避免高FODMAP食物）可能对敏感个体有效'],
    practicalApplication: '肠道训练方案（赛前2周开始）——在训练课前按照比赛日的进食时间表摄入同样的食物和量。例如：如果比赛在下午3点，就在下午3点的训练课前3小时吃赛前餐，赛前1小时吃赛前零食。记录每次的肠道感受（1-10分），逐步调整食物种类和量。赛前24小时避免高FODMAP食物（洋葱/大蒜/豆类/高果糖水果）——这些容易产气和引起腹胀。比赛日大便原则：最好在热身前一小时完成排便（咖啡可以帮）。',
    references: ['Jeukendrup, A.E. (2017). Training the gut for athletes', 'de Oliveira, E.P. et al. (2014). Gastrointestinal complaints during exercise'],
    searchLinks: [
      { label: '知网：肠道训练+运动营养+胃肠耐受', url: 'https://kns.cnki.net/kns8s/search?keyword=肠道训练+运动营养+胃肠+运动员' },
      { label: 'Google Scholar: Gut Training Athletes Gastrointestinal Sprint', url: 'https://scholar.google.com/scholar?q=gut+training+athletes+gastrointestinal+symptoms+sprint' },
    ],
  },

  // ========== 伤病预防补充 ==========
  {
    id: 'concussion-sprint',
    title: '短跑起跑器事故与脑震荡：被忽视的风险',
    category: '伤病预防',
    summary: '起跑器使用中的意外摔倒——特别是起跑第一步"踩空"或起跑器滑脱导致的向前摔倒——可能导致头面部撞击跑道、造成脑震荡。虽然比美式足球/橄榄球少见得多，但后果可能严重。高发情境：湿滑跑道+新手使用起跑器+起跑器钉未正确固定。预防措施：①训练前检查起跑器是否牢固嵌入跑道；②新运动员在教练监督下学习起跑器使用（从低风险的三点支撑起跑开始）；③确保跑道干燥。',
    keyFindings: ['起跑器相关脑震荡发生率低但后果可能严重', '湿滑跑道+新手使用起跑器是最常见的情境组合', '75%的起跑器事故可以通过使用前检查+正确教学预防', '脑震荡后重返赛场应遵循分级RTP方案（如SCAT5/SCAT6）'],
    practicalApplication: '教练：每次训练前亲自（或指定助教）检查所有起跑器固定。新手教学：①第一步：从三点支撑起跑（不用起跑器）学习身体前倾；②第二步：从站立起跑过渡；③第三步：才引入起跑器。如果发生摔倒且头部撞击跑道：立即进行脑震荡筛查（SCAT6测试），不要"看起来没事就继续练"——脑震荡症状可能延迟出现。',
    references: ['McCrory, P. et al. (2017). Consensus statement on concussion in sport', 'Harmon, K.G. et al. (2013). American Medical Society for Sports Medicine position statement: concussion in sport'],
    searchLinks: [
      { label: '知网：脑震荡+田径+起跑器+安全', url: 'https://kns.cnki.net/kns8s/search?keyword=脑震荡+田径+起跑器+运动安全' },
      { label: 'Google Scholar: Concussion Sprint Track Field Starting Blocks', url: 'https://scholar.google.com/scholar?q=concussion+track+field+sprint+starting+blocks+safety' },
    ],
  },
  {
    id: 'tendon-adaptation-sprint',
    title: '肌腱对短跑训练的适应：为什么肌腱比肌肉"慢"',
    category: '伤病预防',
    summary: '肌肉对力量训练的适应（蛋白质合成增加→肌肉肥大）通常在训练后几小时内启动，持续24-48小时，在6-8周内产生显著肥大。但肌腱的适应速度显著慢于肌肉——肌腱胶原蛋白的周转率（半衰期）约为100-200天（vs 肌肉蛋白的10-15天）。这意味着：当你通过8周力量训练使深蹲提高了20kg——肌肉变强了，但你的髌腱和跟腱可能还没有完全适应新的力量水平。这也是为什么许多运动员在力量增长阶段突然出现跟腱/髌腱问题的原因——"肌肉跑太快，肌腱跟不上"。',
    keyFindings: ['肌腱胶原蛋白半衰期约100-200天（肌肉蛋白仅10-15天）', '6-8周力量训练后肌腱刚度可能只增加了原计划的30-50%（滞后效应）', '肌腱的适应需要持续的机械刺激——完全休息会导致肌腱刚度倒退', '等长训练（Isometric）对肌腱康复特别有效——提供足够的机械刺激而无关节运动'],
    practicalApplication: '力量增长阶段要"等一下肌腱"——当深蹲/硬拉在6-8周内增长15-20%以上时，随后的4-6周应维持重量而非继续增加，给肌腱适应的时间。赛季中如果跟腱/髌腱区域出现持续性酸痛——考虑暂时减少增强式训练量（跳深/跳箱等），增加等长训练（如靠墙静蹲/西班牙蹲）来保护肌腱。肌腱不是韧带，它需要负荷来维持健康——完全休息对肌腱反而无益。',
    references: ['Magnusson, S.P. et al. (2010). Human tendon adaptation to loading', 'Kjaer, M. et al. (2009). From mechanical loading to collagen synthesis'],
    searchLinks: [
      { label: '知网：肌腱适应+力量训练+短跑', url: 'https://kns.cnki.net/kns8s/search?keyword=肌腱适应+力量训练+胶原蛋白+短跑' },
      { label: 'Google Scholar: Tendon Adaptation Strength Training Sprint', url: 'https://scholar.google.com/scholar?q=tendon+adaptation+strength+training+collagen+turnover+sprint' },
    ],
  },
  {
    id: 'return-to-sprint-decision',
    title: '短跑伤病后重返赛场的决策框架：客观标准vs主观感觉',
    category: '伤病预防',
    summary: '"我什么时候能再跑？"是每位受伤短跑运动员最关心的问题。多年研究总结出重返赛场（RTP）的三个阶段决策框架：①临床愈合（组织层面）——通过影像学（MRI/超声）和临床检查确认损伤组织已愈合到可承受负荷的水平；②功能恢复（肌肉/关节层面）——力量、柔韧性、本体感觉恢复到健侧的>90%；③运动专项准备（短跑层面）——逐步增加跑步强度（慢跑→渐进加速→半速冲刺→全速冲刺→比赛），每一步都通过疼痛和功能评估。过早RTP的最强预测因素不是运动员的自我感觉，而是康复师/教练的"压力"（赛季太重要了/队友都满了/再不回去位置就没了等外部压力）。',
    keyFindings: ['基于功能标准的RTP决策比基于时间的决策复发率低50-70%', '等速肌力测试>90%健侧是标准的RTP力量标准', '全速冲刺无痛是RTP最后的功能关卡', '外部压力（教练/队友/赛程）是过早RTP的最强预测因素'],
    practicalApplication: '受伤后和康复师一起制定RTP路线图并严格执行——不要因为"感觉好多了"就跳过某一步骤。每一步的功能测试数据（力量/柔韧性/计时）客观记录——如果某一步骤反复"卡住"过不去，说明组织还没准备好接受更大的负荷。把"你不急"作为康复原则——晚回来2周比早回来2个月又伤了的结果好得多。教练应该了解：运动员说自己不痛可能只是"想早点比赛"而非真的无痛。',
    references: ['Ardern, C.L. et al. (2016). Return to sport after anterior cruciate ligament injury', 'Taberner, M. et al. (2019). Return to sprinting after hamstring strain injury'],
    searchLinks: [
      { label: '知网：重返赛场+短跑+功能标准+康复', url: 'https://kns.cnki.net/kns8s/search?keyword=重返赛场+短跑+功能测试+康复标准' },
      { label: 'Google Scholar: Return to Sprint Decision Making RTP Criteria', url: 'https://scholar.google.com/scholar?q=return+to+sprint+decision+framework+RTP+criteria' },
    ],
  },

  // ========== 第五批 ==========
  {
    id: 'elite-sprint-longevity',
    title: '精英短跑运动员的竞技寿命：30岁后仍能PB的科学',
    category: '训练科学',
    summary: '传统观念认为短跑运动员的黄金年龄在24-28岁，但近年越来越多的运动员在30岁后仍持续创造PB甚至世界级成绩：Justin Gatlin 35岁获世锦赛金牌（2017）、Shelly-Ann Fraser-Pryce 35岁获世锦赛100m金牌（2022）、苏炳添32岁创亚洲纪录9.83s（2021）。研究表明，短跑速度在28岁后每10年下降约5-6%，但这种下降的速度高度个体化——与训练质量、伤病管理和生活方式的相关性远大于年龄本身。保持竞技长寿的关键因素：①训练量的智能管理（减少总训练量但保持强度）；②伤病预防（30+运动员伤病恢复时间更长）；③力量保持（30岁后每年自然丢失约1%肌肉量，需要力量训练来对抗）。',
    keyFindings: ['短跑速度的自然衰减约每10年5-6%（28岁后）', '力量训练可使30+运动员保持95%以上的巅峰力量', '30+精英运动员的训练量通常比25岁时减少约20-30%但强度保持', '睡眠质量和营养对30+运动员的重要性显著高于25岁前'],
    practicalApplication: '30+短跑运动员的训练调整：①每周速度训练减至2次（vs 25岁时3次），但保持最大速度质量；②增加恢复日（训练:恢复比例从之前的3:1调至2:1）；③力量训练保持大重量低次数（维持神经肌肉效率），不做高次数肌肉肥大训练（增加不必要的体重）；④每天保证9h+睡眠——30岁后生长激素分泌本来就下降了，睡眠不足的叠加效应更显著。',
    references: ['Baker, A.B. & Tang, Y.Q. (2010). Aging and performance in masters track and field athletes', 'Korhonen, M.T. et al. (2006). Aging, muscle fiber type, and contractile function'],
    searchLinks: [
      { label: '知网：运动员竞技寿命+短跑+30岁', url: 'https://kns.cnki.net/kns8s/search?keyword=运动员+竞技寿命+短跑+30岁' },
      { label: 'Google Scholar: Sprint Longevity Aging Performance Masters', url: 'https://scholar.google.com/scholar?q=sprint+longevity+aging+elite+performance+masters' },
    ],
  },
  {
    id: 'menstrual-cycle-sprint',
    title: '月经周期对女性短跑表现的影响及训练调整',
    category: '运动生理',
    summary: '月经周期中雌二醇和孕酮的波动可能影响女性的力量输出、体温调节和韧带松弛度——进而影响短跑表现和伤病风险。卵泡期（月经第1-14天，雌二醇逐步升高、孕酮低）通常与更好的爆发力表现和更低的体温相关；黄体期（第15-28天，孕酮升高）体温升高约0.3-0.5°C、韧带松弛度增加（理论上可能增加ACL损伤风险）。但研究结论不完全一致——个体差异极大，需要个性化追踪。',
    keyFindings: ['卵泡期的力量输出和爆发力通常优于黄体期（效应量约3-5%）', '黄体期的核心体温升高0.3-0.5°C（可能影响热环境下的表现）', '韧带松弛度在排卵期前后最高（与雌二醇峰值相关）', '约30%的女性运动员周期对表现影响明显，40%影响中等，30%几乎无影响'],
    practicalApplication: '使用App追踪自己的月经周期与训练表现的关系3-4个月（记录每次训练的主观感觉和客观成绩），找出自己的规律。如果黄体期表现明显下降：考虑在黄体期减少最大速度训练量，将技术训练和中等强度训练安排在此阶段。如果周期症状严重（痛经/头痛/情绪波动）：可咨询运动医学/妇科医生是否需要激素干预（口服避孕药等）来稳定周期。',
    references: ['McNulty, K.L. et al. (2020). The effects of menstrual cycle phase on exercise performance', 'Carmichael, M.A. et al. (2021). The impact of menstrual cycle phase on athletes'],
    searchLinks: [
      { label: '知网：月经周期+女运动员+短跑表现', url: 'https://kns.cnki.net/kns8s/search?keyword=月经周期+女运动员+短跑+运动表现' },
      { label: 'Google Scholar: Menstrual Cycle Sprint Performance Female Athletes', url: 'https://scholar.google.com/scholar?q=menstrual+cycle+sprint+performance+female+athletes' },
    ],
  },
  {
    id: 'foam-rolling-science',
    title: '泡沫轴的科学：筋膜放松对短跑恢复的证据',
    category: '营养恢复',
    summary: '泡沫轴（Foam Rolling）是运动员最常用的恢复工具之一，但其作用机制和效果需要循证理解。研究显示泡沫轴可通过以下机制促进恢复：①暂时性降低肌筋膜张力（但效果仅持续约10-15分钟）；②增加局部血流量（但增加幅度约20-30%，不如主动运动）；③抑制疼痛信号（门控理论——压力的感觉"竞争"疼痛信号的传导通路）。对短跑运动员而言，泡沫轴的最佳使用时机是训练后30分钟内（趁肌肉温度还高时），以及热身中作为"感觉准备"而非"柔韧性提升"。',
    keyFindings: ['泡沫轴对DOMS的减轻效果为轻度至中等（荟萃分析效应量约0.4-0.6）', '泡沫轴对柔韧性的急性改善效果仅持续10-15分钟——不应替代拉伸', '泡沫轴的疼痛抑制效果是其最可靠的急性作用', '大重量力量训练后使用泡沫轴不影响力量增长（与冷水浸泡不同）'],
    practicalApplication: '训练后泡沫轴使用（10-15分钟）：①每个肌群缓慢滚动30-60秒（不要快速来回来）；②重点放松腘绳肌、股四头肌、小腿后侧和上背部；③遇到压痛点（感觉"酸胀"）停留20-30秒+深呼吸。不要在关节、骨骼或神经（如膝盖后侧的腘窝）上滚动。不要期望泡沫轴"解决"所有问题——它是一个辅助恢复工具，不能替代睡眠、营养和正确的训练负荷管理。',
    references: ['Cheatham, S.W. et al. (2015). The effects of self-myofascial release', 'Wiewelhove, T. et al. (2019). A meta-analysis of the effects of foam rolling'],
    searchLinks: [
      { label: '知网：泡沫轴+筋膜放松+运动恢复', url: 'https://kns.cnki.net/kns8s/search?keyword=泡沫轴+筋膜放松+运动恢复+短跑' },
      { label: 'Google Scholar: Foam Rolling Recovery Sprint Athletes', url: 'https://scholar.google.com/scholar?q=foam+rolling+recovery+sprint+athletes+DOMS' },
    ],
  },
  {
    id: 'breathing-training-sprint',
    title: '呼吸训练对短跑核心稳定性和恢复的影响',
    category: '训练科学',
    summary: '呼吸不仅关乎气体交换——膈肌（主要呼吸肌）同时也是核心稳定系统的"天花板"。在短跑中，膈肌的双重角色（呼吸+核心稳定）在高强度运动中可能产生"竞争"——当你需要极大核心稳定性时（如起跑阶段的爆发发力），膈肌可能暂时减少呼吸活动来优先满足稳定需求。呼吸训练（特别是膈式呼吸和核心呼吸协调）可优化这一双重功能。此外，训练后的副交感神经激活（通过慢呼吸）可加速从训练应激到恢复状态的转换。',
    keyFindings: ['膈肌张力与核心稳定性正相关——膈肌有力=核心更稳', '训练后5-10分钟慢呼吸可加速副交感神经再激活（HRV恢复）', '呼吸模式功能障碍（如胸式呼吸主导）在久坐运动员中发生率约40-60%', '呼吸训练改善核心功能的效果在4-6周后显现'],
    practicalApplication: '训练前：3-5分钟膈式呼吸（躺姿，手放腹部）激活膈肌+腹横肌。训练中：高强度动作（深蹲/高翻/冲刺）前深吸气+憋气（Valsalva maneuver）→增强躯干刚性。训练后：5-10分钟慢呼吸（吸4秒-呼6-8秒）帮助切换到恢复模式。如果经常训练后"气短"或"换不过气"——可能是呼吸模式以胸式为主，需练习膈式呼吸来优化。',
    references: ['Hodges, P.W. & Gandevia, S.C. (2000). Changes in intra-abdominal pressure during postural and respiratory activation', 'McConnell, A. (2013). Respiratory Muscle Training: Theory and Practice'],
    searchLinks: [
      { label: '知网：呼吸训练+核心稳定+短跑', url: 'https://kns.cnki.net/kns8s/search?keyword=呼吸训练+核心稳定+短跑运动员' },
      { label: 'Google Scholar: Breathing Training Core Stability Sprint', url: 'https://scholar.google.com/scholar?q=diaphragm+breathing+core+stability+sprint+athletes' },
    ],
  },
  {
    id: 'footwear-sprint',
    title: '短跑钉鞋的科技演变与选择指南',
    category: '科技应用',
    summary: '现代短跑钉鞋已经从简单的皮革钉鞋演变为高度工程化的碳纤维+超临界发泡材料科技产品。关键科技元素：①碳纤维板（如Nike Maxfly的Air Zoom+碳板组合）——增加足弓刚性和能量回馈；②超临界Pebax中底——比传统EVA轻30%且回弹率更高（约80-85% vs 60-65%）；③动态贴合鞋面——减少脚在鞋内的滑动。研究显示，新一代"超级钉鞋"可能将200-400m成绩提升约1-2%。世界田联在2025年开始对钉鞋科技进行更严格的规则限制（中底厚度<20mm，碳板层数限制等）。',
    keyFindings: ['新一代碳板钉鞋可能将200-400m成绩提高1-2%', '钉鞋中底回弹率每提高10%，约可节省跑者0.02-0.04秒/100m的能量', '过强的碳板刚性可能对足部肌群的自然适应产生负面影响', '训练中不应100%穿碳板钉鞋——保留部分训练用传统钉鞋锻炼足部力量'],
    practicalApplication: '比赛用鞋：选择符合世界田联最新规则的最适合你的钉鞋型号（不要只看品牌——不同脚型适合不同鞋楦）。日常训练：80%的训练用非碳板钉鞋/训练鞋（保持足部肌肉的自然力量），20%的重要训练（如计时测试/模拟比赛）穿比赛鞋（让脚适应比赛鞋的感觉）。试鞋：在购买前务必试穿并短距离冲刺——同一品牌的尺码可能和其他鞋不同。一双钉鞋的训练寿命约200-400km（或一个赛季）。',
    references: ['Hebert-Losier, K. et al. (2022). The effect of advanced footwear technology on sprint performance', 'World Athletics (2025). Technical Rules for Competition Footwear'],
    searchLinks: [
      { label: '知网：短跑钉鞋+碳纤维+运动科技', url: 'https://kns.cnki.net/kns8s/search?keyword=短跑钉鞋+碳纤维+运动科技+中底' },
      { label: 'Google Scholar: Sprint Spikes Carbon Fiber Technology Performance', url: 'https://scholar.google.com/scholar?q=carbon+fiber+sprint+spikes+performance+technology' },
    ],
  },
  {
    id: 'genetics-sprint-talent',
    title: '短跑天赋的遗传学基础：ACTN3与"速度基因"',
    category: '科技应用',
    summary: 'ACTN3基因（编码α-辅肌动蛋白-3，一种只在快肌纤维中存在的蛋白）被称为"速度基因"。RR基因型（两个功能等位基因）在精英短跑运动员中的比例约75-80%（普通人群约30%），XX基因型（两个无功能等位基因）在精英短跑中几乎为零。但ACTN3只是短跑天赋拼图的一小片——全基因组关联研究目前已发现约200+个与短跑/爆发力表现相关的基因位点，每个的效应都微乎其微。这意味着"天赋"是多基因+环境（训练/营养/时机）+心理因素的复杂交互——基因检测只能提供有限的参考，不能作为选材的决定性依据。',
    keyFindings: ['ACTN3 RR基因型在精英短跑运动员中的频率约75-80%（普通人群30%）', 'ACTN3 XX型在精英短跑/爆发力运动员中罕见（<1% vs 普通人群~18%）', '至今发现的200+基因位点合计只解释短跑天赋的约20-30%的遗传变异', '训练适应性（trainability）本身也是高度遗传的——训练反应者 vs 非反应者的差异部分由基因决定'],
    practicalApplication: '不要用基因检测来"选材"或"淘汰"——当前的基因科学只能解释短跑天赋的一小部分。对于有ACTN3 XX基因型的人——这并不意味"你不能短跑"，XX型在耐力项目中更常见但短跑中也存在。真正重要的是：你站上赛道了吗？训练的质量和持续性可以弥补（但不能完全替代）遗传上的微小劣势。对于好奇自己基因的：23andMe或类似消费基因检测可以测ACTN3——但记住它只是你故事的一个注脚而不是完整章节。',
    references: ['Yang, N. et al. (2003). ACTN3 genotype is associated with human elite athletic performance', 'Eynon, N. et al. (2013). Genes for elite power and sprint performance'],
    searchLinks: [
      { label: '知网：ACTN3+短跑+运动基因', url: 'https://kns.cnki.net/kns8s/search?keyword=ACTN3+速度基因+短跑+遗传' },
      { label: 'Google Scholar: ACTN3 Genetics Sprint Talent Performance', url: 'https://scholar.google.com/scholar?q=ACTN3+gene+sprint+performance+elite+athletes+polymorphism' },
    ],
  },
  {
    id: 'jetlag-sprint-comp',
    title: '时差对短跑比赛表现的影响及适应策略',
    category: '运动生理',
    summary: '国际比赛经常涉及跨越多个时区的旅行，时差（Jet Lag）可通过扰乱昼夜节律影响短跑表现。研究显示：每向西跨越1个时区约需1天来适应，向东跨越则约需1.5天（因为东向旅行缩短了白天——你的生物钟需要"追赶"更困难）。时差对短跑的影响主要体现在：①反应速度下降（核心体温低谷期——通常当地时间凌晨3-5点——反应时延长0.05-0.10秒）；②爆发力下降（与皮质醇节律紊乱相关）。中国的国际比赛选手常需向西（欧洲）或向东（美国）旅行——适应策略完全不同。',
    keyFindings: ['向西每时区约需1天适应，向东约需1.5天', '核心体温低谷期（约当地时间凌晨3-5点）反应时延长0.05-0.10s', '褪黑素（睡前3-5mg）可将时差适应时间缩短约30-50%', '赛前抵达目的地的时间建议：向西旅行=赛前每时区1天前，向东=每时区1.5天前'],
    practicalApplication: '向西去欧洲比赛（6-7个时区）——提前6-7天抵达；向东去美国（12-13个时区）——提前18-20天抵达（如果不可能，至少提前10天）。如果无法提前足够天数：①出发前3天开始每天向目标时间微调睡眠时间（每天30-60分钟）；②飞行中按目的地的白天/黑夜规律作息（目的地是白天就不要睡觉，是夜晚就遮光眼罩睡觉）；③抵达后早晨立刻进行户外光线暴露（阳光是最好的昼夜节律调节器）；④按目的地当地时间吃褪黑素（睡前3-5mg，使用3-5天）。',
    references: ['Reilly, T. et al. (2005). Jet lag and air travel: implications for performance', 'Waterhouse, J. et al. (2007). The stress of travel'],
    searchLinks: [
      { label: '知网：时差+运动表现+跨时区', url: 'https://kns.cnki.net/kns8s/search?keyword=时差+跨时区+运动表现+短跑' },
      { label: 'Google Scholar: Jet Lag Sprint Performance Circadian', url: 'https://scholar.google.com/scholar?q=jet+lag+circadian+sprint+performance+athletes+travel' },
    ],
  },
  {
    id: 'social-media-sprint',
    title: '社交媒体对短跑运动员心理健康与表现的影响',
    category: '运动心理',
    summary: '社交媒体已成为运动员生活的重要组成部分，但其对短跑表现的影响是双刃剑。积极作用：①与粉丝互动获得社会支持；②向对手传递"心理压力"（如赛前发布训练视频展示状态）；③建立个人品牌（目前短跑明星如Lyles/Jacobs非常善于利用社交媒体提升影响力）。消极作用：①赛前刷社交媒体可能增加焦虑（看到对手的"炫耀"内容）；②负面评论（网民攻击）对心理弹性不足的运动员可能产生持续的心理压力；③睡前社交媒体使用（蓝光）影响睡眠质量——进而影响次日表现。',
    keyFindings: ['赛前1-2小时避免社交媒体可将赛前焦虑水平降低约15-20%', '睡前1小时不使用电子屏幕可增加深度睡眠约25-30分钟', '运动员的社交媒体使用与身体意象满意度呈弱负相关(r=-0.15)', '积极的社交媒体使用（与粉丝互动>被动浏览）对心理健康影响不同'],
    practicalApplication: '赛前社交媒体策略：比赛日当天——只在赛后（不是赛前）看社交媒体；赛前24小时——关闭通知或暂时卸载App；让你的教练或家人代为发布赛前信息。睡前1小时No-Screen规则（读纸质书/听播客/做呼吸训练代替刷手机）。赛后：预期会有负面评论（即使你赢了也有人会说——提前心理准备好）。利用社交媒体的"不关注"和"屏蔽"功能来保护你的心理空间。',
    references: ['David, J.L. et al. (2022). Athlete mental health and social media use', 'Frison, E. & Eggermont, S. (2017). Browsing, posting, and liking on Instagram'],
    searchLinks: [
      { label: '知网：社交媒体+运动员+心理健康', url: 'https://kns.cnki.net/kns8s/search?keyword=社交媒体+运动员+心理健康+赛前焦虑' },
      { label: 'Google Scholar: Social Media Athletes Mental Health Sprint', url: 'https://scholar.google.com/scholar?q=social+media+athletes+mental+health+sprint+performance' },
    ],
  },
  {
    id: 'self-talk-sprint',
    title: '自我对话训练对短跑耐力和速度保持的作用',
    category: '运动心理',
    summary: '自我对话（Self-Talk）是运动员在训练和比赛中对自己说（内心或出声）的内容。研究将自我对话分为"指导性"（如"抬膝高一点""手臂摆大一点"——关注技术指令）和"激励性"（如"我能行""还有最后50米"——关注动机维持）。两种各有适用场景：指导性自我对话在技术训练和比赛前半段更有效（帮助执行正确的技术动作）；激励性自我对话在比赛后程（如400m最后100m）更有效（帮助克服疲劳和维持动力）。动机性自我对话可将耐力表现提高约18-20%（效应量比想象中大得多）。',
    keyFindings: ['指导性自我对话对精确技术动作的效果更好', '激励性自我对话可将疲劳耐受时间延长15-20%', '第二人称自我对话（"你能行"vs"我能行"）可能带来额外的心理距离效应', '赛前准备的自我对话短语应提前练习（"自动化"——不要比赛时才想该说什么）'],
    practicalApplication: '准备3-5个自我对话短语，在训练中反复使用达到"自动化"：①技术短语如"膝盖高""手到下巴"（指导性）；②动机短语如"冲到底""每一步都算数"（激励性）。用第二人称（你）可能比第一人称（我）带来更强的心理暗示——如"你行的"vs"我行的"。400m配速策略：前200m用指导性（控制技术），后200m切换到激励性（对抗疲劳的肉体需要心理呐喊）。用手写在胶带上贴在起跑器上——你的"赛前密语"。',
    references: ['Hatzigeorgiadis, A. et al. (2011). Self-talk and sports performance: a meta-analysis', 'Hardy, J. (2006). Speaking clearly: a critical review of the self-talk literature'],
    searchLinks: [
      { label: '知网：自我对话+运动表现+心理训练', url: 'https://kns.cnki.net/kns8s/search?keyword=自我对话+运动表现+心理训练+短跑' },
      { label: 'Google Scholar: Self Talk Sprint Performance Motivational', url: 'https://scholar.google.com/scholar?q=self+talk+sprint+performance+motivational+instructional' },
    ],
  },
  {
    id: 'hip-flexor-sprint',
    title: '髋屈肌：短跑中被低估的关键肌群',
    category: '训练科学',
    summary: '髋屈肌（主要是髂腰肌和股直肌）在短跑摆动期负责将大腿快速前摆——抬膝的高度和速度直接影响步频和步幅。但髋屈肌是短跑中最容易被忽视的力量训练目标——多数力量训练（深蹲/硬拉/臀推）集中在伸髋肌群（臀大肌/腘绳肌），而屈髋肌群（髂腰肌）几乎没有专门训练。研究显示，精英短跑运动员的屈髋力矩与成绩显著相关——特别是在加速阶段（30m内），屈髋力矩与分段成绩的相关系数高达r=0.72。弹力带抗阻抬膝和悬垂举腿是最有效的屈髋肌群专项训练。',
    keyFindings: ['屈髋力矩与30m分段成绩相关系数r=0.72', '髋屈肌在短跑摆动期的角速度可达1000-1200°/s——极快', '髂腰肌的专门训练在大多数短跑训练方案中被忽略', '屈髋肌群紧张（但无力量）——久坐+训练只伸不屈导致典型的肌力不平衡'],
    practicalApplication: '屈髋专项训练（加入每周训练方案）：①弹力带抗阻抬膝（3组×12-15次/侧，快速上抬+慢控下放）；②悬垂举膝（3组×8-15次，控制下放不晃动身体）；③行进间高抬腿（3×20-30m，关注抬膝高度和频率而非前进速度）。这些训练在热身中（激活）或力量训练后（强化）进行。同时保持髋屈肌的柔韧性——紧张无力的髋屈肌是"坐着跑"（躯干前倾+抬膝不够高）的主要原因。',
    references: ['Dorn, T.W. et al. (2012). Muscular strategy shift in human running', 'Schache, A.G. et al. (2014). The coordinated movement of the lumbo-pelvic-hip complex'],
    searchLinks: [
      { label: '知网：髋屈肌+短跑+抬膝技术', url: 'https://kns.cnki.net/kns8s/search?keyword=髋屈肌+短跑+抬膝+髂腰肌' },
      { label: 'Google Scholar: Hip Flexor Sprint Running Biomechanics Training', url: 'https://scholar.google.com/scholar?q=hip+flexor+iliopsoas+sprint+running+training+strength' },
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
  { key: '运动心理' as const, label: '运动心理', icon: '🧠' },
  { key: '科技应用' as const, label: '科技应用', icon: '📡' },
]
