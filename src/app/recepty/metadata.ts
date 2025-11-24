import { siteConfig } from '@/config/site';
import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata({
    title: siteConfig.metadata.title.recipes,
    description: siteConfig.metadata.description.recipes,
    url: `${siteConfig.url.current}${siteConfig.paths.recipes}`,
    keywords: [
        'рецепты блюд',
        'поиск рецептов',
        'рецепты на каждый день',
        'рецепты на обед',
        'рецепты на ужин',
        'рецепты на завтрак',
        'кухни мира',
        'диетические рецепты',
        'вегетарианские рецепты',
        'быстрые рецепты',
        'простые рецепты',
        'пошаговые рецепты',
        'что приготовить',
        'идеи для ужина',
        'идеи для обеда',
        'идеи для завтрака'
    ],
});
