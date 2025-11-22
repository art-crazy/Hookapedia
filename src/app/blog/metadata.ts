import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: `Блог о кальянах: статьи, советы, гайды | ${siteConfig.metadata.name}`,
    description: 'Полезные статьи о кальянах: как выбрать табак, секреты забивки, обзоры новинок, советы по уходу за кальяном. Всё что нужно знать о кальянной культуре.',
    keywords: [
        'блог о кальянах',
        'статьи про кальян',
        'советы по кальяну',
        'как выбрать табак',
        'забивка кальяна',
        'кальянная культура',
        'обзоры табака',
        'гайды по кальяну'
    ],
    openGraph: {
        title: `Блог о кальянах | ${siteConfig.metadata.name}`,
        description: 'Полезные статьи, советы и гайды о кальянах',
        type: 'website',
        locale: 'ru_RU',
        siteName: siteConfig.metadata.name,
        url: `${siteConfig.url.current}/blog`
    },
    alternates: {
        canonical: `${siteConfig.url.current}/blog`
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
};
