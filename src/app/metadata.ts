import { Metadata } from 'next';
import { buildMetadata, DEFAULT_OG_IMAGE } from '@/utils/metadata';

const baseMetadata = buildMetadata({
    title: "Хукапедия — лучшие миксы табака и инструкции",
    description: "Соберите идеальный кальян: проверенные рецепты, пропорции, жаростойкость и советы по чашам.",
    url: "https://kalyany-mix.ru",
    image: DEFAULT_OG_IMAGE,
    keywords: "рецепты, кулинарные рецепты, пошаговые рецепты, рецепты на каждый день, быстрые рецепты, простые рецепты, рецепты для начинающих, рецепты супов, рецепты салатов, рецепты горячего, рецепты выпечки, рецепты десертов, диетические рецепты, вегетарианские рецепты, кухни мира, рецепты завтрака, рецепты обеда, рецепты ужина, калорийность блюд, БЖУ, советы по приготовлению, шеф-повар, кулинария",
});

export const metadata: Metadata = {
    ...baseMetadata,
    icons: {
        icon: [
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon.ico", type: "image/x-icon" },
            { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" }
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180" }
        ]
    },
    manifest: "/site.webmanifest",
};
