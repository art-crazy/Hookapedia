import { siteConfig } from '@/config/site';
import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata({
    title: `Вопросы и ответы о кальянах - FAQ | ${siteConfig.metadata.name}`,
    description: 'Ответы на частые вопросы о кальянах: как выбрать табак, забивка, уход за кальяном, выбор чаши, угля и аксессуаров. Всё о кальянной культуре.',
    url: `${siteConfig.url.current}/faq`,
    keywords: [
        'вопросы о кальянах',
        'FAQ кальян',
        'как забить кальян',
        'выбор табака',
        'уход за кальяном',
        'вопросы про кальян',
        'кальянные советы'
    ],
    ogTitle: `Вопросы и ответы о кальянах | ${siteConfig.metadata.name}`,
    ogDescription: 'Ответы на частые вопросы о кальянах, табаке и забивке',
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
