import type { NutritionPlan, NutritionMeal, NutritionSupplement, HydrationGuide } from '../types'

export type TrainingPhase = 'rest' | 'light' | 'moderate' | 'heavy' | 'competition'

// ========== 核心计算 ==========

/** 根据训练阶段计算每日热量和宏量营养素 */
export function calculateNutrition(
  weight: number,   // kg
  phase: TrainingPhase,
  gender: 'male' | 'female'
): NutritionPlan {
  // 基础代谢率（Mifflin-St Jeor）
  const bmr = gender === 'male'
    ? 10 * weight + 6.25 * 175 - 5 * 25 + 5
    : 10 * weight + 6.25 * 165 - 5 * 25 - 161

  // 活动系数
  const activityMultiplier: Record<TrainingPhase, number> = {
    rest: 1.2,
    light: 1.4,
    moderate: 1.6,
    heavy: 1.8,
    competition: 1.5,
  }
  const tdee = Math.round(bmr * activityMultiplier[phase])

  // 蛋白质：根据训练阶段 1.6-2.2g/kg
  const proteinPerKg: Record<TrainingPhase, number> = {
    rest: 1.6, light: 1.8, moderate: 2.0, heavy: 2.2, competition: 2.0,
  }
  const proteinGrams = Math.round(weight * proteinPerKg[phase])
  const proteinKcal = proteinGrams * 4

  // 脂肪：20-30% 总热量
  const fatPercent = 0.25
  const fatKcal = Math.round(tdee * fatPercent)
  const fatGrams = Math.round(fatKcal / 9)

  // 碳水：剩余热量
  const carbKcal = tdee - proteinKcal - fatKcal
  const carbGrams = Math.round(carbKcal / 4)

  return {
    dailyCalories: tdee,
    protein: { grams: proteinGrams, kcal: proteinKcal, percent: Math.round((proteinKcal / tdee) * 100) },
    carbs: { grams: carbGrams, kcal: carbKcal, percent: Math.round((carbKcal / tdee) * 100) },
    fat: { grams: fatGrams, kcal: fatKcal, percent: Math.round((fatKcal / tdee) * 100) },
    meals: getMealPlan(phase),
    supplements: getSupplements(phase),
    hydration: getHydration(weight, phase),
    timingAdvice: getTimingAdvice(phase),
  }
}

// ========== 餐食建议 ==========

function getMealPlan(phase: TrainingPhase): NutritionMeal[] {
  const base: NutritionMeal[] = [
    {
      name: '🥣 早餐（7:00-8:00）',
      time: '训练前 1-2 小时',
      foods: ['燕麦/全麦面包', '鸡蛋 2-3个', '香蕉或浆果', '牛奶/酸奶 200ml'],
      notes: '碳水为主提供能量，适量蛋白质。避免高脂肪（消化慢影响训练）。',
    },
    {
      name: '🍱 午餐（12:00-13:00）',
      time: '上午训练后或下午训练前',
      foods: ['米饭/糙米饭 200-300g', '鸡胸肉/鱼/瘦牛肉 150-200g', '蔬菜大量（至少2种颜色）', '橄榄油或坚果少量'],
      notes: '均衡一餐，蛋白质+碳水+蔬菜。颜色越丰富营养越全面。',
    },
    {
      name: '🍎 加餐（15:00-16:00）',
      time: '下午训练前 1 小时',
      foods: ['全麦面包+花生酱', '希腊酸奶+蜂蜜', '坚果一小把（约30g）'],
      notes: '轻量碳水+少量蛋白质，为下午训练供能。',
    },
    {
      name: '🍽️ 晚餐（18:00-19:00）',
      time: '训练后 1-2 小时',
      foods: ['红薯/土豆/米饭 150-200g', '三文鱼/鸡腿肉 150g', '蔬菜大份', '橄榄油调味'],
      notes: '训练后补充碳水+蛋白质修复肌肉。鱼类富含Omega-3抗炎。',
    },
  ]

  if (phase === 'heavy' || phase === 'competition') {
    base.splice(2, 0, {
      name: '🥤 训练后即刻（训练结束30分钟内）',
      time: '黄金窗口期',
      foods: ['乳清蛋白粉 25-30g + 香蕉', '或巧克力牛奶 500ml', '或蛋白棒+水果'],
      notes: '训练后30分钟是蛋白质合成窗口，快速吸收的蛋白质+碳水效果最佳。',
    })
  }

  return base
}

// ========== 补剂建议 ==========

