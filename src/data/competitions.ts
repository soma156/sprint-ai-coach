import type { Competition } from '../types'

export const competitions: Competition[] = [
  // ========== 国际顶级赛事 ==========
  { id: 'world-champs', name: '世界田径锦标赛', nameEn: 'World Athletics Championships', date: '2026-09-11 ~ 09-20', location: '布达佩斯', country: '匈牙利', level: '国际顶级', category: '综合', events: '全部田径项目', description: '田径最高级别赛事之一，每两年举办一次。全球顶尖选手角逐世界冠军头衔。' },
  { id: 'world-indoor', name: '世界室内田径锦标赛', nameEn: 'World Athletics Indoor Championships', date: '2026-03-20 ~ 03-22', location: '南京', country: '中国', level: '国际顶级', category: '综合', events: '60m/60m栏/400m/800m/1500m/3000m/跳远/三级跳/跳高/撑杆跳/铅球/七项/五项/4×400m', description: '室内田径最高级别赛事。赛道200米一圈，短跑只有60m和60m栏。2026年在南京举办！' },
  { id: 'asian-games', name: '亚运会田径比赛', nameEn: 'Asian Games Athletics', date: '2026-09-19 ~ 10-04', location: '爱知·名古屋', country: '日本', level: '国际顶级', category: '综合', events: '全部田径项目', description: '亚洲最高级别综合运动会。四年一届，2026年在日本爱知县举办。' },

  // ========== 钻石联赛 2026 ==========
  { id: 'dl-doha', name: '钻石联赛 — 多哈站', nameEn: 'Wanda Diamond League Doha', date: '2026-05-01', location: '多哈', country: '卡塔尔', level: '钻石联赛', category: '综合', events: '100m/200m/400m/800m/1500m/110m栏/400m栏/跳高/撑杆跳/三级跳/铅球/标枪', description: '钻石联赛赛季揭幕战。中东首站，气温较高但竞技水平不减。' },
  { id: 'dl-shanghai', name: '钻石联赛 — 上海/苏州站', nameEn: 'Wanda Diamond League Shanghai/Suzhou', date: '2026-05-09', location: '苏州', country: '中国', level: '钻石联赛', category: '综合', events: '100m/200m/110m栏/跳远/跳高/撑杆跳/标枪', description: '中国举办的钻石联赛分站。中国短跑选手的主场之战！历届有苏炳添、谢震业等名将出战。' },
  { id: 'dl-doha2', name: '钻石联赛 — 拉巴特站', nameEn: 'Diamond League Rabat', date: '2026-05-23', location: '拉巴特', country: '摩洛哥', level: '钻石联赛', category: '综合', events: '100m/200m/400m/800m/1500m/3000m障碍/跳远/铅球/铁饼', description: '非洲分站，在摩洛哥首都拉巴特举办。' },
  { id: 'dl-rome', name: '钻石联赛 — 罗马站', nameEn: 'Diamond League Rome', date: '2026-06-04', location: '罗马', country: '意大利', level: '钻石联赛', category: '综合', events: '100m/400m/1500m/110m栏/跳高/三级跳/铅球/标枪', description: '欧洲经典分站。在罗马奥林匹克体育场举办。' },
  { id: 'dl-oslo', name: '钻石联赛 — 奥斯陆站', nameEn: 'Diamond League Oslo (Bislett Games)', date: '2026-06-11', location: '奥斯陆', country: '挪威', level: '钻石联赛', category: '综合', events: '200m/400m/800m/1英里/400m栏/跳远/撑杆跳/铁饼', description: '历史最悠久的钻石联赛分站之一（Bislett Games），以中长跑著称。' },
  { id: 'dl-stockholm', name: '钻石联赛 — 斯德哥尔摩站', nameEn: 'Diamond League Stockholm', date: '2026-06-18', location: '斯德哥尔摩', country: '瑞典', level: '钻石联赛', category: '综合', events: '100m/200m/400m/800m/撑杆跳/跳远/标枪', description: '北欧分站，在1912年奥运会主场馆举办。撑杆跳传统强项分站。' },
  { id: 'dl-paris', name: '钻石联赛 — 巴黎站', nameEn: 'Diamond League Paris', date: '2026-06-25', location: '巴黎', country: '法国', level: '钻石联赛', category: '综合', events: '100m/200m/400m/1500m/110m栏/400m栏/跳高/跳远/铅球', description: '法国分站，通常赛季中的高水平对阵。' },
  { id: 'dl-monaco', name: '钻石联赛 — 摩纳哥站', nameEn: 'Diamond League Monaco (Herculis)', date: '2026-07-10', location: '摩纳哥', country: '摩纳哥', level: '钻石联赛', category: '综合', events: '200m/400m/800m/1500m/3000m/400m栏/撑杆跳/跳远/铁饼', description: '最富盛名的钻石联赛分站之一。以破纪录著称，中长跑选手的梦想舞台。' },
  { id: 'dl-london', name: '钻石联赛 — 伦敦站', nameEn: 'Diamond League London', date: '2026-07-18', location: '伦敦', country: '英国', level: '钻石联赛', category: '综合', events: '100m/200m/400m/800m/110m栏/400m栏/跳高/跳远/铅球/标枪', description: '英国分站。伦敦奥林匹克体育场。英国短跑军团的主场。' },
  { id: 'dl-lausanne', name: '钻石联赛 — 洛桑站', nameEn: 'Diamond League Lausanne (Athletissima)', date: '2026-08-13', location: '洛桑', country: '瑞士', level: '钻石联赛', category: '综合', events: '100m/200m/400m/800m/110m栏/撑杆跳/跳远/标枪', description: 'Athletissima，国际奥委会所在地的经典分站。' },
  { id: 'dl-brussels', name: '钻石联赛 — 布鲁塞尔站（总决赛）', nameEn: 'Diamond League Brussels Final', date: '2026-09-04 ~ 09-05', location: '布鲁塞尔', country: '比利时', level: '钻石联赛', category: '综合', events: '全部钻石联赛项目决赛', description: '钻石联赛年终总决赛！各项目年度积分前8名对决，产生钻石联赛总冠军。' },

  // ========== 洲际锦标赛 ==========
  { id: 'euro-champs', name: '欧洲田径锦标赛', nameEn: 'European Athletics Championships', date: '2026-08-06 ~ 08-10', location: '伯明翰', country: '英国', level: '洲际', category: '综合', events: '全部田径项目', description: '欧洲最高级别田径赛事。2026年在英国伯明翰举办。' },
  { id: 'asian-champs', name: '亚洲田径锦标赛', nameEn: 'Asian Athletics Championships', date: '2026-07-15 ~ 07-19', location: '待定', country: '待定', level: '洲际', category: '综合', events: '全部田径项目', description: '亚洲田径最高级别赛事。中国队的亚洲争锋舞台。' },
  { id: 'ncaa-champs', name: 'NCAA田径锦标赛', nameEn: 'NCAA Outdoor Championships', date: '2026-06-10 ~ 06-13', location: '尤金', country: '美国', level: '洲际', category: '综合', events: '全部田径项目', description: '美国大学田径锦标赛。许多奥运冠军从这里走出。短跑和跳跃水平极高。' },

  // ========== 中国国内赛事 ==========
  { id: 'china-national-champs', name: '全国田径锦标赛', nameEn: 'Chinese National Athletics Championships', date: '2026-06-15 ~ 06-18', location: '待定', country: '中国', level: '全国', category: '综合', events: '全部田径项目', description: '中国最高级别田径赛事。各省市代表队参赛，国家队选手争夺全国冠军。' },
  { id: 'china-grand-prix-1', name: '全国田径大奖赛（第一站）', nameEn: 'Chinese Athletics Grand Prix 1', date: '2026-04-10 ~ 04-12', location: '肇庆', country: '中国', level: '全国', category: '综合', events: '全部田径项目', description: '全国田径大奖赛系列赛第一站。赛季开幕赛，检验冬训成果。' },
  { id: 'china-grand-prix-2', name: '全国田径大奖赛（第二站）', nameEn: 'Chinese Athletics Grand Prix 2', date: '2026-05-15 ~ 05-17', location: '济南', country: '中国', level: '全国', category: '综合', events: '全部田径项目', description: '全国田径大奖赛系列赛第二站。' },
  { id: 'china-grand-prix-3', name: '全国田径大奖赛（第三站）', nameEn: 'Chinese Athletics Grand Prix 3', date: '2026-06-05 ~ 06-07', location: '重庆', country: '中国', level: '全国', category: '综合', events: '全部田径项目', description: '全国田径大奖赛系列赛第三站。' },
  { id: 'china-grand-prix-4', name: '全国田径大奖赛（第四站/总决赛）', nameEn: 'Chinese Athletics Grand Prix Final', date: '2026-07-01 ~ 07-03', location: '衢州', country: '中国', level: '全国', category: '综合', events: '全部田径项目', description: '全国田径大奖赛总决赛。全年积分排名决定最终名次。' },
  { id: 'china-youth', name: '全国青年田径锦标赛', nameEn: 'Chinese U20 Athletics Championships', date: '2026-05-20 ~ 05-23', location: '待定', country: '中国', level: '全国', category: '综合', events: '全部田径项目', description: '中国 U20（20岁以下）最高级别赛事。未来之星的舞台。' },
  { id: 'china-indoor', name: '全国室内田径锦标赛', nameEn: 'Chinese Indoor Athletics Championships', date: '2026-03-01 ~ 03-03', location: '南京', country: '中国', level: '全国', category: '综合', events: '60m/60m栏/200m/400m/800m/1500m/跳远/三级跳/跳高/撑杆跳/铅球', description: '室内赛季的中国顶点。在室内世锦赛前举行，是选手的最终选拔赛。' },

  // ========== 街头田径赛 ==========
  { id: 'street-xiamen', name: '厦门田径街头赛', nameEn: 'Xiamen Street Athletics', date: '2026-04-20', location: '厦门', country: '中国', level: '区域/街头赛', category: '综合', events: '跳高/撑杆跳/跳远/短跑', description: '中国最知名的田径街头赛事。在厦门中山路步行街举办，把田径带到市民身边。观众零距离观赛！' },
  { id: 'street-beijing', name: '北京田径街头挑战赛', nameEn: 'Beijing Street Athletics Challenge', date: '2026-05-15', location: '北京', country: '中国', level: '区域/街头赛', category: '综合', events: '撑杆跳/跳高/60m', description: '北京的田径街头赛事。常在鸟巢周边或商圈举办。' },
  { id: 'street-shanghai', name: '上海街头田径赛', nameEn: 'Shanghai Street Athletics', date: '2026-06-01', location: '上海', country: '中国', level: '区域/街头赛', category: '综合', events: '跳远/撑杆跳/短跑', description: '上海闹市区的田径街头赛。把田径带进城市中心。' },
  { id: 'street-shenzhen', name: '深圳街头田径赛', nameEn: 'Shenzhen Street Athletics', date: '2026-07-10', location: '深圳', country: '中国', level: '区域/街头赛', category: '综合', events: '撑杆跳/跳高/短跑', description: '深圳的街头田径盛事。' },

  // ========== 世界洲际巡回赛（金标/银标/铜标） ==========
  { id: 'conti-tour-gold-1', name: '世界田联洲际巡回赛·金标 — 博茨瓦纳站', nameEn: 'World Athletics Continental Tour Gold - Gaborone', date: '2026-04-26', location: '哈博罗内', country: '博茨瓦纳', level: '洲际', category: '综合', events: '100m/200m/400m/800m/4×100m/跳远', description: '非洲金标站。博茨瓦纳的短跑传统强国，200m/400m选手的舞台。' },
  { id: 'conti-tour-gold-2', name: '世界田联洲际巡回赛·金标 — 东京站（精工黄金大奖赛）', nameEn: 'Seiko Golden Grand Prix Tokyo', date: '2026-05-10', location: '东京', country: '日本', level: '洲际', category: '综合', events: '100m/200m/110m栏/400m栏/跳远/撑杆跳/标枪', description: '日本最重要的国际田径赛事。亚洲选手与世界顶级选手同场竞技。' },
  { id: 'conti-tour-gold-3', name: '世界田联洲际巡回赛·金标 — 俄斯特拉发站（金标鞋赛）', nameEn: 'Ostrava Golden Spike', date: '2026-05-27', location: '俄斯特拉发', country: '捷克', level: '洲际', category: '综合', events: '100m/200m/400m/跳远/撑杆跳/标枪', description: '欧洲历史悠久的金标赛事。以短跑和投掷项目见长。' },
  { id: 'conti-tour-gold-4', name: '世界田联洲际巡回赛·金标 — 亨厄洛站', nameEn: 'FBK Games Hengelo', date: '2026-06-07', location: '亨厄洛', country: '荷兰', level: '洲际', category: '综合', events: '100m/200m/400m/800m/1500m/110m栏/跳远/铅球', description: '荷兰金标赛事。以短跑和跨栏项目著称。' },
  { id: 'conti-tour-gold-5', name: '世界田联洲际巡回赛·金标 — 纽约大奖赛', nameEn: 'USATF NYC Grand Prix', date: '2026-06-14', location: '纽约', country: '美国', level: '洲际', category: '综合', events: '100m/200m/400m/110m栏/400m栏/跳远/跳高', description: '美国纽约的金标赛事。世界级短跑对决的常规举办地。' },
  { id: 'conti-tour-gold-6', name: '世界田联洲际巡回赛·金标 — 萨格勒布站', nameEn: 'Zagreb Memorial Borisa Hanzekovica', date: '2026-09-08', location: '萨格勒布', country: '克罗地亚', level: '洲际', category: '综合', events: '100m/200m/110m栏/跳远/撑杆跳/铁饼/标枪', description: '克罗地亚金标赛事。赛季末的高水平对决。' },

  // ========== 国际马拉松/路跑（短跑相关较少但知名） ==========
  { id: 'world-relays', name: '世界田径接力赛', nameEn: 'World Athletics Relays', date: '2026-05-02 ~ 05-03', location: '广州', country: '中国', level: '国际顶级', category: '接力', events: '4×100m/4×200m/4×400m/4×400m混合/4×800m/混合跨栏接力', description: '全球接力专项最高级别赛事。中国广州举办！4×100m是奥运会资格赛。' },

  // ========== 中国室内系列赛 ==========
  { id: 'china-indoor-series-1', name: '全国室内田径邀请赛（第一站）', nameEn: 'Chinese Indoor Athletics Invitational 1', date: '2026-02-10 ~ 02-11', location: '济南', country: '中国', level: '全国', category: '综合', events: '60m/60m栏/200m/400m/跳远/跳高/撑杆跳/铅球', description: '室内赛季开幕。各队检验冬训成果。' },
  { id: 'china-indoor-series-2', name: '全国室内田径邀请赛（第二站）', nameEn: 'Chinese Indoor Athletics Invitational 2', date: '2026-02-18 ~ 02-19', location: '西安', country: '中国', level: '全国', category: '综合', events: '60m/60m栏/200m/400m/跳远/跳高/撑杆跳/铅球', description: '室内赛季第二站。' },
  { id: 'china-indoor-series-3', name: '全国室内田径邀请赛（第三站）', nameEn: 'Chinese Indoor Athletics Invitational 3', date: '2026-02-25 ~ 02-26', location: '成都', country: '中国', level: '全国', category: '综合', events: '60m/60m栏/200m/400m/跳远/跳高/撑杆跳/铅球', description: '室内系列赛第三站，室内世锦赛前的最后热身。' },

  // ========== 省市级重要赛事 ==========
  { id: 'guangdong-provincial', name: '广东省田径锦标赛', nameEn: 'Guangdong Provincial Athletics Champs', date: '2026-07-20 ~ 07-23', location: '广州', country: '中国', level: '区域/街头赛', category: '综合', events: '全部田径项目', description: '广东省最高级别田径赛事。广东是短跑人才大省。' },
  { id: 'beijing-provincial', name: '北京市田径锦标赛', nameEn: 'Beijing Athletics Champs', date: '2026-07-25 ~ 07-27', location: '北京', country: '中国', level: '区域/街头赛', category: '综合', events: '全部田径项目', description: '北京市最高级别田径赛事。' },
  { id: 'shanghai-provincial', name: '上海市田径锦标赛', nameEn: 'Shanghai Athletics Champs', date: '2026-07-20 ~ 07-22', location: '上海', country: '中国', level: '区域/街头赛', category: '综合', events: '全部田径项目', description: '上海市最高级别田径赛事。' },
  { id: 'zhejiang-provincial', name: '浙江省田径锦标赛', nameEn: 'Zhejiang Provincial Athletics Champs', date: '2026-07-15 ~ 07-18', location: '杭州', country: '中国', level: '区域/街头赛', category: '综合', events: '全部田径项目', description: '浙江省最高级别赛事。谢震业的家乡省份。' },

  // ========== 中国传统特色赛事 ==========
  { id: 'national-student-games', name: '全国学生运动会田径比赛', nameEn: 'National Student Games Athletics', date: '2026-08-15 ~ 08-20', location: '待定', country: '中国', level: '全国', category: '综合', events: '全部田径项目', description: '全国学生最高级别综合运动会。大学生和高中生参赛。' },
  { id: 'china-university-champs', name: '中国大学生田径锦标赛', nameEn: 'Chinese University Athletics Champs', date: '2026-07-25 ~ 07-30', location: '待定', country: '中国', level: '全国', category: '综合', events: '全部田径项目', description: '中国高校田径最高水平赛事。许多国家队选手的起点。' },

  // ========== 2027 年重要赛事预告 ==========
  { id: 'world-champs-2027', name: '世界田径锦标赛 2027', nameEn: 'World Athletics Championships 2027', date: '2027-08 ~ 2027-09', location: '北京', country: '中国', level: '国际顶级', category: '综合', events: '全部田径项目', description: '🏆 2027年世界田径锦标赛将在北京举办！这是继2015年后北京再次承办。中国田径迷的主场盛宴！' },
]

export const LEVEL_OPTIONS = [
  { value: '全部' as const, label: '全部级别' },
  { value: '国际顶级' as const, label: '国际顶级' },
  { value: '钻石联赛' as const, label: '钻石联赛' },
  { value: '洲际' as const, label: '洲际' },
  { value: '全国' as const, label: '全国' },
  { value: '区域/街头赛' as const, label: '区域/街头赛' },
]

export const MONTH_OPTIONS = [
  { value: 0, label: '全部月份' },
  { value: 1, label: '1月' }, { value: 2, label: '2月' }, { value: 3, label: '3月' },
  { value: 4, label: '4月' }, { value: 5, label: '5月' }, { value: 6, label: '6月' },
  { value: 7, label: '7月' }, { value: 8, label: '8月' }, { value: 9, label: '9月' },
  { value: 10, label: '10月' }, { value: 11, label: '11月' }, { value: 12, label: '12月' },
]
