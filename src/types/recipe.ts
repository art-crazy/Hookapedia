import { Unit } from '@/data/recipes';

export interface RecipeStep {
  title: string;
  text: string;
  image?: string;
}

export interface Nutrition {
  calories: { value: number; unit: Unit };
  protein: { value: number; unit: Unit };
  fat: { value: number; unit: Unit };
  carbs: { value: number; unit: Unit };
}

export interface Recipe {
  id: number;
  title: string;
  name: string;
  description: string;
  dishCategoryId: number;
  subcategoryId: number;
  cuisineCategoryId: number;
  dietCategoryId: number;
  imageMain: string;
  cookTime: string;
  difficulty: string;
  rating: number;
  reviews: number;
  steps: RecipeStep[];
  nutrition: Nutrition;
  cuisine: string;
  servings: number;
  ingredients: Array<{
    name: string;
    amount: number;
    unit: Unit;
  }>;
  categories: string[];
  dishCategoriesList: Record<string, { id: string; title: string }>;
  dishCategoriesSubList: Record<string, { id: string; title: string }>;
  cuisineCategoriesList: Record<string, { id: string; title: string }>;
  dietCategoriesList: Record<string, { id: string; title: string }>;
  link?: string;
}

export interface RecipeResponse {
  items: Recipe[];
  total: number;
  page: number;
  limit: number;
  fallbackTriggered: boolean;
}

export interface RecipeFilters {
  page?: number;
  limit?: number;
  search?: string;
  flavor_category?: string;
  mint_category?: string;
  cooling_category?: string;
  strength_category?: string;
}
