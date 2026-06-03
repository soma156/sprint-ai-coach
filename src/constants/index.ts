import type {
  EventType, Gender, ExperienceLevel, InjuryType, StrengthCondition,
  MobilityLevel, InjurySeverity, TrainingPhase, TrainingGoal,
} from '../types'

// ========== 短跑项目 ==========
export const EVENT_OPTIONS: { value: EventType; label: string }[] = [
  { value: '60m', label: '60米' },
  { value: '100m', label: '100米' },
  { value: '200m', label: '200米' },
  { value: '400m', label: '400米' },
]

// ========== 性别 ==========
export const GENDER_OPTIONS: { value: Gender; label: string }[] = [
  { value: 'male', label: '男' }, { value: 'female', label: '女' },
]

// ========== 训练年限 ==========
export const EXPERIENCE_OPTIONS: { value: ExperienceLevel; label: string }[] = [
  { value: 'beginner', label: '新手（<1年）' },
  { value: '1-3years', label: '1-3年' },
  { value: '3-5years', label: '3-5年' },
  { value: '5years+', label: '5年以上' },
]

// ========== 力量条件 ==========
export const STRENGTH_OPTIONS: { value: StrengthCondition; label: string }[] = [
  { value: 'gym', label: '有健身房' }, { value: 'no-gym', label: '无健身房' },
]

// ========== 伤病部位 ==========
export const INJURY_OPTIONS: { value: InjuryType; label: string }[] = [
  { value: 'none', label: '✅ 无伤病' },
  { value: 'hamstring', label: '🦵 腘绳肌问题' },
  { value: 'knee', label: '🦿 膝盖问题' },
  { value: 'achilles', label: '🦶 跟腱问题' },
  { value: 'lowerback', label: '🔙 腰背问题' },
]

export const INJURY_LABELS: Record<InjuryType, string> = {
  none: '无伤病', hamstring: '腘绳肌', knee: '膝盖', achilles: '跟腱', lowerback: '腰背',
}

// ========== 伤病详细选项 ==========
export const INJURY_BODY_PARTS = [
  '腘绳肌', '股四头肌', '腓肠肌', '跟腱', '髌腱', '膝关节', '踝关节', '髋关节',
  '腰背', '腹股沟', '足底筋膜', '胫骨', '肩部', '其他',
]

export const SEVERITY_OPTIONS: { value: InjurySeverity; label: string }[] = [
  { value: 'mild', label: '轻度' }, { value: 'moderate', label: '中度' }, { value: 'severe', label: '重度' },
]

// ========== 柔韧性 ==========
export const MOBILITY_OPTIONS: { value: MobilityLevel; label: string }[] = [
  { value: 'good', label: '良好' }, { value: 'normal', label: '一般' },
  { value: 'limited', label: '受限' }, { value: 'poor', label: '很差' },
]

export const PELVIC_OPTIONS = [
  { value: 'neutral' as const, label: '中立位' },
  { value: 'anterior_tilt' as const, label: '前倾' },
  { value: 'posterior_tilt' as const, label: '后倾' },
]

// ========== 训练阶段 ==========
export const PHASE_OPTIONS: { value: TrainingPhase; label: string }[] = [
  { value: 'off_season', label: '休赛期' },
  { value: 'pre_season', label: '赛季前' },
  { value: 'in_season', label: '赛季中' },
  { value: 'competition', label: '比赛期' },
  { value: 'transition', label: '过渡期' },
]

// ========== 比赛经验 ==========
export const COMPETITION_OPTIONS = [
  { value: 'none' as const, label: '无比赛经验' },
  { value: 'regional' as const, label: '省级/地区级' },
  { value: 'national' as const, label: '国家级' },
  { value: 'international' as const, label: '国际级' },
]

// ========== 评分 (1-5) ==========
export const RATING_OPTIONS = [
  { value: 1, label: '1 - 很差' }, { value: 2, label: '2 - 较差' },
  { value: 3, label: '3 - 一般' }, { value: 4, label: '4 - 较好' }, { value: 5, label: '5 - 优秀' },
]

export const FATIGUE_OPTIONS = [
  { value: 1, label: '1 - 轻松' }, { value: 2, label: '2 - 较轻松' },
  { value: 3, label: '3 - 一般' }, { value: 4, label: '4 - 疲劳' }, { value: 5, label: '5 - 极度疲劳' },
]

export const STRESS_OPTIONS = [
  { value: 1, label: '1 - 无压力' }, { value: 2, label: '2 - 轻微' },
  { value: 3, label: '3 - 中等' }, { value: 4, label: '4 - 较大' }, { value: 5, label: '5 - 极大' },
]

export const RECOVERY_FEEL_OPTIONS = [
  { value: 'good' as const, label: '良好 - 感觉恢复充分' },
  { value: 'normal' as const, label: '一般 - 基本恢复' },
  { value: 'poor' as const, label: '差 - 感觉没恢复' },
]

// ========== 训练器材 ==========
export const EQUIPMENT_ITEMS = [
  { key: 'hasTrack', label: '标准塑胶跑道' },
  { key: 'hasGrass', label: '草地' },
  { key: 'hasGym', label: '健身房' },
  { key: 'hasBarbell', label: '杠铃' },
  { key: 'hasSquatRack', label: '深蹲架' },
  { key: 'hasResistanceBands', label: '阻力带' },
  { key: 'hasSled', label: '雪橇' },
  { key: 'hasPlyoBox', label: '跳箱' },
  { key: 'hasMedicineBall', label: '药球' },
]

// ========== 训练目标 ==========
export const GOAL_OPTIONS: { value: TrainingGoal; label: string; icon: string }[] = [
  { value: 'improve_start', label: '提高起跑能力', icon: '🚀' },
  { value: 'improve_acceleration', label: '提高加速能力', icon: '⚡' },
  { value: 'improve_max_speed', label: '提高最高速度', icon: '💨' },
  { value: 'improve_speed_endurance', label: '提高速度耐力', icon: '🔄' },
  { value: 'increase_strength', label: '增强力量', icon: '💪' },
  { value: 'reduce_injury_risk', label: '减少伤病风险', icon: '🛡️' },
  { value: 'prepare_competition', label: '备战比赛', icon: '🏆' },
  { value: 'improve_technique', label: '改善技术', icon: '🎯' },
]

// ========== 训练天数 ==========
export const TRAINING_DAYS_OPTIONS = [3, 4, 5, 6, 7]

// ========== 成绩参考 ==========
export const EVENT_REFERENCE: Record<EventType, { elite: number; good: number; average: number }> = {
  '60m':  { elite: 6.60, good: 6.90, average: 7.20 },
  '100m': { elite: 10.30, good: 10.80, average: 11.50 },
  '200m': { elite: 20.80, good: 22.00, average: 23.50 },
  '400m': { elite: 46.50, good: 49.00, average: 52.00 },
}
