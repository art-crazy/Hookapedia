// Типы для категорий вкуса
import {BaseCategory} from "@/data/categories/type";

type FlavorCategoryCategories = {
    'frukty': BaseCategory;
    'yagody': BaseCategory;
    'tsitrusovye': BaseCategory;
    'deserty': BaseCategory;
    'pryanosti-travy': BaseCategory;
    'ekzotika': BaseCategory;
};

// Категории вкуса
export const flavorCategoryCategories: FlavorCategoryCategories = {
    'frukty': {
        id: 'frukty',
        title: 'Фрукты'
    },
    'yagody': {
        id: 'yagody',
        title: 'Ягоды'
    },
    'tsitrusovye': {
        id: 'tsitrusovye',
        title: 'Цитрусовые'
    },
    'deserty': {
        id: 'deserty',
        title: 'Десерты'
    },
    'pryanosti-travy': {
        id: 'pryanosti-travy',
        title: 'Пряности/травы'
    },
    'ekzotika': {
        id: 'ekzotika',
        title: 'Экзотика'
    }
};
