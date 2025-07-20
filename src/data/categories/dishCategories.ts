import {BaseCategory} from "@/data/categories/type";
type Subcategory = BaseCategory;

type CategoryWithSubcategories = BaseCategory & {
    subcategories: {
        [key: string]: Subcategory;
    };
};

// Типы для категорий блюд
type DishCategories = {
    breakfasts: CategoryWithSubcategories;
    appetizers: CategoryWithSubcategories;
    'main-dishes': CategoryWithSubcategories;
    pasta: CategoryWithSubcategories;
    pizza: CategoryWithSubcategories;
    risotto: CategoryWithSubcategories;
    salads: CategoryWithSubcategories;
    sauces: CategoryWithSubcategories;
    marinades: CategoryWithSubcategories;
    'baking-desserts': CategoryWithSubcategories;
    preparations: CategoryWithSubcategories;
    soups: CategoryWithSubcategories;
    drinks: CategoryWithSubcategories;
    'fast-slow-cooking': CategoryWithSubcategories;
    'season-mood-holiday': CategoryWithSubcategories;
    'meals-time': CategoryWithSubcategories;
};

// Категории блюд (уровень 1)
export const dishCategories: DishCategories = {
    breakfasts: {
        id: 'breakfasts',
        title: 'Завтраки',
        subcategories: {
            porridge: {
                id: 'porridge',
                title: 'Каши'
            },
            eggs: {
                id: 'eggs',
                title: 'Из яиц'
            },
            'muesli-granola': {
                id: 'muesli-granola',
                title: 'Мюсли и гранола'
            },
            'syrniki-casseroles': {
                id: 'syrniki-casseroles',
                title: 'Сырники и запеканки'
            },
            'vegetable-dishes': {
                id: 'vegetable-dishes',
                title: 'Овощные блюда'
            }
        }
    },
    appetizers: {
        id: 'appetizers',
        title: 'Закуски',
        subcategories: {
            hot: {
                id: 'hot',
                title: 'Горячие закуски'
            },
            cold: {
                id: 'cold',
                title: 'Холодные закуски'
            },
            'drinks-snacks': {
                id: 'drinks-snacks',
                title: 'Закуски к напиткам'
            },
            'fast-food': {
                id: 'fast-food',
                title: 'Фастфуд'
            },
            festive: {
                id: 'festive',
                title: 'Праздничные закуски'
            },
            'picnic-snacks': {
                id: 'picnic-snacks',
                title: 'Лёгкие закуски для пикника'
            }
        }
    },
    'main-dishes': {
        id: 'main-dishes',
        title: 'Основные блюда',
        subcategories: {
            lamb: {
                id: 'lamb',
                title: 'Блюда из баранины'
            },
            beef: {
                id: 'beef',
                title: 'Блюда из говядины'
            },
            chicken: {
                id: 'chicken',
                title: 'Блюда из курицы'
            },
            'mixed-meat-poultry': {
                id: 'mixed-meat-poultry',
                title: 'Блюда из мяса и птицы'
            },
            seafood: {
                id: 'seafood',
                title: 'Блюда из морепродуктов'
            },
            vegetable: {
                id: 'vegetable',
                title: 'Блюда из овощей'
            },
            fish: {
                id: 'fish',
                title: 'Блюда из рыбы'
            },
            liver: {
                id: 'liver',
                title: 'Блюда с печенью'
            },
            rice: {
                id: 'rice',
                title: 'Блюда с рисом'
            },
            mince: {
                id: 'mince',
                title: 'Блюда с фаршем'
            },
            garnishes: {
                id: 'garnishes',
                title: 'Гарниры и дополнительные блюда'
            },
            shashlik: {
                id: 'shashlik',
                title: 'Шашлыки'
            },
            'grill-barbecue': {
                id: 'grill-barbecue',
                title: 'Гриль/барбекю'
            }
        }
    },
    pasta: {
        id: 'pasta',
        title: 'Паста',
        subcategories: {
            pasta: {
                id: 'pasta',
                title: 'Паста'
            },
            macaroni: {
                id: 'macaroni',
                title: 'Макароны'
            }
        }
    },
    pizza: {
        id: 'pizza',
        title: 'Пицца',
        subcategories: {
            pizza: {
                id: 'pizza',
                title: 'Пицца'
            },
            dough: {
                id: 'dough',
                title: 'Тесто для пиццы'
            }
        }
    },
    risotto: {
        id: 'risotto',
        title: 'Ризотто',
        subcategories: {
            risotto: {
                id: 'risotto',
                title: 'Ризотто'
            }
        }
    },
    salads: {
        id: 'salads',
        title: 'Салаты',
        subcategories: {
            vegetarian: {
                id: 'vegetarian',
                title: 'Вегетарианские салаты'
            },
            'vegan-fasting': {
                id: 'vegan-fasting',
                title: 'Веганские и постные салаты'
            },
            classic: {
                id: 'classic',
                title: 'Классические салаты'
            },
            'meat-fish': {
                id: 'meat-fish',
                title: 'Мясные и рыбные салаты'
            },
            chicken: {
                id: 'chicken',
                title: 'Салаты с курицей'
            },
            seafood: {
                id: 'seafood',
                title: 'Салаты с морепродуктами и рыбой'
            },
            mayo: {
                id: 'mayo',
                title: 'Салаты с майонезом'
            },
            'fruit-veggie': {
                id: 'fruit-veggie',
                title: 'Салаты с овощами и фруктами'
            },
            'layered-festive': {
                id: 'layered-festive',
                title: 'Слоеные и праздничные салаты'
            },
            korean: {
                id: 'korean',
                title: 'Корейские салаты'
            },
            spicy: {
                id: 'spicy',
                title: 'Острые салаты'
            }
        }
    },
    sauces: {
        id: 'sauces',
        title: 'Соусы',
        subcategories: {
            fish: {
                id: 'fish',
                title: 'Соусы к рыбе'
            },
            meat: {
                id: 'meat',
                title: 'Соусы к мясу'
            },
            poultry: {
                id: 'poultry',
                title: 'Соусы к птице'
            },
            salad: {
                id: 'salad',
                title: 'К салату'
            },
            sweet: {
                id: 'sweet',
                title: 'Сладкие соусы'
            }
        }
    },
    marinades: {
        id: 'marinades',
        title: 'Маринады',
        subcategories: {
            pork: {
                id: 'pork',
                title: 'Маринад для свинины'
            },
            chicken: {
                id: 'chicken',
                title: 'Маринад для курицы'
            },
            fish: {
                id: 'fish',
                title: 'Маринад для рыбы'
            },
            'soy-sauce': {
                id: 'soy-sauce',
                title: 'Маринад с соевым соусом'
            },
            beef: {
                id: 'beef',
                title: 'Маринад для говядины'
            },
            kefir: {
                id: 'kefir',
                title: 'Маринад на кефире'
            }
        }
    },
    'baking-desserts': {
        id: 'baking-desserts',
        title: 'Выпечка и десерты',
        subcategories: {
            pies: {
                id: 'pies',
                title: 'Пироги'
            },
            cakes: {
                id: 'cakes',
                title: 'Торты'
            },
            cookies: {
                id: 'cookies',
                title: 'Печенье'
            },
            gingerbread: {
                id: 'gingerbread',
                title: 'Пряники'
            },
            marmalade: {
                id: 'marmalade',
                title: 'Мармелад'
            },
            'no-bake': {
                id: 'no-bake',
                title: 'Десерты без выпечки'
            },
            curd: {
                id: 'curd',
                title: 'Творожные десерты'
            },
            pancakes: {
                id: 'pancakes',
                title: 'Блины'
            },
            fritters: {
                id: 'fritters',
                title: 'Оладьи'
            },
            muffins: {
                id: 'muffins',
                title: 'Кексы'
            },
            cupcakes: {
                id: 'cupcakes',
                title: 'Маффины'
            },
            'baking-with-curd': {
                id: 'baking-with-curd',
                title: 'Выпечка с творогом'
            },
            buns: {
                id: 'buns',
                title: 'Булочки'
            },
            bread: {
                id: 'bread',
                title: 'Хлеб'
            },
            'vegan-desserts': {
                id: 'vegan-desserts',
                title: 'Веганские десерты'
            },
            'homemade-ice-cream': {
                id: 'homemade-ice-cream',
                title: 'Домашнее мороженое и сорбеты'
            }
        }
    },
    preparations: {
        id: 'preparations',
        title: 'Заготовки',
        subcategories: {
            jams: {
                id: 'jams',
                title: 'Варенье и джемы'
            },
            'vegetables-for-winter': {
                id: 'vegetables-for-winter',
                title: 'Овощи на зиму'
            },
            'pickles-cucumbers': {
                id: 'pickles-cucumbers',
                title: 'Огурцы'
            },
            mushrooms: {
                id: 'mushrooms',
                title: 'Грибы'
            },
            'salads-etc': {
                id: 'salads-etc',
                title: 'Салаты и прочее'
            }
        }
    },
    soups: {
        id: 'soups',
        title: 'Супы',
        subcategories: {
            borscht: {
                id: 'borscht',
                title: 'Борщи и похожие супы'
            },
            okroshka: {
                id: 'okroshka',
                title: 'Окрошки'
            },
            solyanka: {
                id: 'solyanka',
                title: 'Солянки'
            },
            'cream-puree': {
                id: 'cream-puree',
                title: 'Крема и пюре'
            },
            'meat-vegetable': {
                id: 'meat-vegetable',
                title: 'Мясные и овощные'
            },
            fish: {
                id: 'fish',
                title: 'Рыбные супы'
            }
        }
    },
    drinks: {
        id: 'drinks',
        title: 'Напитки',
        subcategories: {
            juices: {
                id: 'juices',
                title: 'Соки'
            },
            compotes: {
                id: 'compotes',
                title: 'Компоты'
            },
            smoothies: {
                id: 'smoothies',
                title: 'Смузи'
            },
            cocktails: {
                id: 'cocktails',
                title: 'Коктейли'
            },
            'coffee-tea': {
                id: 'coffee-tea',
                title: 'Кофе и чай'
            },
            lemonade: {
                id: 'lemonade',
                title: 'Освежающие напитки и лимонады'
            }
        }
    },
    'fast-slow-cooking': {
        id: 'fast-slow-cooking',
        title: 'Время приготовления',
        subcategories: {
            fast: {
                id: 'fast',
                title: 'Быстрые блюда (<30 минут)'
            },
            slow: {
                id: 'slow',
                title: 'Медленное приготовление (тушение, томление)'
            }
        }
    },
    'season-mood-holiday': {
        id: 'season-mood-holiday',
        title: 'Сезон, настроение, праздник',
        subcategories: {
            winter: {
                id: 'winter',
                title: 'Зима'
            },
            spring: {
                id: 'spring',
                title: 'Весна'
            },
            summer: {
                id: 'summer',
                title: 'Лето'
            },
            autumn: {
                id: 'autumn',
                title: 'Осень'
            },
            christmas: {
                id: 'christmas',
                title: 'Рождество'
            },
            'new-year': {
                id: 'new-year',
                title: 'Новый год'
            },
            valentines: {
                id: 'valentines',
                title: 'День всех влюблённых'
            },
            easter: {
                id: 'easter',
                title: 'Пасха'
            },
            'mood-happy': {
                id: 'mood-happy',
                title: 'Праздничное настроение'
            },
            'mood-comfort': {
                id: 'mood-comfort',
                title: 'Комфортное настроение'
            },
            'mood-energetic': {
                id: 'mood-energetic',
                title: 'Энергичное настроение'
            }
        }
    },
    'meals-time': {
        id: 'meals-time',
        title: 'Время приёма пищи',
        subcategories: {
            breakfast: {
                id: 'breakfast',
                title: 'Завтрак'
            },
            lunch: {
                id: 'lunch',
                title: 'Обед'
            },
            dinner: {
                id: 'dinner',
                title: 'Ужин'
            },
            snack: {
                id: 'snack',
                title: 'Перекус'
            }
        }
    }
};
