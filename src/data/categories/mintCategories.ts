// Типы для категорий мяты
import {BaseCategory} from "@/data/categories/type";

type MintCategories = {
    'yes': BaseCategory;
    'no': BaseCategory;
};

// Наличие мяты
export const mintCategories: MintCategories = {
    'yes': {
        id: 'yes',
        title: 'Есть'
    },
    'no': {
        id: 'no',
        title: 'Нет'
    }
};
