import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { notFound } from 'next/navigation';
import {strengthCategories} from "@/data/categories/strengthCategories";
import {flavorCategoryCategories} from "@/data/categories/flavorCategoryCategories";
import {coolingCategories} from "@/data/categories/coolingCategories";
import {mintCategories} from "@/data/categories/mintCategories";
import { buildMetadata } from '@/utils/metadata';

type Props = {
  params: Promise<{ filters: string[] }>
};

type BaseCategory = {
  id: string;
  title: string;
};

const categoryMaps = {
  strength: strengthCategories as Record<string, BaseCategory>,
  flavor: flavorCategoryCategories as Record<string, BaseCategory>,
  cooling: coolingCategories as Record<string, BaseCategory>,
  mint: mintCategories as Record<string, BaseCategory>
};

function getCategoryTitle(filter: string): string | undefined {
  for (const [, categories] of Object.entries(categoryMaps)) {
    if (filter in categories) {
      return categories[filter].title;
    }
  }
  return undefined;
}

function generateMetadataForFilters(filters: string[]): {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  keywords: string[];
} {
  const currentPath = {
    strength: filters.find(filter => filter in strengthCategories),
    flavor: filters.find(filter => filter in flavorCategoryCategories),
    cooling: filters.find(filter => filter in coolingCategories),
    mint: filters.find(filter => filter in mintCategories)
  };

  const titles = {
    strength: currentPath.strength ? getCategoryTitle(currentPath.strength) : undefined,
    flavor: currentPath.flavor ? getCategoryTitle(currentPath.flavor) : undefined,
    cooling: currentPath.cooling ? getCategoryTitle(currentPath.cooling) : undefined,
    mint: currentPath.mint ? getCategoryTitle(currentPath.mint) : undefined
  };

  // Базовые ключевые слова
  const baseKeywords = ['рецепты кальянов', 'миксы табака', 'забивка кальяна'];

  // Проверяем наличие нескольких фильтров
  const hasMultipleFilters = Object.values(currentPath).filter(Boolean).length > 1;

  // Если есть несколько фильтров, используем комбинированный формат
  if (hasMultipleFilters) {
    const parts = [
      titles.strength,
      titles.flavor,
      titles.cooling,
      titles.mint
    ].filter(Boolean);

    if (parts.length > 0) {
      // Создаём уникальное описание на основе комбинации фильтров
      const strengthText = titles.strength ? titles.strength.toLowerCase() : '';
      const flavorText = titles.flavor ? titles.flavor.toLowerCase().replace(' вкус', '') : '';
      const coolingText = titles.cooling ? titles.cooling.toLowerCase() : '';
      const mintText = titles.mint ? titles.mint.toLowerCase() : '';

      // Формируем естественное описание
      let naturalDescription = 'Подборка рецептов кальянов';

      if (strengthText) {
        naturalDescription += ` ${strengthText}`;
      }
      if (flavorText) {
        naturalDescription += ` с ${flavorText} вкусом`;
      }
      if (coolingText) {
        naturalDescription += `, ${coolingText}`;
      }
      if (mintText) {
        naturalDescription += `, ${mintText}`;
      }

      naturalDescription += '. Проверенные миксы табака с точными пропорциями и пошаговыми инструкциями для идеальной забивки.';

      // Генерируем уникальные ключевые слова на основе комбинации
      const dynamicKeywords = [
        ...baseKeywords,
        strengthText && `${strengthText} кальян`,
        strengthText && `табак ${strengthText}`,
        flavorText && `${flavorText} табак`,
        flavorText && `кальян с ${flavorText} вкусом`,
        flavorText && strengthText && `${flavorText} ${strengthText} кальян`,
        flavorText && strengthText && `${strengthText} ${flavorText} микс`,
        coolingText && `кальян ${coolingText}`,
        coolingText && `миксы ${coolingText}`,
        mintText && `кальян ${mintText}`,
        mintText && `забивка ${mintText}`,
        flavorText && mintText && `${flavorText} ${mintText}`,
        flavorText && coolingText && `${flavorText} кальян ${coolingText}`,
        strengthText && coolingText && `${strengthText} кальян ${coolingText}`,
        // Полная комбинация
        parts.length >= 3 && `${parts.slice(0, 2).map(p => p?.toLowerCase()).filter(Boolean).join(' ')} кальян`,
      ].filter(Boolean) as string[];

      const combinedTitle = `${parts.join(', ')} — рецепты кальянов | ${siteConfig.metadata.name}`;

      // OG Title более краткий
      const ogTitle = parts.length > 2
        ? `${parts.slice(0, 2).join(', ')}: рецепты кальянов`
        : `${parts.join(', ')}: лучшие рецепты кальянов`;

      return {
        title: combinedTitle,
        description: naturalDescription,
        ogTitle,
        ogDescription: naturalDescription,
        keywords: dynamicKeywords
      };
    }
  }

  // Если только один фильтр, используем соответствующий формат
  if (titles.strength) {
    const strengthLower = titles.strength.toLowerCase();
    return {
      title: `${titles.strength} — рецепты кальянов с детальными инструкциями | ${siteConfig.metadata.name}`,
      description: `${titles.strength} кальян: подборка разнообразных рецептов. Лучшие миксы табака с пошаговыми инструкциями для домашнего кальяна.`,
      ogTitle: `${titles.strength}: лучшие рецепты кальянов`,
      ogDescription: `Ищете рецепты кальянов ${strengthLower}? Здесь собраны проверенные миксы табака — просто и со вкусом.`,
      keywords: [
        ...baseKeywords,
        `${strengthLower} кальян`,
        `табак ${strengthLower}`,
        `как забить ${strengthLower} кальян`,
        `миксы ${strengthLower}`,
        `рецепты ${strengthLower} кальяна`
      ]
    };
  }

  if (titles.flavor) {
    const flavorLower = titles.flavor.toLowerCase();
    const flavorClean = flavorLower.replace(' вкус', '');
    return {
      title: `${titles.flavor} — вкусные рецепты кальянов на каждый день | ${siteConfig.metadata.name}`,
      description: `Подборка лучших рецептов кальянов в категории «${titles.flavor}»: оригинальные миксы табака для домашнего кальяна. Забивай легко — удивляй вкусом.`,
      ogTitle: `${titles.flavor} — лучшие рецепты кальянов`,
      ogDescription: `Откройте для себя проверенные рецепты кальянов в категории «${titles.flavor}»: вкусно, доступно и просто.`,
      keywords: [
        ...baseKeywords,
        `${flavorClean} табак`,
        `${flavorClean} кальян`,
        `${flavorLower} рецепты`,
        `кальян с ${flavorClean}`,
        `миксы ${flavorClean} табака`
      ]
    };
  }

  if (titles.cooling) {
    const coolingLower = titles.cooling.toLowerCase();
    return {
      title: `${titles.cooling} — лучшие рецепты кальянов с подробным описанием | ${siteConfig.metadata.name}`,
      description: `${titles.cooling} — Вкусные рецепты кальянов: от классических до оригинальных миксов табака. Забивай быстро и разнообразно с нашими проверенными рецептами.`,
      ogTitle: `Лучшие рецепты кальянов: ${titles.cooling}`,
      ogDescription: `Ищете кальян ${coolingLower}? Смотрите проверенные рецепты с пошаговыми инструкциями и советами.`,
      keywords: [
        ...baseKeywords,
        `кальян ${coolingLower}`,
        `миксы ${coolingLower}`,
        `табак ${coolingLower}`,
        `забивка ${coolingLower}`,
        `рецепты кальяна ${coolingLower}`
      ]
    };
  }

  if (titles.mint) {
    const mintLower = titles.mint.toLowerCase();
    return {
      title: `${titles.mint} — лучшие рецепты кальянов с подробным описанием | ${siteConfig.metadata.name}`,
      description: `${titles.mint} — Вкусные рецепты кальянов: от классических до оригинальных миксов табака. Забивай быстро и разнообразно с нашими проверенными рецептами.`,
      ogTitle: `Лучшие рецепты кальянов: ${titles.mint}`,
      ogDescription: `Ищете рецепты кальяна ${mintLower}? Смотрите проверенные рецепты с пошаговыми инструкциями и советами.`,
      keywords: [
        ...baseKeywords,
        `кальян ${mintLower}`,
        `миксы ${mintLower}`,
        `табак ${mintLower}`,
        `забивка ${mintLower}`,
        mintLower === 'с мятой' ? 'мятный кальян' : 'кальян без мяты',
        mintLower === 'с мятой' ? 'рецепты с мятой' : 'рецепты без мяты'
      ]
    };
  }

  // Если ничего не найдено
  notFound();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const filters = Array.isArray(resolvedParams.filters) ? resolvedParams.filters : [resolvedParams.filters];
  const metadata = generateMetadataForFilters(filters);
  const canonicalUrl = `${siteConfig.url.current}/recepty/${filters.join('/')}`;

  return buildMetadata({
    title: metadata.title,
    description: metadata.description,
    url: canonicalUrl,
    keywords: metadata.keywords,
    ogTitle: metadata.ogTitle,
    ogDescription: metadata.ogDescription,
  });
}
