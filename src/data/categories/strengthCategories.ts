// Типы для категорий крепости
import {BaseCategory} from "@/data/categories/type";

type StrengthCategories = {
    'legkaya-krepost': BaseCategory;
    'srednyaya-krepost': BaseCategory;
    'krepkaya-krepost': BaseCategory;
};

// Крепость
export const strengthCategories: StrengthCategories = {
    'legkaya-krepost': {
        id: 'legkaya-krepost',
        title: 'Лёгкая'
    },
    'srednyaya-krepost': {
        id: 'srednyaya-krepost',
        title: 'Средняя'
    },
    'krepkaya-krepost': {
        id: 'krepkaya-krepost',
        title: 'Крепкая'
    }
};
