// Типы для категорий крепости
import {BaseCategory} from "@/data/categories/type";

type StrengthCategories = {
    'light': BaseCategory;
    'medium': BaseCategory;
    'strong': BaseCategory;
};

// Крепость
export const strengthCategories: StrengthCategories = {
    'light': {
        id: 'light',
        title: 'Лёгкая'
    },
    'medium': {
        id: 'medium',
        title: 'Средняя'
    },
    'strong': {
        id: 'strong',
        title: 'Крепкая'
    }
};
