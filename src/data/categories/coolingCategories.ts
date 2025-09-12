// Типы для категорий холодка
import {BaseCategory} from "@/data/categories/type";

type CoolingCategories = {
    'net': BaseCategory;
    'legkiy-kholod': BaseCategory;
    'silnyy-kholod': BaseCategory;
};

// Наличие холодка
export const coolingCategories: CoolingCategories = {
    'net': {
        id: 'net',
        title: 'Нет'
    },
    'legkiy-kholod': {
        id: 'legkiy-kholod',
        title: 'Лёгкий холод'
    },
    'silnyy-kholod': {
        id: 'silnyy-kholod',
        title: 'Сильный холод'
    }
};
