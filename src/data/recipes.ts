export enum Unit {
  g = 'г',
  kg = 'кг',
  ml = 'мл',
  l = 'л',
  pcs = 'шт',
  tbsp = 'ст.л.',
  tsp = 'ч.л.',
  pinch = 'щепотка',
  to_taste = 'по вкусу',
  kcal = 'ккал'
}

// Интерфейс для питательной ценности
export interface Nutrition {
  calories: { value: number; unit: Unit };
  protein: { value: number; unit: Unit };
  fat: { value: number; unit: Unit };
  carbs: { value: number; unit: Unit };
}

// Интерфейс для рецепта
export interface Recipe {
  id: number;
  name: string;
  title: string;
  description: string;
  cookTime: string;
  difficulty: string;
  nutrition: Nutrition;
  cuisine: string;
  servings: number;
  ingredients: Array<{
    name: string;
    amount: number;
    unit: Unit;
  }>;
  steps: Array<{
    title: string;
    text: string;
    image?: string;
  }>;
  imageMain: string;
  categories: string[];
  rating: number;
  reviews: number;
  dishCategoriesList: Record<string, { id: string; title: string }>;
  dishCategoriesSubList: Record<string, { id: string; title: string }>;
  cuisineCategoriesList: Record<string, { id: string; title: string }>;
  dietCategoriesList: Record<string, { id: string; title: string }>;
  link?: string;
  videoUrl?: string;
}

// Рецепты будут импортированы позже
// export const recipes: Record<number, Recipe> = {};
