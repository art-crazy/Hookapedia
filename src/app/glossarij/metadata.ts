import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: `Глоссарий кальянных терминов | ${siteConfig.metadata.name}`,
    description: 'Полный глоссарий кальянных терминов: крепость табака, холодок, форточка, бленд, моновкус, забивка и другие термины для начинающих и опытных кальянщиков.',
    keywords: ['глоссарий кальянных терминов', 'термины кальяна', 'кальянный сленг', 'что такое крепость табака', 'что такое холодок', 'форточка кальян', 'бленд табака', 'моновкус', 'забивка кальяна', 'кальянная терминология'],
    openGraph: {
        title: `Глоссарий кальянных терминов | ${siteConfig.metadata.name}`,
        description: 'Полный глоссарий кальянных терминов и определений для начинающих и опытных кальянщиков',
        type: "website",
        locale: "ru_RU",
        siteName: siteConfig.metadata.name,
        url: `${siteConfig.url.production}/glossarij`,
    },
    alternates: {
        canonical: `${siteConfig.url.production}/glossarij`,
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
    },
};
