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
}
