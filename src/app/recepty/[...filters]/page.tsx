import {ReceptyPage} from "@/page/ReceptyPage";
import {LIMIT} from "@/config/limit.constants";
import {getRecipes} from "@/services/api";
import {coolingCategories} from "@/data/categories/coolingCategories";
import {strengthCategories} from "@/data/categories/strengthCategories";
import {flavorCategoryCategories} from "@/data/categories/flavorCategoryCategories";
import {mintCategories} from "@/data/categories/mintCategories";
import {withRecipePlaceholders} from "@/utils/recipePlaceholders";
import {StructuredData} from "@/components/StructuredData";
import {generateBreadcrumbSchema, generateItemListSchema} from "@/utils/structuredData";
import {siteConfig} from "@/config/site";

const RECIPES_PATH = { title: "Рецепты", url: "/recepty", key: "/recepty" };


type CategoryMap = {
  [key: string]: {
    id: string;
    title: string;
  };
};

const categoryMaps: Record<string, CategoryMap> = {
  strength: strengthCategories,
  flavor: flavorCategoryCategories,
  cooling: coolingCategories,
  mint: mintCategories
};

const getCategoryTitle = (filter: string): string | undefined => {
  for (const categories of Object.values(categoryMaps)) {
    const title = categories[filter]?.title;
    if (title) return title;
  }
  return undefined;
};


type Props = {
  params: Promise<{
    filters: string[];
  }>;
  searchParams: Promise<{
    search?: string;
    page?: string;
  }>;
};


export default async function FilteredRecipesContent({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams.page) || 1;
  const filters = resolvedParams.filters;

  // Определяем типы всех фильтров
  const currentPath = {
    strength: filters.find(filter => filter in strengthCategories),
    flavor: filters.find(filter => filter in flavorCategoryCategories),
    cooling: filters.find(filter => filter in coolingCategories),
    mint: filters.find(filter => filter in mintCategories),
    search: resolvedSearchParams.search
  };

  // Формируем параметры для API
  const apiParams = {
    strength_category: currentPath.strength,
    flavor_category: currentPath.flavor,
    cooling_category: currentPath.cooling,
    mint_category: currentPath.mint,
    search: currentPath.search,
    page: currentPage,
    limit: LIMIT
  };

  const { items: recipes, total, limit, fallbackTriggered } = await getRecipes(apiParams);
  const recipesWithImages = recipes.map(withRecipePlaceholders);
  const totalPages = Math.ceil(total / limit);

  // Формируем пути для хлебных крошек
  const breadcrumbPaths = [
    RECIPES_PATH,
    ...filters.map((filter, index) => {
      const path = `/recepty/${filters.slice(0, index + 1).join('/')}`;
      const title = getCategoryTitle(filter);

      return title ? { title, url: path, key: path } : null;
    }).filter((path): path is { title: string; url: string; key: string } => path !== null)
  ];

  // Определяем заголовок страницы
  const lastFilter = filters[filters.length - 1];
  const pageTitle = getCategoryTitle(lastFilter) || "";

  // Убираем последний элемент из хлебных крошек, так как он будет в заголовке
  const finalBreadcrumbPaths = breadcrumbPaths.slice(0, -1);

  // Генерируем структурированные данные для SEO
  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbPaths.map(path => ({ title: path.title, url: path.url })),
    siteConfig.url.current
  );

  const itemListSchema = generateItemListSchema(
    recipesWithImages,
    pageTitle || "Рецепты кальянов",
    siteConfig.url.current
  );

  return (
      <>
        <StructuredData data={[breadcrumbSchema, itemListSchema]} />
        <ReceptyPage
            totalPages={totalPages}
            fallbackTriggered={fallbackTriggered}
            recipes={recipesWithImages}
            currentPath={currentPath}
            pageTitle={pageTitle}
            finalBreadcrumbPaths={finalBreadcrumbPaths}
        />
      </>
  );
}
