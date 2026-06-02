import type { EventType, Gender, ExperienceLevel, InjuryType, StrengthCondition } from '../types'

// ========== 短跑项目选项 ==========

export const EVENT_OPTIONS: { value: EventType; label: string }[] = [
  { value: '60m', label: '60米' },
  { value: '100m', label: '100米' },
  { value: '200m', label: '200米' },
  { value: '400m', label: '400米' },
]

// ========== 性别选项 ==========

export const GENDER_OPTIONS: { value: Gender; label: string }[] = [
  { value: 'male', label: '男' },
  { value: 'female', label: '女' },
]

// ========== 训练年限选项 ==========

export const EXPERIENCE_OPTIONS: { value: ExperienceLevel; label: string }[] = [
  { value: 'beginner', label: '新手（<1年）' },
  { value: '1-3years', label: '1-3年' },
  { value: '3-5years', label: '3-5年' },
  { value: '5years+', label: '5年以上' },
]

// ========== 力量条件选项 ==========

export const STRENGTH_OPTIONS: { value: StrengthCondition; label: string }[] = [
  { value: 'gym', label: '有健身房' },
  { value: 'no-gym', label: '无健身房' },
]

// ========== 伤病选项（多选） ==========

export const INJURY_OPTIONS: { value: InjuryType; label: string }[] = [
  { value: 'none', label: '✅ 无伤病' },
  { value: 'hamstring', label: '🦵 腘绳肌问题' },
  { value: 'knee', label: '🦿 膝盖问题' },
  { value: 'achilles', label: '🦶 跟腱问题' },
  { value: 'lowerback', label: '🔙 腰背问题' },
]

// ========== 每周训练天数 ==========

export const TRAINING_DAYS_OPTIONS = [3, 4, 5, 6, 7]

// ========== 伤病中文映射 ==========

export const INJURY_LABELS: Record<InjuryType, string> = {
  none: '无伤病',
  hamstring: '腘绳肌问题',
  knee: '膝盖问题',
  achilles: '跟腱问题',
  lowerback: '腰背问题',
}

// ========== 项目成绩参考（国家级标准，秒） ==========
// 用于水平评估参考
export const EVENT_REFERENCE: Record<EventType, { elite: number; good: number; average: number }> = {
  '60m':  { elite: 6.60, good: 6.90, average: 7.20 },
  '100m': { elite: 10.30, good: 10.80, average: 11.50 },
  '200m': { elite: 20.80, good: 22.00, average: 23.50 },
  '400m': { elite: 46.50, good: 49.00, average: 52.00 },
}
