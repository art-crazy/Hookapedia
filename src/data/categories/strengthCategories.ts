// Типы для категорий крепости
import {BaseCategory} from "@/data/categories/type";

type StrengthCategories = {
    'legkaya': BaseCategory;
    'srednyaya': BaseCategory;
    'krepkaya': BaseCategory;
};

// Крепость
export const strengthCategories: StrengthCategories = {
    'legkaya': {
        id: 'legkaya',
        title: 'Лёгкая'
    },
    'srednyaya': {
        id: 'srednyaya',
        title: 'Средняя'
    },
    'krepkaya': {
        id: 'krepkaya',
        title: 'Крепкая'
    }
};
