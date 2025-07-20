
// Типы для категорий диет
import {BaseCategory} from "@/data/categories/type";

type DietCategories = {
    'veganskaya-dieta': BaseCategory;
    'keto-dieta': BaseCategory;
    'paleo-dieta': BaseCategory;
    'vegetarianskaya-dieta': BaseCategory;
    'bezglyutenovaya-dieta': BaseCategory;
    'bezlaktoznaya-dieta': BaseCategory;
    'detskoe-menyu': BaseCategory;
    'nizkokaloriynaya-dieta': BaseCategory;
    'postnaya-eda': BaseCategory;
    'menyu-pri-diabete': BaseCategory;
    'nizkouglevodnaya-dieta': BaseCategory;
    'sredizemnomorskaya-dieta': BaseCategory;
    'detoks-dieta': BaseCategory;
};

// Диеты (уровень 3)
export const dietCategories: DietCategories = {
    'veganskaya-dieta': {
        id: 'veganskaya-dieta',
        title: 'Веганская диета'
    },
    'keto-dieta': {
        id: 'keto-dieta',
        title: 'Кето-диета'
    },
    'paleo-dieta': {
        id: 'paleo-dieta',
        title: 'Палео-диета'
    },
    'vegetarianskaya-dieta': {
        id: 'vegetarianskaya-dieta',
        title: 'Вегетарианская диета'
    },
    'bezglyutenovaya-dieta': {
        id: 'bezglyutenovaya-dieta',
        title: 'Безглютеновая диета'
    },
    'bezlaktoznaya-dieta': {
        id: 'bezlaktoznaya-dieta',
        title: 'Безлактозная диета'
    },
    'detskoe-menyu': {
        id: 'detskoe-menyu',
        title: 'Детское меню'
    },
    'nizkokaloriynaya-dieta': {
        id: 'nizkokaloriynaya-dieta',
        title: 'Низкокалорийная диета'
    },
    'postnaya-eda': {
        id: 'postnaya-eda',
        title: 'Постная еда'
    },
    'menyu-pri-diabete': {
        id: 'menyu-pri-diabete',
        title: 'Меню при диабете'
    },
    'nizkouglevodnaya-dieta': {
        id: 'nizkouglevodnaya-dieta',
        title: 'Низкоуглеводная диета'
    },
    'sredizemnomorskaya-dieta': {
        id: 'sredizemnomorskaya-dieta',
        title: 'Средиземноморская диета'
    },
    'detoks-dieta': {
        id: 'detoks-dieta',
        title: 'Детокс-диета'
    }
};
