import { Recipe } from '@/types/recipe';
import { recipes } from '@/data';

export function getRelatedRecipes(currentRecipe: Recipe, limit: number = 3): Recipe[] {
  const allRecipes = Object.values(recipes) as Recipe[];

  // Фильтруем рецепты, исключая текущий
  const otherRecipes = allRecipes.filter(recipe => recipe.id !== currentRecipe.id);

  // Получаем ID категорий текущего рецепта
  const currentDiet = Object.values(currentRecipe.dietCategoriesList || {})[0]?.id;
  const currentDishCategory = Object.values(currentRecipe.dishCategoriesList || {})[0]?.id;
  const currentSubcategory = Object.values(currentRecipe.dishCategoriesSubList || {})[0]?.id;
  const currentCuisine = Object.values(currentRecipe.cuisineCategoriesList || {})[0]?.id;

  // Вычисляем релевантность для каждого рецепта
  const scoredRecipes = otherRecipes.map(recipe => {
    let score = 0;

    // Совпадение по крепости (diet)
    const recipeDiet = Object.values(recipe.dietCategoriesList || {})[0]?.id;
    if (recipeDiet && recipeDiet === currentDiet) {
      score += 3;
    }

    // Совпадение по холоду (dishCategory)
    const recipeDishCategory = Object.values(recipe.dishCategoriesList || {})[0]?.id;
    if (recipeDishCategory && recipeDishCategory === currentDishCategory) {
      score += 2;
    }

    // Совпадение по мяте (subcategory)
    const recipeSubcategory = Object.values(recipe.dishCategoriesSubList || {})[0]?.id;
    if (recipeSubcategory && recipeSubcategory === currentSubcategory) {
      score += 2;
    }

    // Совпадение по категории вкуса (cuisine)
    const recipeCuisine = Object.values(recipe.cuisineCategoriesList || {})[0]?.id;
    if (recipeCuisine && recipeCuisine === currentCuisine) {
      score += 4;
    }

    // Совпадение по общим категориям
    const currentCategories = new Set(currentRecipe.categories);
    const recipeCategories = new Set(recipe.categories);
    const commonCategories = [...currentCategories].filter(cat => recipeCategories.has(cat));
    score += commonCategories.length;

    return { recipe, score };
  });

  // Сортируем по релевантности и берём топ-N
  return scoredRecipes
    .filter(item => item.score > 0) // Только с хоть какой-то релевантностью
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.recipe);
}
