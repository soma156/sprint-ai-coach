import type { FoodItem } from '../types'

export const foods: FoodItem[] = [
  // ========== 主食 ==========
  { id: 'rice', name: '白米饭', category: '主食', serving: '1碗 (200g)', calories: 232, protein: 4.4, carbs: 53, fat: 0.4 },
  { id: 'brown-rice', name: '糙米饭', category: '主食', serving: '1碗 (200g)', calories: 222, protein: 5.2, carbs: 48, fat: 1.8 },
  { id: 'noodle', name: '白面条（煮）', category: '主食', serving: '1碗 (250g)', calories: 280, protein: 8, carbs: 56, fat: 1 },
  { id: 'wholewheat-noodle', name: '全麦面条', category: '主食', serving: '1碗 (250g)', calories: 260, protein: 10, carbs: 50, fat: 2 },
  { id: 'white-bread', name: '白面包', category: '主食', serving: '2片 (60g)', calories: 160, protein: 5, carbs: 30, fat: 1.5 },
  { id: 'wholewheat-bread', name: '全麦面包', category: '主食', serving: '2片 (60g)', calories: 148, protein: 7, carbs: 26, fat: 2 },
  { id: 'steamed-bun', name: '馒头', category: '主食', serving: '1个 (100g)', calories: 223, protein: 7, carbs: 45, fat: 1 },
  { id: 'sweet-potato', name: '红薯（蒸）', category: '主食', serving: '1个中 (200g)', calories: 172, protein: 2.8, carbs: 40, fat: 0.4 },
  { id: 'potato', name: '土豆（煮）', category: '主食', serving: '1个中 (200g)', calories: 152, protein: 3.6, carbs: 34, fat: 0.2 },
  { id: 'corn', name: '玉米（煮）', category: '主食', serving: '1根 (200g)', calories: 192, protein: 6.8, carbs: 38, fat: 2.4 },
  { id: 'oats', name: '燕麦片（干）', category: '主食', serving: '50g', calories: 189, protein: 6.8, carbs: 33, fat: 3.4 },
  { id: 'pasta', name: '意面（煮）', category: '主食', serving: '1盘 (200g)', calories: 262, protein: 10, carbs: 50, fat: 1.4 },
  { id: 'congee', name: '白粥', category: '主食', serving: '1碗 (300g)', calories: 138, protein: 2.7, carbs: 30, fat: 0.3 },
  { id: 'millet-porridge', name: '小米粥', category: '主食', serving: '1碗 (300g)', calories: 138, protein: 3.3, carbs: 27, fat: 1.2 },

  // ========== 肉类 ==========
  { id: 'chicken-breast', name: '鸡胸肉（无皮）', category: '肉类', serving: '1块 (150g)', calories: 195, protein: 42, carbs: 0, fat: 3 },
  { id: 'chicken-thigh', name: '鸡腿肉（去骨）', category: '肉类', serving: '1只 (120g)', calories: 218, protein: 28, carbs: 0, fat: 11 },
  { id: 'chicken-egg', name: '鸡蛋（煮）', category: '肉类', serving: '1个 (50g)', calories: 73, protein: 6.5, carbs: 0.6, fat: 5 },
  { id: 'egg-white', name: '蛋白', category: '肉类', serving: '1个 (33g)', calories: 17, protein: 3.6, carbs: 0, fat: 0 },
  { id: 'beef-steak', name: '牛排（瘦）', category: '肉类', serving: '1块 (200g)', calories: 356, protein: 52, carbs: 0, fat: 16 },
  { id: 'beef-shank', name: '牛腱肉', category: '肉类', serving: '150g', calories: 207, protein: 34, carbs: 0, fat: 7.5 },
  { id: 'pork-tenderloin', name: '猪里脊（瘦）', category: '肉类', serving: '150g', calories: 213, protein: 33, carbs: 0, fat: 9 },
  { id: 'salmon', name: '三文鱼', category: '肉类', serving: '1块 (150g)', calories: 312, protein: 31, carbs: 0, fat: 21 },
  { id: 'bass', name: '鲈鱼', category: '肉类', serving: '1条 (200g)', calories: 210, protein: 37, carbs: 0, fat: 6.8 },
  { id: 'shrimp', name: '虾仁', category: '肉类', serving: '150g', calories: 143, protein: 31, carbs: 0, fat: 1.5 },
  { id: 'tuna-can', name: '金枪鱼罐头（水浸）', category: '肉类', serving: '1罐 (100g)', calories: 116, protein: 26, carbs: 0, fat: 1 },
  { id: 'duck-breast', name: '鸭胸肉', category: '肉类', serving: '150g', calories: 285, protein: 30, carbs: 0, fat: 18 },
  { id: 'lamb-leg', name: '羊腿肉（瘦）', category: '肉类', serving: '150g', calories: 264, protein: 33, carbs: 0, fat: 14 },

  // ========== 蛋奶 ==========
  { id: 'milk-whole', name: '全脂牛奶', category: '蛋奶', serving: '1杯 (250ml)', calories: 155, protein: 8, carbs: 12, fat: 8 },
  { id: 'milk-skim', name: '脱脂牛奶', category: '蛋奶', serving: '1杯 (250ml)', calories: 88, protein: 8.5, carbs: 12, fat: 0.5 },
  { id: 'soy-milk', name: '豆浆（无糖）', category: '蛋奶', serving: '1杯 (250ml)', calories: 80, protein: 7, carbs: 4, fat: 3 },
  { id: 'yogurt-plain', name: '原味酸奶', category: '蛋奶', serving: '1杯 (200g)', calories: 120, protein: 7, carbs: 17, fat: 2.5 },
  { id: 'greek-yogurt', name: '希腊酸奶', category: '蛋奶', serving: '1杯 (200g)', calories: 194, protein: 20, carbs: 8, fat: 10 },
  { id: 'cheese', name: '奶酪（切达）', category: '蛋奶', serving: '30g（2片）', calories: 120, protein: 7.5, carbs: 0.5, fat: 10 },
  { id: 'cottage-cheese', name: '乡村奶酪', category: '蛋奶', serving: '100g', calories: 98, protein: 11, carbs: 3.4, fat: 4.3 },

  // ========== 豆制品 ==========
  { id: 'tofu-firm', name: '老豆腐', category: '豆制品', serving: '1块 (200g)', calories: 152, protein: 16, carbs: 4, fat: 8.4 },
  { id: 'tofu-soft', name: '嫩豆腐', category: '豆制品', serving: '1盒 (300g)', calories: 150, protein: 14, carbs: 6, fat: 8 },
  { id: 'edamame', name: '毛豆', category: '豆制品', serving: '1碗 (150g)', calories: 195, protein: 18, carbs: 12, fat: 9 },
  { id: 'chickpeas', name: '鹰嘴豆（煮）', category: '豆制品', serving: '100g', calories: 164, protein: 9, carbs: 27, fat: 3 },
  { id: 'lentils', name: '扁豆（煮）', category: '豆制品', serving: '100g', calories: 116, protein: 9, carbs: 20, fat: 0.4 },

  // ========== 蔬菜 ==========
  { id: 'broccoli', name: '西兰花', category: '蔬菜', serving: '1碗 (150g)', calories: 51, protein: 4.2, carbs: 10, fat: 0.6 },
  { id: 'spinach', name: '菠菜', category: '蔬菜', serving: '1碗 (150g)', calories: 35, protein: 4.5, carbs: 5, fat: 0.5 },
  { id: 'tomato', name: '番茄', category: '蔬菜', serving: '1个中 (150g)', calories: 27, protein: 1.3, carbs: 5.8, fat: 0.3 },
  { id: 'carrot', name: '胡萝卜', category: '蔬菜', serving: '1根 (150g)', calories: 62, protein: 1.3, carbs: 14, fat: 0.4 },
  { id: 'cucumber', name: '黄瓜', category: '蔬菜', serving: '1根 (200g)', calories: 30, protein: 1.6, carbs: 5.8, fat: 0.2 },
  { id: 'lettuce', name: '生菜', category: '蔬菜', serving: '1碗 (100g)', calories: 15, protein: 1.2, carbs: 2.5, fat: 0.2 },
  { id: 'bell-pepper', name: '甜椒', category: '蔬菜', serving: '1个 (150g)', calories: 39, protein: 1.5, carbs: 8, fat: 0.3 },
  { id: 'celery', name: '芹菜', category: '蔬菜', serving: '1根 (100g)', calories: 16, protein: 0.7, carbs: 3, fat: 0.2 },
  { id: 'mushroom', name: '蘑菇', category: '蔬菜', serving: '1碗 (100g)', calories: 24, protein: 3, carbs: 3.6, fat: 0.3 },
  { id: 'kale', name: '羽衣甘蓝', category: '蔬菜', serving: '1碗 (100g)', calories: 49, protein: 4.3, carbs: 9, fat: 0.9 },
  { id: 'eggplant', name: '茄子', category: '蔬菜', serving: '1根 (200g)', calories: 48, protein: 2, carbs: 10, fat: 0.4 },
  { id: 'pumpkin', name: '南瓜', category: '蔬菜', serving: '1碗 (200g)', calories: 52, protein: 2, carbs: 12, fat: 0.2 },

  // ========== 水果 ==========
  { id: 'banana', name: '香蕉', category: '水果', serving: '1根 (120g)', calories: 107, protein: 1.3, carbs: 27, fat: 0.4 },
  { id: 'apple', name: '苹果', category: '水果', serving: '1个 (200g)', calories: 104, protein: 0.5, carbs: 28, fat: 0.3 },
  { id: 'orange', name: '橙子', category: '水果', serving: '1个 (200g)', calories: 94, protein: 1.8, carbs: 23, fat: 0.2 },
  { id: 'blueberry', name: '蓝莓', category: '水果', serving: '1碗 (150g)', calories: 86, protein: 1.1, carbs: 22, fat: 0.5 },
  { id: 'grape', name: '葡萄', category: '水果', serving: '1串 (200g)', calories: 138, protein: 1.4, carbs: 36, fat: 0.4 },
  { id: 'kiwi', name: '猕猴桃', category: '水果', serving: '2个 (150g)', calories: 92, protein: 1.7, carbs: 22, fat: 0.8 },
  { id: 'watermelon', name: '西瓜', category: '水果', serving: '1片 (300g)', calories: 96, protein: 1.8, carbs: 22, fat: 0.3 },
  { id: 'strawberry', name: '草莓', category: '水果', serving: '1碗 (150g)', calories: 48, protein: 1, carbs: 11, fat: 0.4 },
  { id: 'avocado', name: '牛油果', category: '水果', serving: '半个 (75g)', calories: 120, protein: 1.5, carbs: 6.5, fat: 11 },

  // ========== 坚果 ==========
  { id: 'almond', name: '杏仁', category: '坚果', serving: '1小把 (30g)', calories: 174, protein: 6.3, carbs: 6, fat: 15 },
  { id: 'walnut', name: '核桃', category: '坚果', serving: '1小把 (30g)', calories: 196, protein: 4.6, carbs: 4, fat: 19.5 },
  { id: 'peanut', name: '花生', category: '坚果', serving: '1小把 (30g)', calories: 170, protein: 7.7, carbs: 4.8, fat: 14.7 },
  { id: 'cashew', name: '腰果', category: '坚果', serving: '1小把 (30g)', calories: 166, protein: 5.4, carbs: 9, fat: 13 },
  { id: 'peanut-butter', name: '花生酱', category: '坚果', serving: '1勺 (20g)', calories: 118, protein: 5, carbs: 3.6, fat: 10 },
  { id: 'chia-seed', name: '奇亚籽', category: '坚果', serving: '1勺 (15g)', calories: 73, protein: 2.5, carbs: 6.3, fat: 4.7 },

  // ========== 补剂/运动食品 ==========
  { id: 'whey-protein', name: '乳清蛋白粉', category: '补剂', serving: '1勺 (30g)', calories: 116, protein: 24, carbs: 2, fat: 1.5 },
  { id: 'creatine', name: '一水肌酸', category: '补剂', serving: '5g', calories: 0, protein: 0, carbs: 0, fat: 0 },
  { id: 'energy-gel', name: '能量胶', category: '补剂', serving: '1包 (40g)', calories: 100, protein: 0, carbs: 25, fat: 0 },
  { id: 'sports-drink', name: '运动饮料', category: '补剂', serving: '1瓶 (500ml)', calories: 120, protein: 0, carbs: 30, fat: 0 },
  { id: 'protein-bar', name: '蛋白棒', category: '补剂', serving: '1根 (60g)', calories: 220, protein: 20, carbs: 20, fat: 8 },
  { id: 'bcaa', name: 'BCAA支链氨基酸', category: '补剂', serving: '10g', calories: 40, protein: 0, carbs: 0, fat: 0 },

  // ========== 饮品 ==========
  { id: 'chocolate-milk', name: '巧克力牛奶', category: '饮品', serving: '1杯 (250ml)', calories: 208, protein: 8.5, carbs: 28, fat: 7 },
  { id: 'coconut-water', name: '椰子水', category: '饮品', serving: '1杯 (250ml)', calories: 48, protein: 0.5, carbs: 11, fat: 0 },
  { id: 'coffee-black', name: '黑咖啡', category: '饮品', serving: '1杯 (250ml)', calories: 5, protein: 0.3, carbs: 0, fat: 0 },
  { id: 'green-tea', name: '绿茶', category: '饮品', serving: '1杯 (250ml)', calories: 0, protein: 0, carbs: 0, fat: 0 },

  // ========== 调料/油脂 ==========
  { id: 'olive-oil', name: '橄榄油', category: '调料', serving: '1勺 (10g)', calories: 90, protein: 0, carbs: 0, fat: 10 },
  { id: 'honey', name: '蜂蜜', category: '调料', serving: '1勺 (15g)', calories: 46, protein: 0, carbs: 12.3, fat: 0 },
]

export const FOOD_CATEGORIES = [
  { value: '全部' as const, label: '全部', icon: '📋' },
  { value: '主食' as const, label: '主食', icon: '🍚' },
  { value: '肉类' as const, label: '肉类/蛋', icon: '🥩' },
  { value: '蛋奶' as const, label: '蛋奶', icon: '🥛' },
  { value: '豆制品' as const, label: '豆制品', icon: '🫘' },
  { value: '蔬菜' as const, label: '蔬菜', icon: '🥬' },
  { value: '水果' as const, label: '水果', icon: '🍎' },
  { value: '坚果' as const, label: '坚果', icon: '🥜' },
  { value: '补剂' as const, label: '补剂', icon: '💊' },
  { value: '饮品' as const, label: '饮品', icon: '🥤' },
  { value: '调料' as const, label: '调料', icon: '🧂' },
]
