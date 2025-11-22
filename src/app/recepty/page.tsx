import { metadata } from './metadata';
export { metadata };

import {LIMIT} from "@/config/limit.constants";
import {getRecipes} from "@/services/api";
import {ReceptyPage} from "@/page/ReceptyPage";
import {withRecipePlaceholders} from "@/utils/recipePlaceholders";

type SearchParams = Promise<{
    strength?: string;
    flavor?: string;
    cooling?: string;
    mint?: string;
    search?: string;
    page?: string;
}>;

export default async function RecipesContent({searchParams,}: { searchParams: SearchParams; }) {

    const resolvedParams = await searchParams;
    const currentPage = Number(resolvedParams.page) || 1;

    const currentPath = {
        strength: resolvedParams.strength,
        flavor: resolvedParams.flavor,
        cooling: resolvedParams.cooling,
        mint: resolvedParams.mint,
        search: resolvedParams.search
    };

    const apiParams = {
        strength_category: currentPath.strength,
        flavor_category: currentPath.flavor,
        cooling_category: currentPath.cooling,
        mint_category: currentPath.mint,
        search: currentPath.search,
        page: currentPage,
        limit: LIMIT,
    };

    const {items: recipes, total, limit, fallbackTriggered} = await getRecipes(apiParams);
    const recipesWithImages = recipes.map(withRecipePlaceholders);
    const totalPages = Math.ceil(total / limit);
    const pageTitle= currentPath.search ? `Поиск: ${currentPath.search}` : "Рецепты"

    return (
        <ReceptyPage
            totalPages={totalPages}
            fallbackTriggered={fallbackTriggered}
            recipes={recipesWithImages}
            currentPath={currentPath}
            pageTitle={pageTitle}
        />
    );
}
