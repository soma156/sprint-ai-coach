// 赛事深度资料库 — 不只是数据，是故事

export interface CompDeepDive {
  whyMatters: string
  history: string
  pastWinners: { year: string; winner: string; mark: string; note: string }[]
  keyMatchups: { title: string; description: string }[]
  chineseConnection: string
  whatAtStake: string
  records: { event: string; record: string; holder: string; year: string }[]
  storyline: string
  bestVideos: { title: string; url: string; platform: string }[]
}

export const deepDives: Record<string, CompDeepDive> = {
  'world-champs': {
    whyMatters: '世界田径锦标赛是仅次于奥运会的田径最高级别赛事。对短跑运动员来说，世锦赛金牌的含金量丝毫不亚于奥运金牌——因为世锦赛同样汇聚全球最顶尖选手，且每两年一次（而非四年），是衡量"统治力"的真正标尺。',
    history: '首届世锦赛于1983年在赫尔辛基举办。从1991年起改为每两年一届。中国在世锦赛上的突破始于2015年北京世锦赛——苏炳添在男子100m半决赛跑出9.99s，成为首位跑进10秒的亚洲本土选手；男子4×100m接力获得银牌（后被升级为金牌）。2019年谢震业200m跑出20.03s进入决赛，创中国男子200m世锦赛最佳。2025年东京世锦赛，中国男子4×100m接力获第6名。',
    pastWinners: [
      { year: '2025', winner: 'Noah Lyles (USA)', mark: '9.79s (+2.0)', note: '莱尔斯实现世锦赛100m卫冕' },
      { year: '2023', winner: 'Noah Lyles (USA)', mark: '9.83s', note: '布达佩斯世锦赛。莱尔斯100m+200m+4×100m三冠' },
      { year: '2022', winner: 'Fred Kerley (USA)', mark: '9.86s', note: '尤金世锦赛。美国包揽100m前三' },
      { year: '2019', winner: 'Christian Coleman (USA)', mark: '9.76s', note: '多哈世锦赛。科尔曼惊人表现' },
      { year: '2017', winner: 'Justin Gatlin (USA)', mark: '9.92s', note: '35岁的加特林击败博尔特！博尔特退役之战获铜牌' },
      { year: '2015', winner: 'Usain Bolt (JAM)', mark: '9.79s', note: '北京世锦赛。博尔特0.01s险胜加特林。苏炳添9.99s进决赛' },
    ],
    keyMatchups: [
      { title: '🇺🇸 Lyles vs 🇯🇲 Thompson — 美牙对决', description: '2025世锦赛100m决赛，莱尔斯9.79s(+2.0)击败牙买加新星汤普森9.81s。莱尔斯的后程加速对上汤普森的起跑爆发，这场对决代表了当今短跑的两种极致风格。2026布达佩斯，两人将再次交锋。' },
      { title: '🇺🇸 Knighton vs 🇧🇼 Tebogo — 200m新生代争霸', description: '200m项目正经历新老交替。美国的Knighton（20岁，PB 19.49s）和博茨瓦纳的Tebogo（22岁，PB 19.50s）是后博尔特时代200m的两大希望。Knighton的天赋更高但发挥不稳定，Tebogo的上升势头更猛。2026世锦赛可能出现两人的巅峰对决。' },
      { title: '🇨🇳 中国接力队能否重返决赛？', description: '中国男子4×100m接力自2015北京世锦赛银牌后，始终保持在决赛圈水平。但随着苏炳添年龄增大，新生代选手（陈冠锋等）正在逐渐接班。2026世锦赛将是中国接力新阵容的大考。' },
    ],
    chineseConnection: '中国选手在世锦赛短跑项目上的参与感越来越强：苏炳添（2015/2017/2019/2022四次100m决赛）、谢震业（2019 200m决赛）、男子4×100m接力（2015银牌/2019第6/2022第6/2025第6）。2027年世锦赛将回到北京举办——中国短跑的主场荣耀之战。',
    whatAtStake: '世锦赛100m冠军 = "世界最快男人"的称号。金牌得主自动获得下届世锦赛外卡资格。各项目前8名获得对应国家的奥运会资格积分。',
    records: [
      { event: '男子100m', record: '9.58s', holder: 'Usain Bolt (JAM)', year: '2009柏林世锦赛' },
      { event: '男子200m', record: '19.19s', holder: 'Usain Bolt (JAM)', year: '2009柏林世锦赛' },
      { event: '女子100m', record: '10.49s', holder: 'F.Griffith-Joyner (USA)', year: '1988' },
      { event: '赛会100m纪录', record: '9.58s', holder: 'Usain Bolt', year: '2009' },
    ],
    storyline: '2026布达佩斯世锦赛最大的看点：① Noah Lyles能否完成100m+200m三连冠？这将是继博尔特之后无人做到的壮举；② 中国男子接力队在苏炳添可能退役前最后一次冲击世锦赛奖牌；③ 女子100m Richardson能否守住后座面对牙买加新星的挑战；④ 2027世锦赛将回到北京——2026的表现直接决定中国选手在主场世锦赛的信心和资格',
    bestVideos: [
      { title: '2025世锦赛男子100m决赛完整版', url: 'https://search.bilibili.com/all?keyword=2025世界田径锦标赛+男子100米决赛', platform: 'Bilibili' },
      { title: '2015北京世锦赛苏炳添9.99s进决赛', url: 'https://search.bilibili.com/all?keyword=苏炳添+2015+9.99+世锦赛', platform: 'Bilibili' },
      { title: '博尔特2009柏林9.58s世界纪录（含中文解说）', url: 'https://search.bilibili.com/all?keyword=博尔特+9.58+2009柏林+世界纪录', platform: 'Bilibili' },
    ],
  },

  'world-relays': {
    whyMatters: '世界田径接力赛是唯一的接力专项世界大赛。对接力项目而言重要性不亚于世锦赛，因为这里的竞争更纯粹——所有队伍都派出最强阵容比拼交接棒技术和团队配合。同时，接力赛是奥运会资格赛，前8名直接获得奥运入场券。',
    history: '首届世界接力赛于2014年在巴哈马举办。中国男子4×100m接力队在2017年获得铜牌（历史首枚世界接力赛奖牌），2019年再次获得第4名。2026年世界接力赛将在广州举办——中国队主场作战！',
    pastWinners: [
      { year: '2024', winner: '美国队', mark: '37.40s', note: '美国接力王者地位稳固' },
      { year: '2021', winner: '意大利队', mark: '37.50s', note: '东京奥运冠军意大利延续强势，Jacobs领衔' },
      { year: '2019', winner: '巴西队', mark: '37.72s', note: '横滨世界接力赛' },
    ],
    keyMatchups: [
      { title: '🇨🇳 中国队主场冲牌', description: '在广州主场，中国男子4×100m接力队在苏炳添、谢震业等老将的带领下，加上陈冠锋、邓信锐等新生代速度，将全力冲击奖牌甚至金牌。广州观众的热情将成为中国队的"第五棒"。' },
      { title: '🇺🇸 vs 🇯🇲 vs 🇮🇹 — 三强争霸', description: '美国队个人实力最强但交接棒是短板，牙买加队传统接力强队，意大利队在Jacobs带领下已跻身顶级。三支队伍代表了三种接力风格：美国=速度碾压、牙买加=技术精致、意大利=战术智慧。' },
    ],
    chineseConnection: '2026年广州世界接力赛是中国继2015北京世锦赛后又一次举办世界级田径赛事。主场作战，中国4×100m接力队的目标至少是领奖台。苏炳添+谢震业+陈冠锋+汤星强的阵容若状态齐整，绝对有冲金实力！',
    whatAtStake: '世界接力赛前8名直接获得2027北京世锦赛和2028洛杉矶奥运会的接力参赛资格。对中国队来说，在广州主场提前锁定奥运资格将是巨大成功。',
    records: [
      { event: '男子4×100m世界纪录', record: '36.84s', holder: '牙买加队', year: '2012伦敦奥运' },
      { event: '亚洲纪录', record: '37.43s', holder: '日本队', year: '2019多哈世锦赛' },
      { event: '中国纪录', record: '37.79s', holder: '中国队', year: '2019多哈世锦赛' },
    ],
    storyline: '广2026年广州世界接力赛：中国男子4×100m接力在主场冲击历史首枚世界接力赛金牌。如果苏炳添参赛，这很可能是他职业生涯最后一次代表中国出战世界大赛——在家门口画上完美句号。新生代陈冠锋能否接过接力棒（字面意思和比喻义都有）也将成为焦点。',
    bestVideos: [
      { title: '2015北京世锦赛中国接力银牌精彩瞬间', url: 'https://search.bilibili.com/all?keyword=中国接力+2015世锦赛+银牌', platform: 'Bilibili' },
      { title: '日本接力队技术分析', url: 'https://search.bilibili.com/all?keyword=日本4×100米接力+技术分析', platform: 'Bilibili' },
    ],
  },

  'dl-shanghai': {
    whyMatters: '钻石联赛上海/苏州站是中国唯一的钻石联赛分站。这是中国田径迷一年一次近距离观看世界级短跑巨星的机会。对本地运动员来说，这是在家乡父老面前与全球顶尖选手同场竞技的舞台。',
    history: '上海站自2005年起举办（原为黄金联赛，2010年转为钻石联赛）。苏炳添在2017上海站100m跑出10.09s获得第4名，谢震业2018上海站200m跑出20.25s获得第3名。2024年起移至苏州奥体中心举办。',
    pastWinners: [
      { year: '2025', winner: 'Knighton (USA) 200m 19.77s', mark: '+1.8m/s', note: 'Knighton在苏州展现了惊人的200m后程加速' },
      { year: '2024', winner: 'Lyles (USA) 100m 9.83s', mark: '', note: '赛会纪录！莱尔斯逆风9.83s堪称恐怖' },
      { year: '2023', winner: 'Knighton (USA) 200m 19.89s', mark: '', note: '' },
    ],
    keyMatchups: [
      { title: '🇨🇳 谢震业 200m主场作战', description: '谢震业在200m项目上拥有亚洲纪录19.88s，上海/苏州是他的福地。面对世界级选手，谢震业主场200m的表现每次都令人期待。' },
    ],
    chineseConnection: '这是中国田径迷一年中最期待的赛事——在家门口免费（或低价）看世界级短跑。中国选手通常会在钻石联赛上海站派出最强阵容，包括苏炳添（或已退役）、谢震业、陈冠锋等。历年来中国选手在主场往往有超常发挥。',
    whatAtStake: '钻石联赛分站冠军获得8个钻石联赛积分，计入年度总排名。上海站是亚洲唯一分站，冠军含金量高。',
    records: [
      { event: '赛会100m纪录', record: '9.83s', holder: 'Noah Lyles (USA)', year: '2024' },
      { event: '赛会200m纪录', record: '19.77s', holder: 'Erriyon Knighton (USA)', year: '2025' },
    ],
    storyline: '苏州钻石联赛是中国观众"零距离"接触世界短跑巨星的最佳机会。2026赛季，Lyles、Knighton、Tebogo等巨星大概率出战。中国选手谢震业、陈冠锋能否在主场上演"黑马奇迹"——历年来中国选手在上海站向来有超常发挥的传统。',
    bestVideos: [
      { title: '钻石联赛上海站历届精彩回顾', url: 'https://search.bilibili.com/all?keyword=钻石联赛上海+100米', platform: 'Bilibili' },
      { title: '谢震业钻石联赛200m精彩表现', url: 'https://search.bilibili.com/all?keyword=谢震业+钻石联赛+200米', platform: 'Bilibili' },
    ],
  },

  'world-indoor': {
    whyMatters: '世界室内田径锦标赛是田径最高级别赛事，汇聚全球最顶尖选手。每届比赛都改写短跑历史，是每一位短跑运动员梦想的舞台。',
    history: '世界室内田径锦标赛在中国田径版图中占据重要地位。该赛事吸引了全球最顶尖的短跑选手参赛，历届比赛中多次诞生惊人成绩。短跑项目历来是赛事焦点。比赛在南京举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '⭐ 世界级短跑对决', description: '世界室内田径锦标赛历来是短跑巨星展现速度的舞台。100m和200m项目的每一轮都充满悬念——起跑反应、途中加速、后程冲刺，每个环节都可能决定胜负。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '世界室内田径锦标赛是中国短跑选手的主场赛事。中国短跑军团（谢震业、陈冠锋、邓信锐等）以及各省队的短跑好手将在此展现速度。对于年轻选手，这是向国家队教练组证明自己的绝佳机会。',
    whatAtStake: '获胜者将获得世界排名积分，提升国际田联排名。钻石联赛分站冠军获8个钻石积分计入年度总排名。对各国运动员而言，国际大赛的成绩直接影响奥运资格和世界排名。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '世界室内田径锦标赛（2026-03-20 ~ 03-22）在南京中国举办。这是国际顶级级别的赛事，全球田径爱好者的目光将汇聚于此。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「世界室内田径锦标赛」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E4%B8%96%E7%95%8C%E5%AE%A4%E5%86%85%E7%94%B0%E5%BE%84%E9%94%A6%E6%A0%87%E8%B5%9B%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「南京 田径」', url: 'https://search.bilibili.com/all?keyword=%E5%8D%97%E4%BA%AC%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'asian-games': {
    whyMatters: '亚运会田径比赛是田径最高级别赛事，汇聚全球最顶尖选手。每届比赛都改写短跑历史，是每一位短跑运动员梦想的舞台。',
    history: '亚运会田径比赛在日本爱知·名古屋举办。该赛事吸引了全球最顶尖的短跑选手参赛，历届比赛中多次诞生惊人成绩。比赛在爱知·名古屋举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: '亚运会田径比赛涵盖全部田径项目等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: '亚运会田径比赛对中国短跑运动员来说既是挑战也是学习的宝贵机会。中国选手（如谢震业等）曾多次参加此类国际赛事，在与世界级选手的同场竞技中提升自己。',
    whatAtStake: '获胜者将获得世界排名积分，提升国际田联排名。钻石联赛分站冠军获8个钻石积分计入年度总排名。对各国运动员而言，国际大赛的成绩直接影响奥运资格和世界排名。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '亚运会田径比赛（2026-09-19 ~ 10-04）在爱知·名古屋日本举办。这是国际顶级级别的赛事，全球田径爱好者的目光将汇聚于此。',
    bestVideos: [
      { title: 'B站搜索「亚运会田径比赛」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E4%BA%9A%E8%BF%90%E4%BC%9A%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「爱知·名古屋 田径」', url: 'https://search.bilibili.com/all?keyword=%E7%88%B1%E7%9F%A5%C2%B7%E5%90%8D%E5%8F%A4%E5%B1%8B%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'dl-doha': {
    whyMatters: '钻石联赛 — 多哈站是钻石联赛年度系列赛的重要一站。钻石联赛代表了田径商业赛事最高水平，世界排名前8的选手受邀参赛，每一场都是"神仙打架"。',
    history: '钻石联赛 — 多哈站在卡塔尔多哈举办。该赛事吸引了全球最顶尖的短跑选手参赛，历届比赛中多次诞生惊人成绩。短跑项目历来是赛事焦点。比赛在多哈举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '⭐ 世界级短跑对决', description: '钻石联赛 — 多哈站历来是短跑巨星展现速度的舞台。100m和200m项目的每一轮都充满悬念——起跑反应、途中加速、后程冲刺，每个环节都可能决定胜负。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '钻石联赛 — 多哈站对中国短跑运动员来说既是挑战也是学习的宝贵机会。中国选手（如谢震业等）曾多次参加此类国际赛事，在与世界级选手的同场竞技中提升自己。',
    whatAtStake: '获胜者将获得世界排名积分，提升国际田联排名。钻石联赛分站冠军获8个钻石积分计入年度总排名。对各国运动员而言，国际大赛的成绩直接影响奥运资格和世界排名。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '钻石联赛 — 多哈站（2026-05-01）在多哈卡塔尔举办。这是钻石联赛级别的赛事，全球田径爱好者的目光将汇聚于此。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。',
    bestVideos: [
      { title: 'B站搜索「钻石联赛 — 多哈站」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E9%92%BB%E7%9F%B3%E8%81%94%E8%B5%9B%20%E2%80%94%20%E5%A4%9A%E5%93%88%E7%AB%99%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「多哈 田径」', url: 'https://search.bilibili.com/all?keyword=%E5%A4%9A%E5%93%88%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'dl-doha2': {
    whyMatters: '钻石联赛 — 拉巴特站是钻石联赛年度系列赛的重要一站。钻石联赛代表了田径商业赛事最高水平，世界排名前8的选手受邀参赛，每一场都是"神仙打架"。',
    history: '钻石联赛 — 拉巴特站在摩洛哥拉巴特举办。该赛事吸引了全球最顶尖的短跑选手参赛，历届比赛中多次诞生惊人成绩。短跑项目历来是赛事焦点。比赛在拉巴特举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '⭐ 世界级短跑对决', description: '钻石联赛 — 拉巴特站历来是短跑巨星展现速度的舞台。100m和200m项目的每一轮都充满悬念——起跑反应、途中加速、后程冲刺，每个环节都可能决定胜负。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '钻石联赛 — 拉巴特站对中国短跑运动员来说既是挑战也是学习的宝贵机会。中国选手（如谢震业等）曾多次参加此类国际赛事，在与世界级选手的同场竞技中提升自己。',
    whatAtStake: '获胜者将获得世界排名积分，提升国际田联排名。钻石联赛分站冠军获8个钻石积分计入年度总排名。对各国运动员而言，国际大赛的成绩直接影响奥运资格和世界排名。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '钻石联赛 — 拉巴特站（2026-05-23）在拉巴特摩洛哥举办。这是钻石联赛级别的赛事，全球田径爱好者的目光将汇聚于此。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。',
    bestVideos: [
      { title: 'B站搜索「钻石联赛 — 拉巴特站」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E9%92%BB%E7%9F%B3%E8%81%94%E8%B5%9B%20%E2%80%94%20%E6%8B%89%E5%B7%B4%E7%89%B9%E7%AB%99%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「拉巴特 田径」', url: 'https://search.bilibili.com/all?keyword=%E6%8B%89%E5%B7%B4%E7%89%B9%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'dl-rome': {
    whyMatters: '钻石联赛 — 罗马站是钻石联赛年度系列赛的重要一站。钻石联赛代表了田径商业赛事最高水平，世界排名前8的选手受邀参赛，每一场都是"神仙打架"。',
    history: '钻石联赛 — 罗马站在意大利罗马举办。该赛事吸引了全球最顶尖的短跑选手参赛，历届比赛中多次诞生惊人成绩。短跑项目历来是赛事焦点。比赛在罗马举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '⭐ 世界级短跑对决', description: '钻石联赛 — 罗马站历来是短跑巨星展现速度的舞台。100m和200m项目的每一轮都充满悬念——起跑反应、途中加速、后程冲刺，每个环节都可能决定胜负。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '钻石联赛 — 罗马站对中国短跑运动员来说既是挑战也是学习的宝贵机会。中国选手（如谢震业等）曾多次参加此类国际赛事，在与世界级选手的同场竞技中提升自己。',
    whatAtStake: '获胜者将获得世界排名积分，提升国际田联排名。钻石联赛分站冠军获8个钻石积分计入年度总排名。对各国运动员而言，国际大赛的成绩直接影响奥运资格和世界排名。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '钻石联赛 — 罗马站（2026-06-04）在罗马意大利举办。这是钻石联赛级别的赛事，全球田径爱好者的目光将汇聚于此。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。',
    bestVideos: [
      { title: 'B站搜索「钻石联赛 — 罗马站」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E9%92%BB%E7%9F%B3%E8%81%94%E8%B5%9B%20%E2%80%94%20%E7%BD%97%E9%A9%AC%E7%AB%99%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「罗马 田径」', url: 'https://search.bilibili.com/all?keyword=%E7%BD%97%E9%A9%AC%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'dl-oslo': {
    whyMatters: '钻石联赛 — 奥斯陆站是钻石联赛年度系列赛的重要一站。钻石联赛代表了田径商业赛事最高水平，世界排名前8的选手受邀参赛，每一场都是"神仙打架"。',
    history: '钻石联赛 — 奥斯陆站在挪威奥斯陆举办。该赛事吸引了全球最顶尖的短跑选手参赛，历届比赛中多次诞生惊人成绩。短跑项目历来是赛事焦点。比赛在奥斯陆举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '⭐ 世界级短跑对决', description: '钻石联赛 — 奥斯陆站历来是短跑巨星展现速度的舞台。100m和200m项目的每一轮都充满悬念——起跑反应、途中加速、后程冲刺，每个环节都可能决定胜负。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '钻石联赛 — 奥斯陆站对中国短跑运动员来说既是挑战也是学习的宝贵机会。中国选手（如谢震业等）曾多次参加此类国际赛事，在与世界级选手的同场竞技中提升自己。',
    whatAtStake: '获胜者将获得世界排名积分，提升国际田联排名。钻石联赛分站冠军获8个钻石积分计入年度总排名。对各国运动员而言，国际大赛的成绩直接影响奥运资格和世界排名。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '钻石联赛 — 奥斯陆站（2026-06-11）在奥斯陆挪威举办。这是钻石联赛级别的赛事，全球田径爱好者的目光将汇聚于此。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。',
    bestVideos: [
      { title: 'B站搜索「钻石联赛 — 奥斯陆站」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E9%92%BB%E7%9F%B3%E8%81%94%E8%B5%9B%20%E2%80%94%20%E5%A5%A5%E6%96%AF%E9%99%86%E7%AB%99%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「奥斯陆 田径」', url: 'https://search.bilibili.com/all?keyword=%E5%A5%A5%E6%96%AF%E9%99%86%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'dl-stockholm': {
    whyMatters: '钻石联赛 — 斯德哥尔摩站是钻石联赛年度系列赛的重要一站。钻石联赛代表了田径商业赛事最高水平，世界排名前8的选手受邀参赛，每一场都是"神仙打架"。',
    history: '钻石联赛 — 斯德哥尔摩站在瑞典斯德哥尔摩举办。该赛事吸引了全球最顶尖的短跑选手参赛，历届比赛中多次诞生惊人成绩。短跑项目历来是赛事焦点。比赛在斯德哥尔摩举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '⭐ 世界级短跑对决', description: '钻石联赛 — 斯德哥尔摩站历来是短跑巨星展现速度的舞台。100m和200m项目的每一轮都充满悬念——起跑反应、途中加速、后程冲刺，每个环节都可能决定胜负。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '钻石联赛 — 斯德哥尔摩站对中国短跑运动员来说既是挑战也是学习的宝贵机会。中国选手（如谢震业等）曾多次参加此类国际赛事，在与世界级选手的同场竞技中提升自己。',
    whatAtStake: '获胜者将获得世界排名积分，提升国际田联排名。钻石联赛分站冠军获8个钻石积分计入年度总排名。对各国运动员而言，国际大赛的成绩直接影响奥运资格和世界排名。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '钻石联赛 — 斯德哥尔摩站（2026-06-18）在斯德哥尔摩瑞典举办。这是钻石联赛级别的赛事，全球田径爱好者的目光将汇聚于此。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。',
    bestVideos: [
      { title: 'B站搜索「钻石联赛 — 斯德哥尔摩站」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E9%92%BB%E7%9F%B3%E8%81%94%E8%B5%9B%20%E2%80%94%20%E6%96%AF%E5%BE%B7%E5%93%A5%E5%B0%94%E6%91%A9%E7%AB%99%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「斯德哥尔摩 田径」', url: 'https://search.bilibili.com/all?keyword=%E6%96%AF%E5%BE%B7%E5%93%A5%E5%B0%94%E6%91%A9%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'dl-paris': {
    whyMatters: '钻石联赛 — 巴黎站是钻石联赛年度系列赛的重要一站。钻石联赛代表了田径商业赛事最高水平，世界排名前8的选手受邀参赛，每一场都是"神仙打架"。',
    history: '钻石联赛 — 巴黎站在法国巴黎举办。该赛事吸引了全球最顶尖的短跑选手参赛，历届比赛中多次诞生惊人成绩。短跑项目历来是赛事焦点。比赛在巴黎举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '⭐ 世界级短跑对决', description: '钻石联赛 — 巴黎站历来是短跑巨星展现速度的舞台。100m和200m项目的每一轮都充满悬念——起跑反应、途中加速、后程冲刺，每个环节都可能决定胜负。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '钻石联赛 — 巴黎站对中国短跑运动员来说既是挑战也是学习的宝贵机会。中国选手（如谢震业等）曾多次参加此类国际赛事，在与世界级选手的同场竞技中提升自己。',
    whatAtStake: '获胜者将获得世界排名积分，提升国际田联排名。钻石联赛分站冠军获8个钻石积分计入年度总排名。对各国运动员而言，国际大赛的成绩直接影响奥运资格和世界排名。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '钻石联赛 — 巴黎站（2026-06-25）在巴黎法国举办。这是钻石联赛级别的赛事，全球田径爱好者的目光将汇聚于此。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。',
    bestVideos: [
      { title: 'B站搜索「钻石联赛 — 巴黎站」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E9%92%BB%E7%9F%B3%E8%81%94%E8%B5%9B%20%E2%80%94%20%E5%B7%B4%E9%BB%8E%E7%AB%99%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「巴黎 田径」', url: 'https://search.bilibili.com/all?keyword=%E5%B7%B4%E9%BB%8E%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'dl-monaco': {
    whyMatters: '钻石联赛 — 摩纳哥站是钻石联赛年度系列赛的重要一站。钻石联赛代表了田径商业赛事最高水平，世界排名前8的选手受邀参赛，每一场都是"神仙打架"。',
    history: '钻石联赛 — 摩纳哥站在摩纳哥摩纳哥举办。该赛事吸引了全球最顶尖的短跑选手参赛，历届比赛中多次诞生惊人成绩。短跑项目历来是赛事焦点。比赛在摩纳哥举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '⭐ 世界级短跑对决', description: '钻石联赛 — 摩纳哥站历来是短跑巨星展现速度的舞台。100m和200m项目的每一轮都充满悬念——起跑反应、途中加速、后程冲刺，每个环节都可能决定胜负。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '钻石联赛 — 摩纳哥站对中国短跑运动员来说既是挑战也是学习的宝贵机会。中国选手（如谢震业等）曾多次参加此类国际赛事，在与世界级选手的同场竞技中提升自己。',
    whatAtStake: '获胜者将获得世界排名积分，提升国际田联排名。钻石联赛分站冠军获8个钻石积分计入年度总排名。对各国运动员而言，国际大赛的成绩直接影响奥运资格和世界排名。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '钻石联赛 — 摩纳哥站（2026-07-10）在摩纳哥摩纳哥举办。这是钻石联赛级别的赛事，全球田径爱好者的目光将汇聚于此。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。',
    bestVideos: [
      { title: 'B站搜索「钻石联赛 — 摩纳哥站」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E9%92%BB%E7%9F%B3%E8%81%94%E8%B5%9B%20%E2%80%94%20%E6%91%A9%E7%BA%B3%E5%93%A5%E7%AB%99%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「摩纳哥 田径」', url: 'https://search.bilibili.com/all?keyword=%E6%91%A9%E7%BA%B3%E5%93%A5%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'dl-london': {
    whyMatters: '钻石联赛 — 伦敦站是钻石联赛年度系列赛的重要一站。钻石联赛代表了田径商业赛事最高水平，世界排名前8的选手受邀参赛，每一场都是"神仙打架"。',
    history: '钻石联赛 — 伦敦站在英国伦敦举办。该赛事吸引了全球最顶尖的短跑选手参赛，历届比赛中多次诞生惊人成绩。短跑项目历来是赛事焦点。比赛在伦敦举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '⭐ 世界级短跑对决', description: '钻石联赛 — 伦敦站历来是短跑巨星展现速度的舞台。100m和200m项目的每一轮都充满悬念——起跑反应、途中加速、后程冲刺，每个环节都可能决定胜负。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '钻石联赛 — 伦敦站对中国短跑运动员来说既是挑战也是学习的宝贵机会。中国选手（如谢震业等）曾多次参加此类国际赛事，在与世界级选手的同场竞技中提升自己。',
    whatAtStake: '获胜者将获得世界排名积分，提升国际田联排名。钻石联赛分站冠军获8个钻石积分计入年度总排名。对各国运动员而言，国际大赛的成绩直接影响奥运资格和世界排名。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '钻石联赛 — 伦敦站（2026-07-18）在伦敦英国举办。这是钻石联赛级别的赛事，全球田径爱好者的目光将汇聚于此。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。',
    bestVideos: [
      { title: 'B站搜索「钻石联赛 — 伦敦站」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E9%92%BB%E7%9F%B3%E8%81%94%E8%B5%9B%20%E2%80%94%20%E4%BC%A6%E6%95%A6%E7%AB%99%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「伦敦 田径」', url: 'https://search.bilibili.com/all?keyword=%E4%BC%A6%E6%95%A6%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'dl-lausanne': {
    whyMatters: '钻石联赛 — 洛桑站是钻石联赛年度系列赛的重要一站。钻石联赛代表了田径商业赛事最高水平，世界排名前8的选手受邀参赛，每一场都是"神仙打架"。',
    history: '钻石联赛 — 洛桑站在瑞士洛桑举办。该赛事吸引了全球最顶尖的短跑选手参赛，历届比赛中多次诞生惊人成绩。短跑项目历来是赛事焦点。比赛在洛桑举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '⭐ 世界级短跑对决', description: '钻石联赛 — 洛桑站历来是短跑巨星展现速度的舞台。100m和200m项目的每一轮都充满悬念——起跑反应、途中加速、后程冲刺，每个环节都可能决定胜负。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '钻石联赛 — 洛桑站对中国短跑运动员来说既是挑战也是学习的宝贵机会。中国选手（如谢震业等）曾多次参加此类国际赛事，在与世界级选手的同场竞技中提升自己。',
    whatAtStake: '获胜者将获得世界排名积分，提升国际田联排名。钻石联赛分站冠军获8个钻石积分计入年度总排名。对各国运动员而言，国际大赛的成绩直接影响奥运资格和世界排名。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '钻石联赛 — 洛桑站（2026-08-13）在洛桑瑞士举办。这是钻石联赛级别的赛事，全球田径爱好者的目光将汇聚于此。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。',
    bestVideos: [
      { title: 'B站搜索「钻石联赛 — 洛桑站」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E9%92%BB%E7%9F%B3%E8%81%94%E8%B5%9B%20%E2%80%94%20%E6%B4%9B%E6%A1%91%E7%AB%99%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「洛桑 田径」', url: 'https://search.bilibili.com/all?keyword=%E6%B4%9B%E6%A1%91%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'dl-brussels': {
    whyMatters: '钻石联赛 — 布鲁塞尔站（总决赛）是钻石联赛年度系列赛的重要一站。钻石联赛代表了田径商业赛事最高水平，世界排名前8的选手受邀参赛，每一场都是"神仙打架"。',
    history: '钻石联赛 — 布鲁塞尔站（总决赛）在比利时布鲁塞尔举办。该赛事吸引了全球最顶尖的短跑选手参赛，历届比赛中多次诞生惊人成绩。比赛在布鲁塞尔举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: '钻石联赛 — 布鲁塞尔站（总决赛）涵盖全部钻石联赛项目决赛等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: '钻石联赛 — 布鲁塞尔站（总决赛）对中国短跑运动员来说既是挑战也是学习的宝贵机会。中国选手（如谢震业等）曾多次参加此类国际赛事，在与世界级选手的同场竞技中提升自己。',
    whatAtStake: '获胜者将获得世界排名积分，提升国际田联排名。钻石联赛分站冠军获8个钻石积分计入年度总排名。对各国运动员而言，国际大赛的成绩直接影响奥运资格和世界排名。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '钻石联赛 — 布鲁塞尔站（总决赛）（2026-09-04 ~ 09-05）在布鲁塞尔比利时举办。这是钻石联赛级别的赛事，全球田径爱好者的目光将汇聚于此。',
    bestVideos: [
      { title: 'B站搜索「钻石联赛 — 布鲁塞尔站（总决赛）」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E9%92%BB%E7%9F%B3%E8%81%94%E8%B5%9B%20%E2%80%94%20%E5%B8%83%E9%B2%81%E5%A1%9E%E5%B0%94%E7%AB%99%EF%BC%88%E6%80%BB%E5%86%B3%E8%B5%9B%EF%BC%89%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「布鲁塞尔 田径」', url: 'https://search.bilibili.com/all?keyword=%E5%B8%83%E9%B2%81%E5%A1%9E%E5%B0%94%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'euro-champs': {
    whyMatters: '欧洲田径锦标赛是该洲最高级别田径赛事。对于中国及亚洲选手，这是检验自身国际竞争力的重要标尺。',
    history: '欧洲田径锦标赛在英国伯明翰举办。该赛事为中国短跑运动员提供了重要的竞技平台。比赛在伯明翰举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: '欧洲田径锦标赛涵盖全部田径项目等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: '欧洲田径锦标赛中国选手在此类赛事中的表现体现了中国短跑的国际化进程。通过参加国际比赛，中国运动员积累了宝贵的大赛经验。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '欧洲田径锦标赛（2026-08-06 ~ 08-10）在伯明翰英国举办。这是洲际级别的重要赛事。',
    bestVideos: [
      { title: 'B站搜索「欧洲田径锦标赛」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E6%AC%A7%E6%B4%B2%E7%94%B0%E5%BE%84%E9%94%A6%E6%A0%87%E8%B5%9B%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「伯明翰 田径」', url: 'https://search.bilibili.com/all?keyword=%E4%BC%AF%E6%98%8E%E7%BF%B0%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'asian-champs': {
    whyMatters: '亚洲田径锦标赛是该洲最高级别田径赛事。对于中国及亚洲选手，这是检验自身国际竞争力的重要标尺。',
    history: '亚洲田径锦标赛在待定待定举办。该赛事为中国短跑运动员提供了重要的竞技平台。比赛在待定举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: '亚洲田径锦标赛涵盖全部田径项目等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: '亚洲田径锦标赛中国选手在此类赛事中的表现体现了中国短跑的国际化进程。通过参加国际比赛，中国运动员积累了宝贵的大赛经验。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '亚洲田径锦标赛（2026-07-15 ~ 07-19）在待定待定举办。这是洲际级别的重要赛事。',
    bestVideos: [
      { title: 'B站搜索「亚洲田径锦标赛」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E4%BA%9A%E6%B4%B2%E7%94%B0%E5%BE%84%E9%94%A6%E6%A0%87%E8%B5%9B%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「待定 田径」', url: 'https://search.bilibili.com/all?keyword=%E5%BE%85%E5%AE%9A%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'ncaa-champs': {
    whyMatters: 'NCAA田径锦标赛是该洲最高级别田径赛事。对于中国及亚洲选手，这是检验自身国际竞争力的重要标尺。',
    history: 'NCAA田径锦标赛在美国尤金举办。该赛事为中国短跑运动员提供了重要的竞技平台。比赛在尤金举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: 'NCAA田径锦标赛涵盖全部田径项目等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: 'NCAA田径锦标赛中国选手在此类赛事中的表现体现了中国短跑的国际化进程。通过参加国际比赛，中国运动员积累了宝贵的大赛经验。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: 'NCAA田径锦标赛（2026-06-10 ~ 06-13）在尤金美国举办。这是洲际级别的重要赛事。',
    bestVideos: [
      { title: 'B站搜索「NCAA田径锦标赛」比赛视频', url: 'https://search.bilibili.com/all?keyword=NCAA%E7%94%B0%E5%BE%84%E9%94%A6%E6%A0%87%E8%B5%9B%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「尤金 田径」', url: 'https://search.bilibili.com/all?keyword=%E5%B0%A4%E9%87%91%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'china-national-champs': {
    whyMatters: '全国田径锦标赛是中国田径最高水平赛事之一。各省队派出最强阵容，国家队选手在此争夺全国冠军头衔。是中国短跑梯队深度和后备力量的集中展示。',
    history: '全国田径锦标赛在中国田径版图中占据重要地位。该赛事为中国短跑运动员提供了重要的竞技平台。比赛在待定举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: '全国田径锦标赛涵盖全部田径项目等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: '全国田径锦标赛是中国短跑选手的主场赛事。中国田径健儿在此为国争光，展现中国田径的整体实力。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '全国田径锦标赛（2026-06-15 ~ 06-18）在待定中国举办。这是全国级别的重要赛事。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「全国田径锦标赛」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E5%85%A8%E5%9B%BD%E7%94%B0%E5%BE%84%E9%94%A6%E6%A0%87%E8%B5%9B%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「待定 田径」', url: 'https://search.bilibili.com/all?keyword=%E5%BE%85%E5%AE%9A%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'china-grand-prix-1': {
    whyMatters: '全国田径大奖赛（第一站）是中国田径最高水平赛事之一。各省队派出最强阵容，国家队选手在此争夺全国冠军头衔。是中国短跑梯队深度和后备力量的集中展示。',
    history: '全国田径大奖赛（第一站）在中国田径版图中占据重要地位。该赛事为中国短跑运动员提供了重要的竞技平台。比赛在肇庆举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: '全国田径大奖赛（第一站）涵盖全部田径项目等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: '全国田径大奖赛（第一站）是中国短跑选手的主场赛事。中国田径健儿在此为国争光，展现中国田径的整体实力。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '全国田径大奖赛（第一站）（2026-04-10 ~ 04-12）在肇庆中国举办。这是全国级别的重要赛事。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「全国田径大奖赛（第一站）」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E5%85%A8%E5%9B%BD%E7%94%B0%E5%BE%84%E5%A4%A7%E5%A5%96%E8%B5%9B%EF%BC%88%E7%AC%AC%E4%B8%80%E7%AB%99%EF%BC%89%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「肇庆 田径」', url: 'https://search.bilibili.com/all?keyword=%E8%82%87%E5%BA%86%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'china-grand-prix-2': {
    whyMatters: '全国田径大奖赛（第二站）是中国田径最高水平赛事之一。各省队派出最强阵容，国家队选手在此争夺全国冠军头衔。是中国短跑梯队深度和后备力量的集中展示。',
    history: '全国田径大奖赛（第二站）在中国田径版图中占据重要地位。该赛事为中国短跑运动员提供了重要的竞技平台。比赛在济南举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: '全国田径大奖赛（第二站）涵盖全部田径项目等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: '全国田径大奖赛（第二站）是中国短跑选手的主场赛事。中国田径健儿在此为国争光，展现中国田径的整体实力。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '全国田径大奖赛（第二站）（2026-05-15 ~ 05-17）在济南中国举办。这是全国级别的重要赛事。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「全国田径大奖赛（第二站）」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E5%85%A8%E5%9B%BD%E7%94%B0%E5%BE%84%E5%A4%A7%E5%A5%96%E8%B5%9B%EF%BC%88%E7%AC%AC%E4%BA%8C%E7%AB%99%EF%BC%89%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「济南 田径」', url: 'https://search.bilibili.com/all?keyword=%E6%B5%8E%E5%8D%97%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'china-grand-prix-3': {
    whyMatters: '全国田径大奖赛（第三站）是中国田径最高水平赛事之一。各省队派出最强阵容，国家队选手在此争夺全国冠军头衔。是中国短跑梯队深度和后备力量的集中展示。',
    history: '全国田径大奖赛（第三站）在中国田径版图中占据重要地位。该赛事为中国短跑运动员提供了重要的竞技平台。比赛在重庆举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: '全国田径大奖赛（第三站）涵盖全部田径项目等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: '全国田径大奖赛（第三站）是中国短跑选手的主场赛事。中国田径健儿在此为国争光，展现中国田径的整体实力。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '全国田径大奖赛（第三站）（2026-06-05 ~ 06-07）在重庆中国举办。这是全国级别的重要赛事。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「全国田径大奖赛（第三站）」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E5%85%A8%E5%9B%BD%E7%94%B0%E5%BE%84%E5%A4%A7%E5%A5%96%E8%B5%9B%EF%BC%88%E7%AC%AC%E4%B8%89%E7%AB%99%EF%BC%89%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「重庆 田径」', url: 'https://search.bilibili.com/all?keyword=%E9%87%8D%E5%BA%86%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'china-grand-prix-4': {
    whyMatters: '全国田径大奖赛（第四站/总决赛）是中国田径最高水平赛事之一。各省队派出最强阵容，国家队选手在此争夺全国冠军头衔。是中国短跑梯队深度和后备力量的集中展示。',
    history: '全国田径大奖赛（第四站/总决赛）在中国田径版图中占据重要地位。该赛事为中国短跑运动员提供了重要的竞技平台。比赛在衢州举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: '全国田径大奖赛（第四站/总决赛）涵盖全部田径项目等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: '全国田径大奖赛（第四站/总决赛）是中国短跑选手的主场赛事。中国田径健儿在此为国争光，展现中国田径的整体实力。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '全国田径大奖赛（第四站/总决赛）（2026-07-01 ~ 07-03）在衢州中国举办。这是全国级别的重要赛事。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「全国田径大奖赛（第四站/总决赛）」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E5%85%A8%E5%9B%BD%E7%94%B0%E5%BE%84%E5%A4%A7%E5%A5%96%E8%B5%9B%EF%BC%88%E7%AC%AC%E5%9B%9B%E7%AB%99%2F%E6%80%BB%E5%86%B3%E8%B5%9B%EF%BC%89%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「衢州 田径」', url: 'https://search.bilibili.com/all?keyword=%E8%A1%A2%E5%B7%9E%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'china-youth': {
    whyMatters: '全国青年田径锦标赛是中国田径最高水平赛事之一。各省队派出最强阵容，国家队选手在此争夺全国冠军头衔。是中国短跑梯队深度和后备力量的集中展示。',
    history: '全国青年田径锦标赛在中国田径版图中占据重要地位。该赛事为中国短跑运动员提供了重要的竞技平台。比赛在待定举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: '全国青年田径锦标赛涵盖全部田径项目等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: '全国青年田径锦标赛是中国短跑选手的主场赛事。中国田径健儿在此为国争光，展现中国田径的整体实力。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '全国青年田径锦标赛（2026-05-20 ~ 05-23）在待定中国举办。这是全国级别的重要赛事。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「全国青年田径锦标赛」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E5%85%A8%E5%9B%BD%E9%9D%92%E5%B9%B4%E7%94%B0%E5%BE%84%E9%94%A6%E6%A0%87%E8%B5%9B%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「待定 田径」', url: 'https://search.bilibili.com/all?keyword=%E5%BE%85%E5%AE%9A%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'china-indoor': {
    whyMatters: '全国室内田径锦标赛是中国田径最高水平赛事之一。各省队派出最强阵容，国家队选手在此争夺全国冠军头衔。是中国短跑梯队深度和后备力量的集中展示。',
    history: '全国室内田径锦标赛在中国田径版图中占据重要地位。该赛事为中国短跑运动员提供了重要的竞技平台。短跑项目历来是赛事焦点。比赛在南京举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🇨🇳 国内短跑争锋', description: '中国短跑运动员在全国室内田径锦标赛上争夺国内霸主地位。100m和200m是最受关注的项目，各省短跑好手汇聚一堂，年轻小将挑战成名老将的戏码屡屡上演。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '全国室内田径锦标赛是中国短跑选手的主场赛事。中国短跑军团（谢震业、陈冠锋、邓信锐等）以及各省队的短跑好手将在此展现速度。对于年轻选手，这是向国家队教练组证明自己的绝佳机会。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '全国室内田径锦标赛（2026-03-01 ~ 03-03）在南京中国举办。这是全国级别的重要赛事。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「全国室内田径锦标赛」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E5%85%A8%E5%9B%BD%E5%AE%A4%E5%86%85%E7%94%B0%E5%BE%84%E9%94%A6%E6%A0%87%E8%B5%9B%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「南京 田径」', url: 'https://search.bilibili.com/all?keyword=%E5%8D%97%E4%BA%AC%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'street-xiamen': {
    whyMatters: '厦门田径街头赛是把田径带到城市中心的街头赛事。观众与运动员零距离接触，让田径走进大众生活。',
    history: '厦门田径街头赛在中国田径版图中占据重要地位。该赛事为中国短跑运动员提供了重要的竞技平台。比赛在厦门举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: '厦门田径街头赛涵盖跳高/撑杆跳/跳远/短跑等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: '厦门田径街头赛是中国短跑选手的主场赛事。中国田径健儿在此为国争光，展现中国田径的整体实力。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '厦门田径街头赛（2026-04-20）在厦门中国举办。这是区域/街头赛级别的重要赛事。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「厦门田径街头赛」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E5%8E%A6%E9%97%A8%E7%94%B0%E5%BE%84%E8%A1%97%E5%A4%B4%E8%B5%9B%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「厦门 田径」', url: 'https://search.bilibili.com/all?keyword=%E5%8E%A6%E9%97%A8%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'street-beijing': {
    whyMatters: '北京田径街头挑战赛是把田径带到城市中心的街头赛事。观众与运动员零距离接触，让田径走进大众生活。',
    history: '北京田径街头挑战赛在中国田径版图中占据重要地位。该赛事为中国短跑运动员提供了重要的竞技平台。短跑项目历来是赛事焦点。比赛在北京举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🇨🇳 国内短跑争锋', description: '中国短跑运动员在北京田径街头挑战赛上争夺国内霸主地位。100m和200m是最受关注的项目，各省短跑好手汇聚一堂，年轻小将挑战成名老将的戏码屡屡上演。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '北京田径街头挑战赛是中国短跑选手的主场赛事。中国短跑军团（谢震业、陈冠锋、邓信锐等）以及各省队的短跑好手将在此展现速度。对于年轻选手，这是向国家队教练组证明自己的绝佳机会。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '北京田径街头挑战赛（2026-05-15）在北京中国举办。这是区域/街头赛级别的重要赛事。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「北京田径街头挑战赛」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E5%8C%97%E4%BA%AC%E7%94%B0%E5%BE%84%E8%A1%97%E5%A4%B4%E6%8C%91%E6%88%98%E8%B5%9B%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「北京 田径」', url: 'https://search.bilibili.com/all?keyword=%E5%8C%97%E4%BA%AC%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'street-shanghai': {
    whyMatters: '上海街头田径赛是把田径带到城市中心的街头赛事。观众与运动员零距离接触，让田径走进大众生活。',
    history: '上海街头田径赛在中国田径版图中占据重要地位。该赛事为中国短跑运动员提供了重要的竞技平台。比赛在上海举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: '上海街头田径赛涵盖跳远/撑杆跳/短跑等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: '上海街头田径赛是中国短跑选手的主场赛事。中国田径健儿在此为国争光，展现中国田径的整体实力。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '上海街头田径赛（2026-06-01）在上海中国举办。这是区域/街头赛级别的重要赛事。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「上海街头田径赛」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E4%B8%8A%E6%B5%B7%E8%A1%97%E5%A4%B4%E7%94%B0%E5%BE%84%E8%B5%9B%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「上海 田径」', url: 'https://search.bilibili.com/all?keyword=%E4%B8%8A%E6%B5%B7%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'street-shenzhen': {
    whyMatters: '深圳街头田径赛是把田径带到城市中心的街头赛事。观众与运动员零距离接触，让田径走进大众生活。',
    history: '深圳街头田径赛在中国田径版图中占据重要地位。该赛事为中国短跑运动员提供了重要的竞技平台。比赛在深圳举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: '深圳街头田径赛涵盖撑杆跳/跳高/短跑等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: '深圳街头田径赛是中国短跑选手的主场赛事。中国田径健儿在此为国争光，展现中国田径的整体实力。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '深圳街头田径赛（2026-07-10）在深圳中国举办。这是区域/街头赛级别的重要赛事。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「深圳街头田径赛」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E6%B7%B1%E5%9C%B3%E8%A1%97%E5%A4%B4%E7%94%B0%E5%BE%84%E8%B5%9B%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「深圳 田径」', url: 'https://search.bilibili.com/all?keyword=%E6%B7%B1%E5%9C%B3%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'conti-tour-gold-1': {
    whyMatters: '世界田联洲际巡回赛·金标 — 博茨瓦纳站是该洲最高级别田径赛事。对于中国及亚洲选手，这是检验自身国际竞争力的重要标尺。',
    history: '世界田联洲际巡回赛·金标 — 博茨瓦纳站在博茨瓦纳哈博罗内举办。该赛事为中国短跑运动员提供了重要的竞技平台。短跑项目历来是赛事焦点。比赛在哈博罗内举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🇨🇳 国内短跑争锋', description: '中国短跑运动员在世界田联洲际巡回赛·金标 — 博茨瓦纳站上争夺国内霸主地位。100m和200m是最受关注的项目，各省短跑好手汇聚一堂，年轻小将挑战成名老将的戏码屡屡上演。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '世界田联洲际巡回赛·金标 — 博茨瓦纳站中国选手在此类赛事中的表现体现了中国短跑的国际化进程。通过参加国际比赛，中国运动员积累了宝贵的大赛经验。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '世界田联洲际巡回赛·金标 — 博茨瓦纳站（2026-04-26）在哈博罗内博茨瓦纳举办。这是洲际级别的重要赛事。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。',
    bestVideos: [
      { title: 'B站搜索「世界田联洲际巡回赛·金标 — 博茨瓦纳站」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E4%B8%96%E7%95%8C%E7%94%B0%E8%81%94%E6%B4%B2%E9%99%85%E5%B7%A1%E5%9B%9E%E8%B5%9B%C2%B7%E9%87%91%E6%A0%87%20%E2%80%94%20%E5%8D%9A%E8%8C%A8%E7%93%A6%E7%BA%B3%E7%AB%99%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「哈博罗内 田径」', url: 'https://search.bilibili.com/all?keyword=%E5%93%88%E5%8D%9A%E7%BD%97%E5%86%85%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'conti-tour-gold-2': {
    whyMatters: '世界田联洲际巡回赛·金标 — 东京站（精工黄金大奖赛）是该洲最高级别田径赛事。对于中国及亚洲选手，这是检验自身国际竞争力的重要标尺。',
    history: '世界田联洲际巡回赛·金标 — 东京站（精工黄金大奖赛）在日本东京举办。该赛事为中国短跑运动员提供了重要的竞技平台。短跑项目历来是赛事焦点。比赛在东京举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🇨🇳 国内短跑争锋', description: '中国短跑运动员在世界田联洲际巡回赛·金标 — 东京站（精工黄金大奖赛）上争夺国内霸主地位。100m和200m是最受关注的项目，各省短跑好手汇聚一堂，年轻小将挑战成名老将的戏码屡屡上演。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '世界田联洲际巡回赛·金标 — 东京站（精工黄金大奖赛）中国选手在此类赛事中的表现体现了中国短跑的国际化进程。通过参加国际比赛，中国运动员积累了宝贵的大赛经验。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '世界田联洲际巡回赛·金标 — 东京站（精工黄金大奖赛）（2026-05-10）在东京日本举办。这是洲际级别的重要赛事。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。',
    bestVideos: [
      { title: 'B站搜索「世界田联洲际巡回赛·金标 — 东京站（精工黄金大奖赛）」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E4%B8%96%E7%95%8C%E7%94%B0%E8%81%94%E6%B4%B2%E9%99%85%E5%B7%A1%E5%9B%9E%E8%B5%9B%C2%B7%E9%87%91%E6%A0%87%20%E2%80%94%20%E4%B8%9C%E4%BA%AC%E7%AB%99%EF%BC%88%E7%B2%BE%E5%B7%A5%E9%BB%84%E9%87%91%E5%A4%A7%E5%A5%96%E8%B5%9B%EF%BC%89%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「东京 田径」', url: 'https://search.bilibili.com/all?keyword=%E4%B8%9C%E4%BA%AC%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'conti-tour-gold-3': {
    whyMatters: '世界田联洲际巡回赛·金标 — 俄斯特拉发站（金标鞋赛）是该洲最高级别田径赛事。对于中国及亚洲选手，这是检验自身国际竞争力的重要标尺。',
    history: '世界田联洲际巡回赛·金标 — 俄斯特拉发站（金标鞋赛）在捷克俄斯特拉发举办。该赛事为中国短跑运动员提供了重要的竞技平台。短跑项目历来是赛事焦点。比赛在俄斯特拉发举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🇨🇳 国内短跑争锋', description: '中国短跑运动员在世界田联洲际巡回赛·金标 — 俄斯特拉发站（金标鞋赛）上争夺国内霸主地位。100m和200m是最受关注的项目，各省短跑好手汇聚一堂，年轻小将挑战成名老将的戏码屡屡上演。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '世界田联洲际巡回赛·金标 — 俄斯特拉发站（金标鞋赛）中国选手在此类赛事中的表现体现了中国短跑的国际化进程。通过参加国际比赛，中国运动员积累了宝贵的大赛经验。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '世界田联洲际巡回赛·金标 — 俄斯特拉发站（金标鞋赛）（2026-05-27）在俄斯特拉发捷克举办。这是洲际级别的重要赛事。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。',
    bestVideos: [
      { title: 'B站搜索「世界田联洲际巡回赛·金标 — 俄斯特拉发站（金标鞋赛）」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E4%B8%96%E7%95%8C%E7%94%B0%E8%81%94%E6%B4%B2%E9%99%85%E5%B7%A1%E5%9B%9E%E8%B5%9B%C2%B7%E9%87%91%E6%A0%87%20%E2%80%94%20%E4%BF%84%E6%96%AF%E7%89%B9%E6%8B%89%E5%8F%91%E7%AB%99%EF%BC%88%E9%87%91%E6%A0%87%E9%9E%8B%E8%B5%9B%EF%BC%89%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「俄斯特拉发 田径」', url: 'https://search.bilibili.com/all?keyword=%E4%BF%84%E6%96%AF%E7%89%B9%E6%8B%89%E5%8F%91%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'conti-tour-gold-4': {
    whyMatters: '世界田联洲际巡回赛·金标 — 亨厄洛站是该洲最高级别田径赛事。对于中国及亚洲选手，这是检验自身国际竞争力的重要标尺。',
    history: '世界田联洲际巡回赛·金标 — 亨厄洛站在荷兰亨厄洛举办。该赛事为中国短跑运动员提供了重要的竞技平台。短跑项目历来是赛事焦点。比赛在亨厄洛举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🇨🇳 国内短跑争锋', description: '中国短跑运动员在世界田联洲际巡回赛·金标 — 亨厄洛站上争夺国内霸主地位。100m和200m是最受关注的项目，各省短跑好手汇聚一堂，年轻小将挑战成名老将的戏码屡屡上演。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '世界田联洲际巡回赛·金标 — 亨厄洛站中国选手在此类赛事中的表现体现了中国短跑的国际化进程。通过参加国际比赛，中国运动员积累了宝贵的大赛经验。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '世界田联洲际巡回赛·金标 — 亨厄洛站（2026-06-07）在亨厄洛荷兰举办。这是洲际级别的重要赛事。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。',
    bestVideos: [
      { title: 'B站搜索「世界田联洲际巡回赛·金标 — 亨厄洛站」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E4%B8%96%E7%95%8C%E7%94%B0%E8%81%94%E6%B4%B2%E9%99%85%E5%B7%A1%E5%9B%9E%E8%B5%9B%C2%B7%E9%87%91%E6%A0%87%20%E2%80%94%20%E4%BA%A8%E5%8E%84%E6%B4%9B%E7%AB%99%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「亨厄洛 田径」', url: 'https://search.bilibili.com/all?keyword=%E4%BA%A8%E5%8E%84%E6%B4%9B%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'conti-tour-gold-5': {
    whyMatters: '世界田联洲际巡回赛·金标 — 纽约大奖赛是该洲最高级别田径赛事。对于中国及亚洲选手，这是检验自身国际竞争力的重要标尺。',
    history: '世界田联洲际巡回赛·金标 — 纽约大奖赛在美国纽约举办。该赛事为中国短跑运动员提供了重要的竞技平台。短跑项目历来是赛事焦点。比赛在纽约举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🇨🇳 国内短跑争锋', description: '中国短跑运动员在世界田联洲际巡回赛·金标 — 纽约大奖赛上争夺国内霸主地位。100m和200m是最受关注的项目，各省短跑好手汇聚一堂，年轻小将挑战成名老将的戏码屡屡上演。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '世界田联洲际巡回赛·金标 — 纽约大奖赛中国选手在此类赛事中的表现体现了中国短跑的国际化进程。通过参加国际比赛，中国运动员积累了宝贵的大赛经验。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '世界田联洲际巡回赛·金标 — 纽约大奖赛（2026-06-14）在纽约美国举办。这是洲际级别的重要赛事。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。',
    bestVideos: [
      { title: 'B站搜索「世界田联洲际巡回赛·金标 — 纽约大奖赛」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E4%B8%96%E7%95%8C%E7%94%B0%E8%81%94%E6%B4%B2%E9%99%85%E5%B7%A1%E5%9B%9E%E8%B5%9B%C2%B7%E9%87%91%E6%A0%87%20%E2%80%94%20%E7%BA%BD%E7%BA%A6%E5%A4%A7%E5%A5%96%E8%B5%9B%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「纽约 田径」', url: 'https://search.bilibili.com/all?keyword=%E7%BA%BD%E7%BA%A6%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'conti-tour-gold-6': {
    whyMatters: '世界田联洲际巡回赛·金标 — 萨格勒布站是该洲最高级别田径赛事。对于中国及亚洲选手，这是检验自身国际竞争力的重要标尺。',
    history: '世界田联洲际巡回赛·金标 — 萨格勒布站在克罗地亚萨格勒布举办。该赛事为中国短跑运动员提供了重要的竞技平台。短跑项目历来是赛事焦点。比赛在萨格勒布举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🇨🇳 国内短跑争锋', description: '中国短跑运动员在世界田联洲际巡回赛·金标 — 萨格勒布站上争夺国内霸主地位。100m和200m是最受关注的项目，各省短跑好手汇聚一堂，年轻小将挑战成名老将的戏码屡屡上演。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '世界田联洲际巡回赛·金标 — 萨格勒布站中国选手在此类赛事中的表现体现了中国短跑的国际化进程。通过参加国际比赛，中国运动员积累了宝贵的大赛经验。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '世界田联洲际巡回赛·金标 — 萨格勒布站（2026-09-08）在萨格勒布克罗地亚举办。这是洲际级别的重要赛事。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。',
    bestVideos: [
      { title: 'B站搜索「世界田联洲际巡回赛·金标 — 萨格勒布站」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E4%B8%96%E7%95%8C%E7%94%B0%E8%81%94%E6%B4%B2%E9%99%85%E5%B7%A1%E5%9B%9E%E8%B5%9B%C2%B7%E9%87%91%E6%A0%87%20%E2%80%94%20%E8%90%A8%E6%A0%BC%E5%8B%92%E5%B8%83%E7%AB%99%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「萨格勒布 田径」', url: 'https://search.bilibili.com/all?keyword=%E8%90%A8%E6%A0%BC%E5%8B%92%E5%B8%83%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'china-indoor-series-1': {
    whyMatters: '全国室内田径邀请赛（第一站）是中国田径最高水平赛事之一。各省队派出最强阵容，国家队选手在此争夺全国冠军头衔。是中国短跑梯队深度和后备力量的集中展示。',
    history: '全国室内田径邀请赛（第一站）在中国田径版图中占据重要地位。该赛事为中国短跑运动员提供了重要的竞技平台。短跑项目历来是赛事焦点。比赛在济南举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🇨🇳 国内短跑争锋', description: '中国短跑运动员在全国室内田径邀请赛（第一站）上争夺国内霸主地位。100m和200m是最受关注的项目，各省短跑好手汇聚一堂，年轻小将挑战成名老将的戏码屡屡上演。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '全国室内田径邀请赛（第一站）是中国短跑选手的主场赛事。中国短跑军团（谢震业、陈冠锋、邓信锐等）以及各省队的短跑好手将在此展现速度。对于年轻选手，这是向国家队教练组证明自己的绝佳机会。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '全国室内田径邀请赛（第一站）（2026-02-10 ~ 02-11）在济南中国举办。这是全国级别的重要赛事。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「全国室内田径邀请赛（第一站）」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E5%85%A8%E5%9B%BD%E5%AE%A4%E5%86%85%E7%94%B0%E5%BE%84%E9%82%80%E8%AF%B7%E8%B5%9B%EF%BC%88%E7%AC%AC%E4%B8%80%E7%AB%99%EF%BC%89%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「济南 田径」', url: 'https://search.bilibili.com/all?keyword=%E6%B5%8E%E5%8D%97%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'china-indoor-series-2': {
    whyMatters: '全国室内田径邀请赛（第二站）是中国田径最高水平赛事之一。各省队派出最强阵容，国家队选手在此争夺全国冠军头衔。是中国短跑梯队深度和后备力量的集中展示。',
    history: '全国室内田径邀请赛（第二站）在中国田径版图中占据重要地位。该赛事为中国短跑运动员提供了重要的竞技平台。短跑项目历来是赛事焦点。比赛在西安举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🇨🇳 国内短跑争锋', description: '中国短跑运动员在全国室内田径邀请赛（第二站）上争夺国内霸主地位。100m和200m是最受关注的项目，各省短跑好手汇聚一堂，年轻小将挑战成名老将的戏码屡屡上演。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '全国室内田径邀请赛（第二站）是中国短跑选手的主场赛事。中国短跑军团（谢震业、陈冠锋、邓信锐等）以及各省队的短跑好手将在此展现速度。对于年轻选手，这是向国家队教练组证明自己的绝佳机会。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '全国室内田径邀请赛（第二站）（2026-02-18 ~ 02-19）在西安中国举办。这是全国级别的重要赛事。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「全国室内田径邀请赛（第二站）」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E5%85%A8%E5%9B%BD%E5%AE%A4%E5%86%85%E7%94%B0%E5%BE%84%E9%82%80%E8%AF%B7%E8%B5%9B%EF%BC%88%E7%AC%AC%E4%BA%8C%E7%AB%99%EF%BC%89%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「西安 田径」', url: 'https://search.bilibili.com/all?keyword=%E8%A5%BF%E5%AE%89%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'china-indoor-series-3': {
    whyMatters: '全国室内田径邀请赛（第三站）是中国田径最高水平赛事之一。各省队派出最强阵容，国家队选手在此争夺全国冠军头衔。是中国短跑梯队深度和后备力量的集中展示。',
    history: '全国室内田径邀请赛（第三站）在中国田径版图中占据重要地位。该赛事为中国短跑运动员提供了重要的竞技平台。短跑项目历来是赛事焦点。比赛在成都举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🇨🇳 国内短跑争锋', description: '中国短跑运动员在全国室内田径邀请赛（第三站）上争夺国内霸主地位。100m和200m是最受关注的项目，各省短跑好手汇聚一堂，年轻小将挑战成名老将的戏码屡屡上演。' },
      { title: '🔥 新星崛起', description: '每一届比赛都可能诞生新的短跑明星——那些横空出世的年轻人用惊人的速度宣告自己的到来。关注预赛和半决赛中出现的陌生名字，他们可能就是下一个苏炳添。' }
    ],
    chineseConnection: '全国室内田径邀请赛（第三站）是中国短跑选手的主场赛事。中国短跑军团（谢震业、陈冠锋、邓信锐等）以及各省队的短跑好手将在此展现速度。对于年轻选手，这是向国家队教练组证明自己的绝佳机会。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '男子100m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' },
      { event: '男子200m赛会纪录', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '全国室内田径邀请赛（第三站）（2026-02-25 ~ 02-26）在成都中国举办。这是全国级别的重要赛事。短跑项目将是最受关注的焦点——谁能在100m跑道上称王？哪位选手能打破赛会纪录？让我们拭目以待。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「全国室内田径邀请赛（第三站）」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E5%85%A8%E5%9B%BD%E5%AE%A4%E5%86%85%E7%94%B0%E5%BE%84%E9%82%80%E8%AF%B7%E8%B5%9B%EF%BC%88%E7%AC%AC%E4%B8%89%E7%AB%99%EF%BC%89%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「成都 田径」', url: 'https://search.bilibili.com/all?keyword=%E6%88%90%E9%83%BD%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'guangdong-provincial': {
    whyMatters: '广东省田径锦标赛是把田径带到城市中心的街头赛事。观众与运动员零距离接触，让田径走进大众生活。',
    history: '广东省田径锦标赛在中国田径版图中占据重要地位。该赛事为中国短跑运动员提供了重要的竞技平台。比赛在广州举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: '广东省田径锦标赛涵盖全部田径项目等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: '广东省田径锦标赛是中国短跑选手的主场赛事。中国田径健儿在此为国争光，展现中国田径的整体实力。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '广东省田径锦标赛（2026-07-20 ~ 07-23）在广州中国举办。这是区域/街头赛级别的重要赛事。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「广东省田径锦标赛」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E5%B9%BF%E4%B8%9C%E7%9C%81%E7%94%B0%E5%BE%84%E9%94%A6%E6%A0%87%E8%B5%9B%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「广州 田径」', url: 'https://search.bilibili.com/all?keyword=%E5%B9%BF%E5%B7%9E%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'beijing-provincial': {
    whyMatters: '北京市田径锦标赛是把田径带到城市中心的街头赛事。观众与运动员零距离接触，让田径走进大众生活。',
    history: '北京市田径锦标赛在中国田径版图中占据重要地位。该赛事为中国短跑运动员提供了重要的竞技平台。比赛在北京举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: '北京市田径锦标赛涵盖全部田径项目等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: '北京市田径锦标赛是中国短跑选手的主场赛事。中国田径健儿在此为国争光，展现中国田径的整体实力。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '北京市田径锦标赛（2026-07-25 ~ 07-27）在北京中国举办。这是区域/街头赛级别的重要赛事。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「北京市田径锦标赛」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E5%8C%97%E4%BA%AC%E5%B8%82%E7%94%B0%E5%BE%84%E9%94%A6%E6%A0%87%E8%B5%9B%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「北京 田径」', url: 'https://search.bilibili.com/all?keyword=%E5%8C%97%E4%BA%AC%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'shanghai-provincial': {
    whyMatters: '上海市田径锦标赛是把田径带到城市中心的街头赛事。观众与运动员零距离接触，让田径走进大众生活。',
    history: '上海市田径锦标赛在中国田径版图中占据重要地位。该赛事为中国短跑运动员提供了重要的竞技平台。比赛在上海举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: '上海市田径锦标赛涵盖全部田径项目等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: '上海市田径锦标赛是中国短跑选手的主场赛事。中国田径健儿在此为国争光，展现中国田径的整体实力。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '上海市田径锦标赛（2026-07-20 ~ 07-22）在上海中国举办。这是区域/街头赛级别的重要赛事。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「上海市田径锦标赛」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E4%B8%8A%E6%B5%B7%E5%B8%82%E7%94%B0%E5%BE%84%E9%94%A6%E6%A0%87%E8%B5%9B%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「上海 田径」', url: 'https://search.bilibili.com/all?keyword=%E4%B8%8A%E6%B5%B7%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'zhejiang-provincial': {
    whyMatters: '浙江省田径锦标赛是把田径带到城市中心的街头赛事。观众与运动员零距离接触，让田径走进大众生活。',
    history: '浙江省田径锦标赛在中国田径版图中占据重要地位。该赛事为中国短跑运动员提供了重要的竞技平台。比赛在杭州举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: '浙江省田径锦标赛涵盖全部田径项目等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: '浙江省田径锦标赛是中国短跑选手的主场赛事。中国田径健儿在此为国争光，展现中国田径的整体实力。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '浙江省田径锦标赛（2026-07-15 ~ 07-18）在杭州中国举办。这是区域/街头赛级别的重要赛事。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「浙江省田径锦标赛」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E6%B5%99%E6%B1%9F%E7%9C%81%E7%94%B0%E5%BE%84%E9%94%A6%E6%A0%87%E8%B5%9B%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「杭州 田径」', url: 'https://search.bilibili.com/all?keyword=%E6%9D%AD%E5%B7%9E%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'national-student-games': {
    whyMatters: '全国学生运动会田径比赛是中国田径最高水平赛事之一。各省队派出最强阵容，国家队选手在此争夺全国冠军头衔。是中国短跑梯队深度和后备力量的集中展示。',
    history: '全国学生运动会田径比赛在中国田径版图中占据重要地位。该赛事为中国短跑运动员提供了重要的竞技平台。比赛在待定举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: '全国学生运动会田径比赛涵盖全部田径项目等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: '全国学生运动会田径比赛是中国短跑选手的主场赛事。中国田径健儿在此为国争光，展现中国田径的整体实力。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '全国学生运动会田径比赛（2026-08-15 ~ 08-20）在待定中国举办。这是全国级别的重要赛事。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「全国学生运动会田径比赛」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E5%85%A8%E5%9B%BD%E5%AD%A6%E7%94%9F%E8%BF%90%E5%8A%A8%E4%BC%9A%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「待定 田径」', url: 'https://search.bilibili.com/all?keyword=%E5%BE%85%E5%AE%9A%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'china-university-champs': {
    whyMatters: '中国大学生田径锦标赛是中国田径最高水平赛事之一。各省队派出最强阵容，国家队选手在此争夺全国冠军头衔。是中国短跑梯队深度和后备力量的集中展示。',
    history: '中国大学生田径锦标赛在中国田径版图中占据重要地位。该赛事为中国短跑运动员提供了重要的竞技平台。比赛在待定举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: '中国大学生田径锦标赛涵盖全部田径项目等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: '中国大学生田径锦标赛是中国短跑选手的主场赛事。中国田径健儿在此为国争光，展现中国田径的整体实力。',
    whatAtStake: '全国赛事冠军代表了国内该项目的最高水平，是入选国家队的核心参考依据。各省市代表队在此争夺荣誉和资源。对于运动员个人，全国冠军是其职业生涯的重要里程碑。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '中国大学生田径锦标赛（2026-07-25 ~ 07-30）在待定中国举办。这是全国级别的重要赛事。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「中国大学生田径锦标赛」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E4%B8%AD%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%94%B0%E5%BE%84%E9%94%A6%E6%A0%87%E8%B5%9B%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「待定 田径」', url: 'https://search.bilibili.com/all?keyword=%E5%BE%85%E5%AE%9A%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },

  'world-champs-2027': {
    whyMatters: '世界田径锦标赛 2027是田径最高级别赛事，汇聚全球最顶尖选手。每届比赛都改写短跑历史，是每一位短跑运动员梦想的舞台。',
    history: '世界田径锦标赛 2027在中国田径版图中占据重要地位。该赛事吸引了全球最顶尖的短跑选手参赛，历届比赛中多次诞生惊人成绩。比赛在北京举办。',
    pastWinners: [
      { year: '2025', winner: '详见 World Athletics 官方', mark: '—', note: '最新一届赛事' },
      { year: '2024', winner: '详见 World Athletics 官方', mark: '—', note: '' },
      { year: '2023', winner: '详见 World Athletics 官方', mark: '—', note: '' }
    ],
    keyMatchups: [
      { title: '🏟️ 田径综合竞技', description: '世界田径锦标赛 2027涵盖全部田径项目等多个项目，是田径运动的综合展示。' }
    ],
    chineseConnection: '世界田径锦标赛 2027是中国短跑选手的主场赛事。中国田径健儿在此为国争光，展现中国田径的整体实力。',
    whatAtStake: '获胜者将获得世界排名积分，提升国际田联排名。钻石联赛分站冠军获8个钻石积分计入年度总排名。对各国运动员而言，国际大赛的成绩直接影响奥运资格和世界排名。',
    records: [
      { event: '赛事最佳成绩', record: '详见 World Athletics 官方', holder: '—', year: '—' }
    ],
    storyline: '世界田径锦标赛 2027（2027-08 ~ 2027-09）在北京中国举办。这是国际顶级级别的赛事，全球田径爱好者的目光将汇聚于此。主场作战的中国健儿将全力以赴。',
    bestVideos: [
      { title: 'B站搜索「世界田径锦标赛 2027」比赛视频', url: 'https://search.bilibili.com/all?keyword=%E4%B8%96%E7%95%8C%E7%94%B0%E5%BE%84%E9%94%A6%E6%A0%87%E8%B5%9B%202027%20%E7%94%B0%E5%BE%84', platform: 'Bilibili' },
      { title: 'B站搜索「北京 田径」', url: 'https://search.bilibili.com/all?keyword=%E5%8C%97%E4%BA%AC%20%E7%94%B0%E5%BE%84%E6%AF%94%E8%B5%9B', platform: 'Bilibili' }
    ],
  },
}
