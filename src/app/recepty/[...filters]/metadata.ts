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
      const combinedTitle = `${parts.join('. ')} — лучшие рецепты кальянов с пошаговыми инструкциями | ${siteConfig.metadata.name}`;
      const combinedDescription = `${parts.join('. ')}. Все рецепты кальянов. Найди идеальный микс табака.`;
      return {
        title: combinedTitle,
        description: combinedDescription,
        ogTitle: combinedTitle,
        ogDescription: combinedDescription
      };
    }
  }

  // Если только один фильтр, используем соответствующий формат
  if (titles.strength) {
    return {
      title: `${titles.strength} — рецепты кальянов с детальными инструкциями | ${siteConfig.metadata.name}`,
      description: `${titles.strength} кальян: подборка разнообразных рецептов. Лучшие миксы табака с пошаговыми инструкциями.`,
      ogTitle: `${titles.strength}: лучшие рецепты кальянов`,
      ogDescription: `Ищете рецепты кальянов ${titles.strength}? Здесь собраны проверенные миксы табака — просто и со вкусом.`
    };
  }

  if (titles.flavor) {
    return {
      title: `${titles.flavor} — вкусные рецепты кальянов на каждый день | ${siteConfig.metadata.name}`,
      description: `Подборка лучших рецептов кальянов в категории «${titles.flavor}»: оригинальные миксы табака для домашнего кальяна. Забивай легко — удивляй вкусом.`,
      ogTitle: `${titles.flavor} — лучшие рецепты кальянов`,
      ogDescription: `Откройте для себя проверенные рецепты кальянов в категории «${titles.flavor}»: вкусно, доступно и просто.`
    };
  }

  if (titles.cooling) {
    return {
      title: `${titles.cooling} — лучшие рецепты кальянов с подробным описанием | ${siteConfig.metadata.name}`,
      description: `${titles.cooling} — Вкусные рецепты кальянов: от классических до оригинальных миксов табака. Забивай быстро и разнообразно с нашими проверенными рецептами.`,
      ogTitle: `Лучшие рецепты кальянов: ${titles.cooling}`,
      ogDescription: `Ищете ${titles.cooling}? Смотрите проверенные рецепты кальянов с пошаговыми инструкциями и советами.`
    };
  }

  if (titles.mint) {
    return {
      title: `${titles.mint} — лучшие рецепты кальянов с подробным описанием | ${siteConfig.metadata.name}`,
      description: `${titles.mint} мята — Вкусные рецепты кальянов: от классических до оригинальных миксов табака. Забивай быстро и разнообразно с нашими проверенными рецептами.`,
      ogTitle: `Лучшие рецепты кальянов: ${titles.mint} мята`,
      ogDescription: `Ищете рецепты с мятой? Смотрите проверенные рецепты кальянов с пошаговыми инструкциями и советами.`
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
    keywords: [
      'рецепты кальянов',
      'миксы табака',
      'забивка кальяна',
      'кальян дома',
      'как забить кальян',
      'вкусы кальяна',
      'табак для кальяна',
      'кальянные миксы',
      'рецепты забивки'
    ],
    ogTitle: metadata.ogTitle,
    ogDescription: metadata.ogDescription,
  });
}
