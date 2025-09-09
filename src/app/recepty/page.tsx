import { metadata } from './metadata';
export { metadata };

import {LIMIT} from "@/config/limit.constants";
import {getRecipes} from "@/services/api";
import {ReceptyPage} from "@/page/ReceptyPage";

type SearchParams = Promise<{
    diet?: string;
    cuisine?: string;
    category?: string;
    subcategory?: string;
    search?: string;
    page?: string;
}>;

export default async function Home({searchParams,}: { searchParams: SearchParams; }) {

    const resolvedParams = await searchParams;
    const currentPage = Number(resolvedParams.page) || 1;

    const currentPath = {
        diet: resolvedParams.diet,
        cuisine: resolvedParams.cuisine,
        category: resolvedParams.category,
        subcategory: resolvedParams.subcategory,
        search: resolvedParams.search
    };

    const apiParams = {
        ...currentPath,
        page: currentPage,
        limit: LIMIT,
    };

    const {items: recipes, total, limit, fallbackTriggered} = await getRecipes(apiParams);
    const totalPages = Math.ceil(total / limit);

    return (
        <ReceptyPage
            totalPages={totalPages}
            fallbackTriggered={fallbackTriggered}
            recipes={recipes}
            currentPath={currentPath}
        />
    );
}
