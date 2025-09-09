// Типы для категорий вкуса
import {BaseCategory} from "@/data/categories/type";

type FlavorCategoryCategories = {
    'fruits': BaseCategory;
    'berries': BaseCategory;
    'citrus': BaseCategory;
    'dessert': BaseCategory;
    'spicy': BaseCategory;
    'exotic': BaseCategory;
};

// Категории вкуса
export const flavorCategoryCategories: FlavorCategoryCategories = {
    'fruits': {
        id: 'fruits',
        title: 'Фрукты'
    },
    'berries': {
        id: 'berries',
        title: 'Ягоды'
    },
    'citrus': {
        id: 'citrus',
        title: 'Цитрусовые'
    },
    'dessert': {
        id: 'dessert',
        title: 'Десерты'
    },
    'spicy': {
        id: 'spicy',
        title: 'Пряности/травы'
    },
    'exotic': {
        id: 'exotic',
        title: 'Экзотика'
    }
};
