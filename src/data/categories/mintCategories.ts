// Типы для категорий мяты
import {BaseCategory} from "@/data/categories/type";

type MintCategories = {
    'est': BaseCategory;
    'net': BaseCategory;
};

// Наличие мяты
export const mintCategories: MintCategories = {
    'est': {
        id: 'est',
        title: 'Есть'
    },
    'net': {
        id: 'net',
        title: 'Нет'
    }
};
