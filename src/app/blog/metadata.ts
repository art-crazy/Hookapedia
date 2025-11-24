import { siteConfig } from '@/config/site';
import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata({
    title: `Блог о кальянах: статьи, советы, гайды | ${siteConfig.metadata.name}`,
    description: 'Полезные статьи о кальянах: как выбрать табак, секреты забивки, обзоры новинок, советы по уходу за кальяном. Всё что нужно знать о кальянной культуре.',
    url: `${siteConfig.url.current}/blog`,
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
    ogTitle: `Блог о кальянах | ${siteConfig.metadata.name}`,
    ogDescription: 'Полезные статьи, советы и гайды о кальянах',
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
