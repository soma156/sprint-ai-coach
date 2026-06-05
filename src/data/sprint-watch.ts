// 短跑深度观察 — 真实数据驱动

export interface AthleteTracker {
  name: string
  nameEn: string
  nation: string
  event: string
  pb: string
  currentSeasonBest: string
  trend: 'rising' | 'stable' | 'declining' | 'comeback'
  recentResults: { meet: string; date: string; event: string; mark: string; place: string; note: string }[]
  progression: { year: string; age: number; sb100m: string; sb200m: string; highlights: string }[]
  strengthAreas: string[]
  weaknessAreas: string[]
  story: string
}

export const athleteTrackers: AthleteTracker[] = [
  {
    name: '苏炳添', nameEn: 'Su Bingtian', nation: '🇨🇳', event: '100m/60m',
    pb: '9.83s (亚洲纪录)', currentSeasonBest: '— (2025赛季复出)',
    trend: 'comeback',
    recentResults: [
      { meet: '2022尤金世锦赛', date: '2022-07', event: '100m', mark: '10.15s (+0.7) 半决赛', place: '小组第8', note: '伤病影响下的艰难赛季' },
      { meet: '2021东京奥运会', date: '2021-08', event: '100m', mark: '9.83s (+0.9) 半决赛', place: '亚洲纪录！', note: '创造了历史。9.83s至今仍是黄种人极限' },
      { meet: '2021东京奥运会', date: '2021-08', event: '100m', mark: '9.98s (+0.1) 决赛', place: '第6名', note: '成为首位进入奥运100m决赛的亚洲人' },
      { meet: '2018雅加达亚运', date: '2018-08', event: '100m', mark: '9.92s', place: '🥇金牌', note: '亚运会纪录' },
      { meet: '2015北京世锦赛', date: '2015-08', event: '100m', mark: '9.99s 半决赛', place: '进决赛！', note: '黄种人首次跑进10秒大关' },
    ],
    progression: [
      { year: '2013', age: 24, sb100m: '10.06s', sb200m: '—', highlights: '全国锦标赛100m冠军' },
      { year: '2015', age: 26, sb100m: '9.99s', sb200m: '—', highlights: '首次破10！世锦赛决赛' },
      { year: '2017', age: 28, sb100m: '10.03s', sb200m: '—', highlights: '世锦赛100m决赛' },
      { year: '2018', age: 29, sb100m: '9.91s', sb200m: '—', highlights: '追平亚洲纪录！亚运夺金 9.92s' },
      { year: '2019', age: 30, sb100m: '10.05s', sb200m: '—', highlights: '腰伤困扰，赛季不完整' },
      { year: '2021', age: 32, sb100m: '9.83s', sb200m: '—', highlights: '人生巅峰！亚洲纪录 9.83s' },
      { year: '2022', age: 33, sb100m: '10.15s', sb200m: '—', highlights: '受伤病严重影响' },
      { year: '2023', age: 34, sb100m: '—', sb200m: '—', highlights: '淡出赛场' },
      { year: '2025', age: 36, sb100m: '待定', sb200m: '—', highlights: '宣布复出！目标2027北京世锦赛' },
    ],
    strengthAreas: ['起跑反应（世界顶级0.12-0.14s）', '前30m加速能力', '途中跑技术（步频极高）', '大赛心理素质'],
    weaknessAreas: ['后程速度保持（100m最后20m）', '身高限制步幅', '伤病管理（腰伤/腘绳肌）'],
    story: '苏炳添是中国短跑的图腾级人物。1.72m的身高在百米赛场是明显的"矮个"，但他用极致的步频（4.8步/秒）和世界顶级的起跑弥补了步幅的劣势。2021东京奥运半决赛9.83s不仅是亚洲纪录，更证明了黄种人短跑的极限远未被触及。2025年36岁的他宣布复出，目标指向2027年将在北京举办的世界田径锦标赛——在自己的国家完成职业生涯谢幕战。',
  },
  {
    name: '谢震业', nameEn: 'Xie Zhenye', nation: '🇨🇳', event: '100m/200m',
    pb: '9.97s / 19.88s (200m亚洲纪录)', currentSeasonBest: '10.05s / 20.15s（2025赛季）',
    trend: 'stable',
    recentResults: [
      { meet: '2025钻石联赛苏州站', date: '2025-05', event: '200m', mark: '20.24s (+0.5)', place: '第4名', note: '主场作战，与世界顶尖同场' },
      { meet: '2024巴黎奥运会', date: '2024-08', event: '200m', mark: '20.34s', place: '半决赛', note: '奥运会200m代表' },
      { meet: '2022杭州亚运', date: '2023-10', event: '100m', mark: '9.97s', place: '🥇金牌', note: '亚运夺金！PB平' },
      { meet: '2019钻石联赛伦敦', date: '2019-07', event: '200m', mark: '19.88s', place: '🏆冠军', note: '亚洲纪录！' },
    ],
    progression: [
      { year: '2017', age: 24, sb100m: '10.08s', sb200m: '20.20s', highlights: '全运会200m夺冠' },
      { year: '2018', age: 25, sb100m: '9.97s', sb200m: '20.16s', highlights: '首破10秒！200m亚运夺金' },
      { year: '2019', age: 26, sb100m: '10.01s', sb200m: '19.88s', highlights: '200m亚洲纪录！世锦赛决赛' },
      { year: '2021', age: 28, sb100m: '10.10s', sb200m: '20.34s', highlights: '东京奥运200m代表' },
      { year: '2022', age: 29, sb100m: '9.97s', sb200m: '—', highlights: '亚运100m金牌' },
      { year: '2024', age: 31, sb100m: '10.05s', sb200m: '20.15s', highlights: '奥运+钻石联赛稳定发挥' },
    ],
    strengthAreas: ['后程加速（200m最后50m极强）', '步幅大且稳定', '弯道技术', '100m和200m双栖能力'],
    weaknessAreas: ['起跑反应（相对较弱）', '100m前半程速度', '天气适应（雨天表现下滑）'],
    story: '谢震业是中国唯一能在100m和200m双项目上达到世界水平的短跑选手。他是200m亚洲纪录保持者（19.88s），同时100m也有9.97s的惊人速度。与苏炳添的"极致步频型"不同，谢震业是"步幅型"选手（身高1.84m），他的后程加速能力在亚洲选手中极为罕见。2024巴黎奥运会他作为中国短跑的旗帜人物继续征战，200m的亚洲纪录至今无人能破。',
  },
  {
    name: 'Noah Lyles', nameEn: 'Noah Lyles', nation: '🇺🇸', event: '100m/200m',
    pb: '9.79s / 19.31s', currentSeasonBest: '9.79s / 19.31s（2025赛季）',
    trend: 'rising',
    recentResults: [
      { meet: '2025东京世锦赛', date: '2025-09', event: '100m', mark: '9.79s (+2.0)', place: '🥇金牌', note: '卫冕冠军！' },
      { meet: '2025东京世锦赛', date: '2025-09', event: '200m', mark: '19.31s', place: '🥇金牌', note: '双冠王！' },
      { meet: '2024巴黎奥运', date: '2024-08', event: '100m', mark: '9.79s', place: '🥇金牌', note: '奥运金牌' },
      { meet: '2023布达佩斯世锦赛', date: '2023-08', event: '100m', mark: '9.83s', place: '🥇金牌', note: '三冠王（100+200+4×100）' },
      { meet: '2022尤金世锦赛', date: '2022-07', event: '200m', mark: '19.31s', place: '🥇金牌', note: '刷新PB！美国纪录' },
    ],
    progression: [
      { year: '2019', age: 22, sb100m: '—', sb200m: '19.50s', highlights: '200m钻石联赛总冠军' },
      { year: '2021', age: 24, sb100m: '9.95s', sb200m: '19.52s', highlights: '东京奥运200m铜牌' },
      { year: '2022', age: 25, sb100m: '—', sb200m: '19.31s', highlights: '200m世锦赛金牌+美国纪录' },
      { year: '2023', age: 26, sb100m: '9.83s', sb200m: '19.52s', highlights: '世锦赛三冠王' },
      { year: '2024', age: 27, sb100m: '9.79s', sb200m: '19.53s', highlights: '奥运100m金牌' },
      { year: '2025', age: 28, sb100m: '9.79s', sb200m: '19.31s', highlights: '世锦赛双冠卫冕' },
    ],
    strengthAreas: ['后程加速（200m最后50m无敌）', '大赛发挥（关键比赛总出PB）', '200m弯道技术', '心理素质和舞台魅力'],
    weaknessAreas: ['起跑反应（偶尔偏慢0.16-0.18s）', '100m上半程（前50m常落后）', '空气动力学（身高1.80m，不算优势）'],
    story: 'Noah Lyles是后博尔特时代的短跑之王。2024巴黎奥运+2025东京世锦赛连续两个大赛的100m金牌，证明他不仅是200m大师，更已成为100m霸主。他的比赛风格极具观赏性——前50m常落后，后50m像开了加速器一样超越所有人。2026布达佩斯世锦赛，他将冲击100m+200m三连冠——这是博尔特之后无人做到的壮举。',
  },
  {
    name: '陈冠锋', nameEn: 'Chen Guanfeng', nation: '🇨🇳', event: '100m',
    pb: '10.06s', currentSeasonBest: '10.10s（2025室内赛季）',
    trend: 'rising',
    recentResults: [
      { meet: '2024全国锦标赛', date: '2024-06', event: '100m', mark: '10.06s', place: '🥇冠军', note: '全国冠军！PB' },
      { meet: '2024室内赛', date: '2024-02', event: '60m', mark: '6.55s', place: '', note: '室内60m PB' },
    ],
    progression: [
      { year: '2022', age: 20, sb100m: '10.29s', sb200m: '—', highlights: '初露头角' },
      { year: '2023', age: 21, sb100m: '10.15s', sb200m: '—', highlights: '稳步提升' },
      { year: '2024', age: 22, sb100m: '10.06s', sb200m: '—', highlights: '全国冠军' },
    ],
    strengthAreas: ['年轻（上升期）', '60m起跑能力', '学习能力'],
    weaknessAreas: ['大赛经验不足', '100m后程技术', '伤病风险未知'],
    story: '陈冠锋是中国短跑00后新生代的代表。2024年全国锦标赛100m 10.06s夺冠，被视为苏炳添之后中国短跑的希望。22岁的他正处于速度上升期，未来2-3年能否突破10秒大关将决定他能否接过中国短跑的接力棒。2027年北京世锦赛时他将是25岁——短跑的黄金年龄。',
  },
]

