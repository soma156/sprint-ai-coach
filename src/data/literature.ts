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