function getSupplements(phase: TrainingPhase): NutritionSupplement[] {
  const all: NutritionSupplement[] = [
    { name: '乳清蛋白粉', dosage: '25-30g/次', timing: '训练后30分钟内', benefit: '快速补充蛋白质，促进肌肉修复和生长', priority: '必须' },
    { name: '肌酸（一水肌酸）', dosage: '3-5g/天', timing: '任意时间（每天固定时间）', benefit: '提高爆发力输出、增加肌肉磷酸肌酸储备、加速组间恢复', priority: '必须' },
    { name: '维生素D3', dosage: '2000-4000 IU/天', timing: '随餐服用（含脂肪）', benefit: '骨骼健康、免疫功能、肌肉功能。短跑运动员室内训练多，普遍缺乏', priority: '推荐' },
    { name: 'Omega-3鱼油', dosage: '1-2g/天', timing: '随餐服用', benefit: '抗炎、关节健康、心血管支持。高强度训练产生炎症', priority: '推荐' },
    { name: 'β-丙氨酸', dosage: '3-5g/天', timing: '训练前30分钟', benefit: '缓冲肌肉酸性、延缓疲劳。对400米运动员尤其有效', priority: phase === 'heavy' ? '推荐' : '可选' },
    { name: '咖啡因', dosage: '3-6mg/kg体重', timing: '训练/比赛前45-60分钟', benefit: '提高警觉性、降低感知疲劳、提高爆发力输出', priority: phase === 'competition' ? '推荐' : '可选' },
    { name: '电解质片/粉', dosage: '按产品说明', timing: '训练中/训练后', benefit: '补充出汗流失的钠、钾、镁，防止抽筋', priority: phase === 'heavy' ? '推荐' : '可选' },
    { name: 'ZMA（锌镁）', dosage: '睡前30分钟', timing: '空腹服用', benefit: '改善睡眠质量、促进睾酮分泌、加速恢复', priority: '可选' },
  ]
  return all
}

// ========== 补水指南 ==========

function getHydration(weight: number, phase: TrainingPhase): HydrationGuide {
  const dailyBase = Math.round(weight * 35) // ml
  const heavyExtra = phase === 'heavy' || phase === 'competition' ? 500 : 0
  return {
    daily: `${dailyBase + heavyExtra}ml（约${Math.round((dailyBase + heavyExtra) / 250)}杯水）`,
    preTraining: '训练前2-3小时：500-600ml；训练前15分钟：200-300ml',
    duringTraining: '每15-20分钟：150-300ml（小口慢饮）。训练超过60分钟或大量出汗：补充含电解质的运动饮料',
    postTraining: `训练后补充体重减少量的150%。每减少0.5kg体重 = 补充750ml水+电解质`,
  }
}

// ========== 营养时机建议 ==========

function getTimingAdvice(phase: TrainingPhase): string[] {
  const advice = [
    '训练前餐（1-2小时前）：高碳水+中等蛋白质+低脂肪+低纤维（易消化）',
    '训练后30分钟（黄金窗口）：快速蛋白质（乳清蛋白）+ 快速碳水（香蕉/白面包）',
    '训练后正餐（1-2小时内）：均衡的蛋白质+碳水+蔬菜',
    '睡前加餐（可选）：酪蛋白（牛奶/酸奶）提供夜间缓释氨基酸',
    '每3-4小时进食一次，保持血糖稳定和持续蛋白质供应',
  ]
  if (phase === 'competition') {
    advice.unshift('🏆 比赛日特别注意：赛前3-4小时吃熟悉的食物！不要尝试新食物！')
    advice.push('赛前1小时：轻量碳水零食（能量棒/香蕉），避免大量蛋白质和脂肪')
    advice.push('比赛间休息：小口补水+少量碳水（运动饮料/果汁），保持血糖')
  }
  if (phase === 'heavy') {
    advice.push('高强度训练日可适当增加碳水比例至60%，维持训练能量')
  }
  return advice
}

// ========== 训练阶段常量 ==========

export const PHASE_OPTIONS: { value: TrainingPhase; label: string; icon: string; color: string }[] = [
  { value: 'rest', label: '休息/恢复日', icon: '😴', color: 'bg-green-500' },
  { value: 'light', label: '轻度训练', icon: '🏃', color: 'bg-blue-500' },
  { value: 'moderate', label: '中等强度', icon: '🔥', color: 'bg-yellow-500' },
  { value: 'heavy', label: '高强度训练日', icon: '💪', color: 'bg-orange-500' },
  { value: 'competition', label: '比赛日', icon: '🏆', color: 'bg-red-500' },
]