// 中国短跑月度观察
export interface SprintWatch {
  month: string
  hotAthlete: { name: string; reason: string }
  matchupOfMonth: { title: string; description: string }
  statOfMonth: { stat: string; context: string }
  upcomingMeet: { name: string; date: string; whyCare: string }
}

export const currentWatch: SprintWatch = {
  month: '2026年6月',
  hotAthlete: { name: 'Letsile Tebogo（博茨瓦纳）', reason: '2025世锦赛200m铜牌，2026赛季开季状态极佳。Tebogo是非洲短跑崛起的旗帜，22岁的他正以惊人的速度逼近200m 19.50s以内的稳定水平。如果他在2026钻石联赛中有突破性表现，将彻底改变世界200m格局。' },
  matchupOfMonth: { title: '莱尔斯 vs 汤普森 — 钻石联赛罗马站（6月4日）', description: '2026钻石联赛罗马站将是莱尔斯和汤普森在2025世锦赛后的首次100m对决。世锦赛上莱尔斯9.79s险胜汤普森9.81s。两个月后的罗马站，两人再次站上同一条起跑线——这是美牙短跑争霸的延续。' },
  statOfMonth: { stat: '中国男子100m现役选手中，跑进10.20s的有7人', context: '谢震业（9.97s）、陈冠锋（10.06s）、邓信锐（10.11s）、汤星强（10.22s）、严海滨（10.24s）、隋高飞（10.27s）、王爽（10.28s）。中国短跑梯队深度是历史最佳水平，但"后苏炳添时代"谁来扛旗仍是问题。' },
  upcomingMeet: { name: '钻石联赛罗马站 + 奥斯陆站', date: '6月4日 / 6月11日', whyCare: '欧洲赛季正式开启。罗马站有莱尔斯 vs 汤普森的100m大战，奥斯陆站以中长跑和400m栏见长。对中国短跑迷来说，这是观察2026赛季短跑格局的最佳时机。' },
}
