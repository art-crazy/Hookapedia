import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: siteConfig.metadata.title.default,
    description: siteConfig.metadata.description.default,
    keywords: "рецепты, кулинарные рецепты, пошаговые рецепты, рецепты на каждый день, быстрые рецепты, простые рецепты, рецепты для начинающих, рецепты супов, рецепты салатов, рецепты горячего, рецепты выпечки, рецепты десертов, диетические рецепты, вегетарианские рецепты, кухни мира, рецепты завтрака, рецепты обеда, рецепты ужина, калорийность блюд, БЖУ, советы по приготовлению, шеф-повар, кулинария",
    openGraph: {
        title: siteConfig.metadata.title.og.default,
        description: siteConfig.metadata.description.og.default,
        type: "website",
        locale: "ru_RU",
        siteName: siteConfig.metadata.name,
        url: siteConfig.url.production,
    },
    alternates: {
        canonical: siteConfig.url.production,
    },
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
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
