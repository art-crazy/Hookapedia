import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { notFound } from 'next/navigation';
import {cuisineCategories, dietCategories, dishCategories} from "ui-hookapedia/dist/data/categories";

type Props = {
  params: Promise<{ filters: string[] }>
};

type CategoryWithSubcategories = {
  id: string;
  title: string;
  subcategories: {
    [key: string]: {
      id: string;
      title: string;
    };
  };
};

type BaseCategory = {
  id: string;
  title: string;
};

const categoryMaps = {
  diet: dietCategories as Record<string, BaseCategory>,
  cuisine: cuisineCategories as Record<string, BaseCategory>,
  dish: dishCategories as Record<string, CategoryWithSubcategories>
};

function getCategoryTitle(filter: string): string | undefined {
  for (const [, categories] of Object.entries(categoryMaps)) {
    if (filter in categories) {
      return categories[filter].title;
    }
  }
  return undefined;
}

function getSubcategoryTitle(category: string, subcategory: string): string | undefined {
  const categoryData = dishCategories[category as keyof typeof dishCategories];
  if (categoryData && 'subcategories' in categoryData) {
    return categoryData.subcategories[subcategory]?.title;
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
    diet: filters.find(filter => filter in dietCategories),
    cuisine: filters.find(filter => filter in cuisineCategories),
    category: filters.find(filter => filter in dishCategories),
    subcategory: filters.find((filter, index) => {
      const prevFilter = filters[index - 1];
      return prevFilter && prevFilter in dishCategories &&
             filter in dishCategories[prevFilter as keyof typeof dishCategories].subcategories;
    })
  };

  const titles = {
    diet: currentPath.diet ? getCategoryTitle(currentPath.diet) : undefined,
    cuisine: currentPath.cuisine ? getCategoryTitle(currentPath.cuisine) : undefined,
    category: currentPath.category ? getCategoryTitle(currentPath.category) : undefined,
    subcategory: currentPath.category && currentPath.subcategory ?
      getSubcategoryTitle(currentPath.category, currentPath.subcategory) : undefined
  };

  // Проверяем наличие нескольких фильтров
  const hasMultipleFilters = Object.values(currentPath).filter(Boolean).length > 1;

  // Если есть несколько фильтров, используем комбинированный формат
  if (hasMultipleFilters) {
    const parts = [
      titles.category,
      titles.diet,
      titles.cuisine,
      titles.subcategory
    ].filter(Boolean);

    if (parts.length > 0) {
      const combinedTitle = `${parts.join('. ')} — лучшие рецепты с пошаговыми инструкциями | Что приготовить`;
      const combinedDescription = `${parts.join('. ')}. Все рецепты. Найди что приготовить.`;
      return {
        title: combinedTitle,
        description: combinedDescription,
        ogTitle: combinedTitle,
        ogDescription: combinedDescription
      };
    }
  }

  // Если только один фильтр, используем соответствующий формат
  if (titles.cuisine) {
    return {
      title: `${titles.cuisine} — традиционные рецепты, вкусы и блюда национальной кухни`,
      description: `${titles.cuisine} в одном месте: супы, закуски, горячее, гарниры, десерты и уличная еда. Лучшие рецепты с пошаговыми инструкциями — готовьте дома легко, быстро и вкусно.`,
      ogTitle: `${titles.cuisine}: лучшие рецепты и блюда`,
      ogDescription: `Попробуйте дома блюда, которыми славится ${titles.cuisine}. Подборка проверенных рецептов с пошаговыми инструкциями и насыщенным вкусом.`
    };
  }

  if (titles.diet) {
    return {
      title: `${titles.diet} — рецепты для правильного и вкусного питания каждый день | Что приготовить`,
      description: `${titles.diet}: подборка разнообразных рецептов на завтрак, обед и ужин. Сытные, полезные и простые блюда, которые легко готовить дома.`,
      ogTitle: `${titles.diet}: лучшие рецепты и блюда`,
      ogDescription: `Ищете вкусные и подходящие под ${titles.diet} рецепты? Здесь собраны проверенные блюда на каждый день — просто, полезно и без лишнего.`
    };
  }

  if (titles.category) {
    return {
      title: `${titles.category} — вкусные и простые рецепты на каждый день | Что приготовить`,
      description: `Подборка лучших рецептов в категории «${titles.category}»: быстрые, сытные и оригинальные блюда для домашнего меню. Готовьте легко — удивляйте вкусом.`,
      ogTitle: `${titles.category} — лучшие рецепты`,
      ogDescription: `Откройте для себя проверенные рецепты в категории «${titles.category}»: вкусно, доступно и по-домашнему.`
    };
  }

  if (titles.subcategory) {
    return {
      title: `${titles.subcategory} — лучшие рецепты с подробным и пошаговым описанием | Что поесть`,
      description: `${titles.subcategory} — Вкусные и простые рецепты на каждый день: от классических до оригинальных. Готовьте быстро, полезно и разнообразно с нашими проверенными рецептами.`,
      ogTitle: `Лучшие рецепты: ${titles.subcategory}`,
      ogDescription: `Ищете вкусные ${titles.subcategory}? Смотрите проверенные рецепты с пошаговыми инструкциями и советами. Всё просто и по-домашнему.`
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

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: [
      'рецепты',
      'кулинарные рецепты',
      'домашние рецепты',
      'пошаговые рецепты',
      'что приготовить',
      'кулинария',
      'готовим дома',
      'вкусные рецепты',
      'простые рецепты'
    ],
    openGraph: {
      title: metadata.ogTitle,
      description: metadata.ogDescription,
      type: 'website',
      locale: 'ru_RU',
      siteName: siteConfig.metadata.name,
      url: canonicalUrl
    },
    alternates: {
      canonical: canonicalUrl
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
}
