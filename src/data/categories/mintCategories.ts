// Типы для категорий мяты
import {BaseCategory} from "@/data/categories/type";

type MintCategories = {
    's-myatoy': BaseCategory;
    'bez-myaty': BaseCategory;
};

// Наличие мяты
export const mintCategories: MintCategories = {
    's-myatoy': {
        id: 's-myatoy',
        title: 'Есть'
    },
    'bez-myaty': {
        id: 'bez-myaty',
        title: 'Нет'
    }
};
