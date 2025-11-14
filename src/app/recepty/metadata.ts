import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: siteConfig.metadata.title.recipes,
    description: siteConfig.metadata.description.recipes,
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
    openGraph: {
        title: siteConfig.metadata.title.og.recipes,
        description: siteConfig.metadata.description.og.recipes,
        type: 'website',
        locale: 'ru_RU',
        siteName: siteConfig.metadata.name,
        url: `${siteConfig.url.current}${siteConfig.paths.recipes}`
    },
    alternates: {
        canonical: `${siteConfig.url.current}${siteConfig.paths.recipes}`
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
    }
};
