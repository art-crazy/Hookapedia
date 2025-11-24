import { siteConfig } from '@/config/site';
import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata({
    title: `История кальяна: от древности до наших дней | ${siteConfig.metadata.name}`,
    description: 'История кальяна: происхождение, эволюция, традиции разных стран. Узнайте как кальян появился и как стал популярным в мире.',
    url: `${siteConfig.url.current}/istoriya`,
    type: 'article',
    keywords: [
        'история кальяна',
        'происхождение кальяна',
        'традиции кальяна',
        'кальянная культура',
        'история табака',
        'восточные традиции'
    ],
    ogTitle: `История кальяна | ${siteConfig.metadata.name}`,
    ogDescription: 'История кальяна: от древности до наших дней',
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
});
