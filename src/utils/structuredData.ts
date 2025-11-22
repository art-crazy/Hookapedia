import { Recipe } from '@/types/recipe';
import { siteConfig } from '@/config/site';

type BreadcrumbItem = {
  title: string;
  url: string;
};

/**
 * Генерирует JSON-LD для Recipe Schema (рецепт кальяна)
 * Подходит для Яндекс и Google
 */
export function generateRecipeSchema(recipe: Recipe, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.name,
    description: recipe.description,
    image: recipe.imageMain,
    author: {
      '@type': 'Organization',
      name: siteConfig.metadata.name,
    },
    prepTime: recipe.cookTime,
    totalTime: recipe.cookTime,
    recipeYield: `${recipe.servings} порций`,
    recipeCategory: recipe.cuisine,
    recipeCuisine: 'Кальян',
    keywords: recipe.categories.join(', '),
    aggregateRating: recipe.reviews > 0 ? {
      '@type': 'AggregateRating',
      ratingValue: recipe.rating,
      reviewCount: recipe.reviews,
      bestRating: 5,
      worstRating: 1,
    } : undefined,
    recipeIngredient: recipe.ingredients.map(
      (ing) => `${ing.amount} ${ing.unit} ${ing.name}`
    ),
    recipeInstructions: recipe.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.text,
      image: step.image,
    })),
    nutrition: {
      '@type': 'NutritionInformation',
      calories: `${recipe.nutrition.calories.value} ${recipe.nutrition.calories.unit}`,
      proteinContent: `${recipe.nutrition.protein.value} ${recipe.nutrition.protein.unit}`,
      fatContent: `${recipe.nutrition.fat.value} ${recipe.nutrition.fat.unit}`,
      carbohydrateContent: `${recipe.nutrition.carbs.value} ${recipe.nutrition.carbs.unit}`,
    },
    url,
  };
}

/**
 * Генерирует JSON-LD для BreadcrumbList Schema (хлебные крошки)
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[], baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.title,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

/**
 * Генерирует JSON-LD для ItemList Schema (список рецептов на странице категории)
 */
export function generateItemListSchema(
  recipes: Recipe[],
  categoryName: string,
  baseUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Рецепты кальянов: ${categoryName}`,
    description: `Подборка лучших рецептов кальянов в категории ${categoryName}`,
    numberOfItems: recipes.length,
    itemListElement: recipes.map((recipe, index) => {
      const recipeUrl = recipe.link
        ? `${baseUrl}/${recipe.link.replace(/^\/+/, '')}`
        : `${baseUrl}/recept/${recipe.name.toLowerCase().replace(/\s+/g, '-')}-${recipe.id}`;

      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Recipe',
          '@id': recipeUrl,
          name: recipe.name,
          image: recipe.imageMain,
          description: recipe.description,
          aggregateRating: recipe.reviews > 0 ? {
            '@type': 'AggregateRating',
            ratingValue: recipe.rating,
            reviewCount: recipe.reviews,
          } : undefined,
        },
      };
    }),
  };
}

/**
 * Генерирует JSON-LD для WebSite Schema (главная страница с поиском)
 */
export function generateWebSiteSchema(baseUrl: string, siteName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/recepty?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Генерирует JSON-LD для Organization Schema
 */
export function generateOrganizationSchema(baseUrl: string, siteName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [
      // Добавьте ссылки на социальные сети, если есть
    ],
  };
}

/**
 * Генерирует JSON-LD для FAQPage Schema
 * Подходит для Яндекс и Google
 */
export function generateFAQPageSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
