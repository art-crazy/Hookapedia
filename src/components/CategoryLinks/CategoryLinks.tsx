import Link from 'next/link';
import styles from './CategoryLinks.module.scss';
import { Recipe } from '@/types/recipe';

interface CategoryLinksProps {
  recipe: Recipe;
}

export const CategoryLinks = ({ recipe }: CategoryLinksProps) => {
  const categories = [];

  // Получаем категории из полей рецепта
  const dietCategories = Object.values(recipe.dietCategoriesList || {});
  const cuisineCategories = Object.values(recipe.cuisineCategoriesList || {});
  const dishCategories = Object.values(recipe.dishCategoriesList || {});
  const subcategories = Object.values(recipe.dishCategoriesSubList || {});

  // Добавляем категорию крепости (diet)
  if (dietCategories.length > 0) {
    const diet = dietCategories[0];
    categories.push({
      label: 'Крепость',
      title: diet.title,
      url: `/recepty/${diet.id}`,
    });
  }

  // Добавляем категорию холода (dish category)
  if (dishCategories.length > 0) {
    const dishCategory = dishCategories[0];
    const dietId = dietCategories[0]?.id || '';
    categories.push({
      label: 'Холодок',
      title: dishCategory.title,
      url: `/recepty/${dietId}/${dishCategory.id}`,
    });
  }

  // Добавляем категорию мяты (subcategory)
  if (subcategories.length > 0) {
    const subcategory = subcategories[0];
    const dietId = dietCategories[0]?.id || '';
    const dishCategoryId = dishCategories[0]?.id || '';
    categories.push({
      label: 'Мята',
      title: subcategory.title,
      url: `/recepty/${dietId}/${dishCategoryId}/${subcategory.id}`,
    });
  }

  // Добавляем категорию вкуса (cuisine)
  if (cuisineCategories.length > 0) {
    const cuisine = cuisineCategories[0];
    const dietId = dietCategories[0]?.id || '';
    const dishCategoryId = dishCategories[0]?.id || '';
    const subcategoryId = subcategories[0]?.id || '';
    categories.push({
      label: 'Вкус',
      title: cuisine.title,
      url: `/recepty/${dietId}/${dishCategoryId}/${subcategoryId}/${cuisine.id}`,
    });
  }

  if (categories.length === 0) return null;

  return (
    <section className={styles.categorySection}>
      <h2 className={styles.title}>Категории рецепта</h2>
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <div key={index} className={styles.categoryItem}>
            <span className={styles.label}>{category.label}:</span>
            <Link href={category.url} className={styles.link}>
              {category.title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
