// Типы для категорий холодка
import {BaseCategory} from "@/data/categories/type";

type CoolingCategories = {
    'none': BaseCategory;
    'light': BaseCategory;
    'strong': BaseCategory;
};

// Наличие холодка
export const coolingCategories: CoolingCategories = {
    'none': {
        id: 'none',
        title: 'Нет'
    },
    'light': {
        id: 'light',
        title: 'Лёгкий холод'
    },
    'strong': {
        id: 'strong',
        title: 'Сильный холод'
    }
};
