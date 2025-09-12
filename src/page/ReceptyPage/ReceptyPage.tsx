'use client'

import {
    Breadcrumbs,
    ButtonSearch, Container,
    FilterGroup,
    Filters, Pagination,
    ReceptyContent, RecipeList,
    RecipeListAll,
    RecipeListSection
} from "ui-hookapedia";
import Image from "next/image";
import Link from "next/link";
import {Recipe} from "@/types/recipe";
import {strengthCategories} from "@/data/categories/strengthCategories";
import {flavorCategoryCategories} from "@/data/categories/flavorCategoryCategories";
import {coolingCategories} from "@/data/categories/coolingCategories";
import {mintCategories} from "@/data/categories/mintCategories";
import {useState} from "react";
import {useRouter} from "next/navigation";


type FilterType = 'diet' | 'cuisine' | 'category' | 'subcategory';

type BreadcrumbPath = {
    title: string;
    url: string;
    key: string;
};

export const ReceptyPage = ({totalPages, fallbackTriggered, recipes, currentPath, pageTitle, finalBreadcrumbPaths}: {
    recipes: Recipe[], 
    fallbackTriggered: boolean; 
    totalPages: number, 
    currentPath: {
        diet?: string;
        cuisine?: string;
        category?: string;
        subcategory?: string;
    },
    pageTitle?: string;
    finalBreadcrumbPaths?: BreadcrumbPath[];
}) => {

    const router = useRouter();
    const [selectedFilters, setSelectedFilters] = useState(currentPath);

    const handleFilterSelect = (type: FilterType, slug: string) => {
        setSelectedFilters(prev => {
            const newFilters = { ...prev };

            // Добавляем или удаляем фильтр
            if (slug) {
                newFilters[type] = slug;
            } else {
                delete newFilters[type];
            }

            return newFilters;
        });
    };

    const handleApplyFilters = () => {
        // Формируем URL
        const pathParts = [];
        if (selectedFilters.diet) pathParts.push(selectedFilters.diet);
        if (selectedFilters.cuisine) pathParts.push(selectedFilters.cuisine);
        if (selectedFilters.category) pathParts.push(selectedFilters.category);
        if (selectedFilters.subcategory) pathParts.push(selectedFilters.subcategory);

        const url = pathParts.length > 0 ? `/recepty/${pathParts.join('/')}` : '/recepty';
        router.push(url);
    };

    const filterGroups = [
        {
            title: 'Крепость',
            type: 'diet' as const,
            options: Object.entries(strengthCategories).map(([id, data]) => ({
                id,
                name: data.title,
                slug: id
            })),
            disabled: false
        },
        {
            title: 'Категории вкуса',
            type: 'cuisine' as const,
            options: Object.entries(flavorCategoryCategories).map(([id, data]) => ({
                id,
                name: data.title,
                slug: id
            })),
            disabled: false
        },
        {
            title: 'Наличие холодка',
            type: 'category' as const,
            options: Object.entries(coolingCategories).map(([id, data]) => ({
                id,
                name: data.title,
                slug: id
            })),
            disabled: false
        },
        {
            title: 'Наличие мяты',
            type: 'subcategory' as const,
            options: Object.entries(mintCategories).map(([id, data]) => ({
                id,
                name: data.title,
                slug: id
            })),
            disabled: false
        }
    ];

    return (
        <Container>
            <Breadcrumbs
                title={pageTitle || "Рецепты"}
                paths={finalBreadcrumbPaths || []}
            />

            <ReceptyContent>
                <Filters>
                    {filterGroups.map((group) => (
                        <FilterGroup
                            key={group.type}
                            title={group.title}
                            options={group.options}
                            currentPath={selectedFilters}
                            type={group.type}
                            onSelect={handleFilterSelect}
                            disabled={group.disabled} />
                    ))}
                    <ButtonSearch
                        isButtonDisabled={false}
                        handleApplyFilters={handleApplyFilters}
                    />
                </Filters>

                {fallbackTriggered ?
                    <RecipeListSection>
                        <RecipeListAll>
                            <RecipeList
                                recipes={recipes}
                                Image={Image}
                                Link={Link}
                            />
                        </RecipeListAll>
                    </RecipeListSection>
                    : !recipes?.length ? <RecipeListSection/> :
                        <section aria-label="Список рецептов">
                            <RecipeList
                                recipes={recipes}
                                Image={Image}
                                Link={Link}
                            />
                        </section>
                }

                {totalPages > 1 && (
                    <Pagination
                        currentPage={1}
                        totalPages={totalPages}
                        // baseUrl={`/recepty/${filters.join('/')}`}
                        baseUrl={`/recepty/`}
                        // searchParams={{ search: currentPath.search }}
                        searchParams={{ search: 'currentPath.search '}}
                        Link={Link}
                    />
                )}
            </ReceptyContent>
        </Container>
    )
}
