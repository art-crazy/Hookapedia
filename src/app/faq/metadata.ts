import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: `Вопросы и ответы о кальянах - FAQ | ${siteConfig.metadata.name}`,
    description: 'Ответы на частые вопросы о кальянах: как выбрать табак, забивка, уход за кальяном, выбор чаши, угля и аксессуаров. Всё о кальянной культуре.',
    keywords: [
        'вопросы о кальянах',
        'FAQ кальян',
        'как забить кальян',
        'выбор табака',
        'уход за кальяном',
        'вопросы про кальян',
        'кальянные советы'
    ],
    openGraph: {
        title: `Вопросы и ответы о кальянах | ${siteConfig.metadata.name}`,
        description: 'Ответы на частые вопросы о кальянах, табаке и забивке',
        type: 'website',
        locale: 'ru_RU',
        siteName: siteConfig.metadata.name,
        url: `${siteConfig.url.current}/faq`
    },
    alternates: {
        canonical: `${siteConfig.url.current}/faq`
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
