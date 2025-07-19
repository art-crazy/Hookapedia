// Конфигурация сайта
export const siteConfig = {
    // Основные URL
    url: {
        // Производственный URL
        production: 'https://chto-prigotovit.ru',
        // URL для разработки
        development: 'http://localhost:3000',
        // Текущий URL (будет определен в зависимости от окружения)
        current: 'https://chto-prigotovit.ru'
    },

    // Пути сайта
    paths: {
        home: '/',
        recipes: '/recepty',
        blog: '/blog',
        faq: '/faq',
        history: '/istoriya',
        sitemap: '/sitemap.xml',
        sitemaps: {
            main: '/sitemaps/sitemap-main.xml',
            recipes: '/sitemaps/sitemap-recipes.xml',
            categories: '/sitemaps/sitemap-categories.xml',
            subcategories: '/sitemaps/sitemap-subcategories.xml',
            cuisines: '/sitemaps/sitemap-cuisines.xml',
            diets: '/sitemaps/sitemap-diets.xml',
            combinations: '/sitemaps/sitemap-combinations'
        }
    },

    // Метаданные сайта
    metadata: {
        name: 'Что приготовить сегодня',
        title: {
            default: 'Что приготовить сегодня — простые и вкусные рецепты на каждый день',
            recipes: 'Все рецепты на обед, завтрак и ужин. Найти, что приготовить',
            og: {
                default: 'Что приготовить сегодня — лучшие рецепты',
                recipes: 'Все рецепты на одном сайте'
            }
        },
        description: {
            default: 'Пошаговые рецепты на каждый день: супы, салаты, горячие блюда, выпечка, десерты. Завтраки, обеды, ужины. Быстрые, диетические и вегетарианские блюда. Кухни мира, калорийность, БЖУ.',
            recipes: 'Поиск рецептов по категориям, кухням мира и диетам. Тысячи проверенных рецептов с пошаговыми инструкциями: классика, современные тренды и кулинарные новинки на каждый день.',
            og: {
                default: 'Подборка популярных рецептов: от быстрых завтраков до сытных ужинов. Готовьте с удовольствием!',
                recipes: 'Собрание лучших рецептов: от простых до изысканных. Найдите идеальное блюдо для любого случая.'
            }
        }
    }
} as const;
