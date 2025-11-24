import { siteConfig } from '@/config/site';
import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata({
    title: `Глоссарий кальянных терминов | ${siteConfig.metadata.name}`,
    description: 'Полный глоссарий кальянных терминов: крепость табака, холодок, форточка, бленд, моновкус, забивка и другие термины для начинающих и опытных кальянщиков.',
    url: `${siteConfig.url.current}/glossarij`,
    keywords: [
        'глоссарий кальянных терминов',
        'термины кальяна',
        'кальянный сленг',
        'что такое крепость табака',
        'что такое холодок',
        'форточка кальян',
        'бленд табака',
        'моновкус',
        'забивка кальяна',
        'кальянная терминология'
    ],
    ogTitle: `Глоссарий кальянных терминов | ${siteConfig.metadata.name}`,
    ogDescription: 'Полный глоссарий кальянных терминов и определений для начинающих и опытных кальянщиков',
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
    },
});
