import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: `История кальяна: от древности до наших дней | ${siteConfig.metadata.name}`,
    description: 'История кальяна: происхождение, эволюция, традиции разных стран. Узнайте как кальян появился и как стал популярным в мире.',
    keywords: [
        'история кальяна',
        'происхождение кальяна',
        'традиции кальяна',
        'кальянная культура',
        'история табака',
        'восточные традиции'
    ],
    openGraph: {
        title: `История кальяна | ${siteConfig.metadata.name}`,
        description: 'История кальяна: от древности до наших дней',
        type: 'article',
        locale: 'ru_RU',
        siteName: siteConfig.metadata.name,
        url: `${siteConfig.url.current}/istoriya`
    },
    alternates: {
        canonical: `${siteConfig.url.current}/istoriya`
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
