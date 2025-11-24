import { Metadata } from 'next';
import { buildMetadata, DEFAULT_OG_IMAGE } from '@/utils/metadata';

const baseMetadata = buildMetadata({
    title: "Хукапедия — лучшие миксы табака и инструкции",
    description: "Соберите идеальный кальян: проверенные рецепты, пропорции, жаростойкость и советы по чашам.",
    url: "https://kalyany-mix.ru",
    image: DEFAULT_OG_IMAGE,
    keywords: [
        'рецепты кальянов',
        'миксы табака',
        'забивка кальяна',
        'кальян дома',
        'как забить кальян',
        'вкусы кальяна',
        'табак для кальяна',
        'кальянные миксы',
        'рецепты забивки',
        'пропорции табака',
        'жаростойкость табака',
        'чаши для кальяна',
        'кальянные рецепты',
        'табачные миксы',
        'кальянный микс'
    ],
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
