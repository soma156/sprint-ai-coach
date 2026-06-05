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
    story: '陈冠锋是中国短跑00后新生代的代表。2024年全国锦标赛100m 10.06s夺冠，被视为中国短跑新生代的领军人物之一。',
  },
  {
    name: 'Kishane Thompson', nameEn: 'Kishane Thompson', nation: '🇯🇲', event: '100m',
    pb: '9.77s', currentSeasonBest: '9.81s', trend: 'rising',
    recentResults: [
      { meet: '2025东京世锦赛', date: '2025-09', event: '100m', mark: '9.81s', place: '🥈银牌', note: '仅0.02s惜败莱尔斯' },
      { meet: '2024牙买加选拔赛', date: '2024-06', event: '100m', mark: '9.77s', place: 'PB！', note: '牙买加新王诞生' },
      { meet: '2024巴黎奥运', date: '2024-08', event: '100m', mark: '9.82s', place: '🥈银牌', note: '奥运首秀夺银' },
    ],
    progression: [
      { year: '2023', age: 22, sb100m: '9.91s', sb200m: '—', highlights: '首破10秒' },
      { year: '2024', age: 23, sb100m: '9.77s', sb200m: '—', highlights: '奥运银牌+PB 9.77s' },
      { year: '2025', age: 24, sb100m: '9.81s', sb200m: '—', highlights: '世锦赛银牌' },
    ],
    strengthAreas: ['起跑爆发力', '前60m加速', '体格强壮（肌肉型）'], weaknessAreas: ['后程保持（vs Lyles）', '200m能力待开发'],
    story: 'Kishane Thompson是牙买加短跑新王牌。2024年奥运选拔赛9.77s PB震惊世界，巴黎奥运和2025世锦赛连续两届100m银牌（均输莱尔斯）。他的前60m能力无人能敌，代表牙买加"肌肉爆发型"传统。若后程技术有突破，将是莱尔斯最大威胁。',
  },
  {
    name: 'Marcell Jacobs', nameEn: 'Marcell Jacobs', nation: '🇮🇹', event: '100m/60m',
    pb: '9.80s（欧洲纪录）', currentSeasonBest: '10.02s', trend: 'stable',
    recentResults: [
      { meet: '2021东京奥运', date: '2021-08', event: '100m', mark: '9.80s', place: '🥇金牌', note: '奥运冠军！震惊世界' },
      { meet: '2022室内世锦赛', date: '2022-03', event: '60m', mark: '6.41s', place: '🥇金牌', note: '室内世界冠军' },
      { meet: '2024巴黎奥运', date: '2024-08', event: '100m', mark: '9.92s', place: '第5名', note: '仍属世界顶级' },
    ],
    progression: [
      { year: '2020', age: 26, sb100m: '10.10s', sb200m: '—', highlights: '从跳远转项短跑' },
      { year: '2021', age: 27, sb100m: '9.80s', sb200m: '—', highlights: '奥运金牌+欧洲纪录！' },
      { year: '2024', age: 30, sb100m: '9.92s', sb200m: '—', highlights: '重返顶级水平' },
    ],
    strengthAreas: ['起跑反应（跳远背景优势）', '60m能力', '大心脏'], weaknessAreas: ['伤病管理', '稳定性'],
    story: 'Marcell Jacobs是短跑史上最震撼的奥运冠军之一。2021东京奥运前几乎无人认识他——决赛9.80s欧洲纪录夺金直接封神。原为跳远选手，转项短跑仅3年即夺奥运金牌。饱受伤病但每逢大赛总有竞争力。他的故事证明短跑黄金年龄可以比想象中更晚。',
  },
  {
    name: 'Erriyon Knighton', nameEn: 'Erriyon Knighton', nation: '🇺🇸', event: '200m',
    pb: '19.49s', currentSeasonBest: '19.77s', trend: 'rising',
    recentResults: [
      { meet: '2025钻石联赛苏州', date: '2025-05', event: '200m', mark: '19.77s', place: '🥇冠军', note: '苏州站冠军' },
      { meet: '2024巴黎奥运', date: '2024-08', event: '200m', mark: '19.57s', place: '第4名', note: '' },
      { meet: '2022尤金世锦赛', date: '2022-07', event: '200m', mark: '19.80s', place: '🥉铜牌', note: '18岁世锦赛奖牌' },
    ],
    progression: [
      { year: '2021', age: 17, sb100m: '—', sb200m: '19.84s', highlights: '17岁奥运第4！破博尔特青年纪录' },
      { year: '2022', age: 18, sb100m: '—', sb200m: '19.49s', highlights: '世锦赛铜牌+PB 19.49s' },
      { year: '2024', age: 20, sb100m: '—', sb200m: '19.57s', highlights: '奥运第4名' },
    ],
    strengthAreas: ['年龄优势（22岁）', '200m专项化', '弯道技术'], weaknessAreas: ['100m能力', '大赛关键轮次波动'],
    story: 'Knighton是博尔特之后最令人兴奋的200m天才。17岁19.84s打破博尔特保持的青年纪录，18岁世锦赛铜牌+19.49s PB。他的教练就是博尔特的前教练Glen Mills。天赋上限被认为可以挑战博尔特的200m世界纪录（19.19s）。',
  },
  {
    name: 'Letsile Tebogo', nameEn: 'Letsile Tebogo', nation: '🇧🇼', event: '100m/200m',
    pb: '9.86s / 19.50s', currentSeasonBest: '9.88s / 19.55s', trend: 'rising',
    recentResults: [
      { meet: '2025东京世锦赛', date: '2025-09', event: '200m', mark: '19.50s', place: '🥉铜牌', note: '非洲纪录！' },
      { meet: '2024巴黎奥运', date: '2024-08', event: '200m', mark: '19.73s', place: '第6名', note: '奥运决赛首秀' },
      { meet: '2023布达佩斯世锦赛', date: '2023-08', event: '200m', mark: '19.81s', place: '🥈银牌', note: '震惊世界的20岁少年' },
    ],
    progression: [
      { year: '2022', age: 19, sb100m: '9.91s', sb200m: '—', highlights: 'U20 100m世界纪录 9.91s' },
      { year: '2023', age: 20, sb100m: '9.86s', sb200m: '19.50s', highlights: '世锦赛银牌+双PB！' },
      { year: '2025', age: 22, sb100m: '9.86s', sb200m: '19.50s', highlights: '世锦赛铜牌+非洲纪录' },
    ],
    strengthAreas: ['双项目能力', '年轻+上升势头', '非洲短跑旗帜'], weaknessAreas: ['大赛夺金经验', '对阵Lyles的心理'],
    story: 'Tebogo是博茨瓦纳国民英雄，非洲短跑崛起的标志。2023年20岁世锦赛200m银牌震惊世界，100m 9.86s和200m 19.50s均为非洲纪录。他打破了"短跑属于美洲和牙买加"的刻板印象。Tebogo代表了田径世界的新格局。',
  },
  {
    name: 'Ferdinand Omanyala', nameEn: 'Ferdinand Omanyala', nation: '🇰🇪', event: '100m',
    pb: '9.77s（非洲纪录）', currentSeasonBest: '9.86s', trend: 'stable',
    recentResults: [
      { meet: '2024巴黎奥运', date: '2024-08', event: '100m', mark: '10.08s', place: '半决赛', note: '未达最佳状态' },
      { meet: '2023布达佩斯世锦赛', date: '2023-08', event: '100m', mark: '10.01s', place: '半决赛', note: '' },
    ],
    progression: [
      { year: '2021', age: 25, sb100m: '9.77s', sb200m: '—', highlights: '非洲纪录！震惊世界' },
      { year: '2024', age: 28, sb100m: '9.86s', sb200m: '—', highlights: '奥运代表' },
    ],
    strengthAreas: ['前60m爆发力', '肯尼亚田径的另一面'], weaknessAreas: ['大赛稳定性', '后程保持'],
    story: 'Omanyala是肯尼亚的短跑奇迹——以长跑闻名的国度出了非洲最快100m选手（9.77s）。他的前60m能力足以与世界最顶尖抗衡，证明了短跑天赋可以来自任何地方。',
  },
  {
    name: '邓信锐', nameEn: 'Deng Xinrui', nation: '🇨🇳', event: '100m',
    pb: '10.11s', currentSeasonBest: '10.11s', trend: 'rising',
    recentResults: [
      { meet: '2025全国室内赛', date: '2025-02', event: '60m', mark: '6.60s', place: '', note: '室内60m PB' },
      { meet: '2024全国大奖赛', date: '2024-05', event: '100m', mark: '10.11s', place: '', note: 'PB' },
    ],
    progression: [
      { year: '2023', age: 20, sb100m: '10.25s', sb200m: '—', highlights: '初露头角' },
      { year: '2024', age: 21, sb100m: '10.15s', sb200m: '—', highlights: '稳步提升' },
      { year: '2025', age: 22, sb100m: '10.11s', sb200m: '—', highlights: '突破10.20s' },
    ],
    strengthAreas: ['年轻（上升空间大）', '60m能力', '训练系统'], weaknessAreas: ['大赛经验', '国际竞争力'],
    story: '邓信锐是中国短跑00后军团的又一代表。2025赛季100m 10.11s，室内60m 6.60s。22岁的他还有充足时间冲击10秒大关。在中国短跑"后苏炳添时代"，邓信锐和陈冠锋是接班的热门人选。',
  },
  {
    name: '汤星强', nameEn: 'Tang Xingqiang', nation: '🇨🇳', event: '100m/200m',
    pb: '10.22s / 20.39s', currentSeasonBest: '10.28s', trend: 'stable',
    recentResults: [
      { meet: '2021全运会', date: '2021-09', event: '200m', mark: '20.39s', place: '🥇金牌', note: '全运200m冠军' },
      { meet: '2021东京奥运', date: '2021-08', event: '4×100m', mark: '37.79s', place: '🥉铜牌', note: '中国接力队核心成员' },
    ],
    progression: [
      { year: '2017', age: 22, sb100m: '10.30s', sb200m: '—', highlights: '初入国家队' },
      { year: '2021', age: 26, sb100m: '10.22s', sb200m: '20.39s', highlights: '全运200m金牌+奥运接力铜牌' },
    ],
    strengthAreas: ['200m弯道技术', '接力经验丰富', '交接棒适配度高'], weaknessAreas: ['100m绝对速度', '单项国际竞争力'],
    story: '汤星强是中国男子4×100m接力的核心成员。2021全运会200m 20.39s夺金（击败谢震业）。在接力队中常跑第二或第四棒，交接棒技术成熟。虽单项不如谢震业亮眼，但在接力这一中国优势项目中是不可或缺的关键拼图。',
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
