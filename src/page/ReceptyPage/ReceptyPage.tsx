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
import {dietCategories} from "@/data/categories/dietCategories";
import {cuisineCategories} from "@/data/categories/cuisineCategories";
import {dishCategories} from "@/data/categories/dishCategories";
import {useState} from "react";


type FilterType = 'diet' | 'cuisine' | 'category' | 'subcategory';


export const ReceptyPage = ({totalPages, fallbackTriggered, recipes, currentPath}: {
    recipes: Recipe[], fallbackTriggered: boolean; totalPages: number, currentPath: {
        diet?: string;
        cuisine?: string;
        category?: string;
        subcategory?: string;
    }
}) => {

    const [selectedFilters, setSelectedFilters] = useState(currentPath);

    const handleFilterSelect = (type: FilterType, slug: string) => {
        setSelectedFilters(prev => {
            const newFilters = { ...prev };

            // Очищаем подкатегорию только если меняется категория
            if (type === 'category') {
                delete newFilters.subcategory;
            }

            // Добавляем или удаляем фильтр
            if (slug) {
                newFilters[type] = slug;
            } else {
                delete newFilters[type];
            }

            return newFilters;
        });
    };

    // Получаем доступные подкатегории на основе выбранной категории
    const getAvailableSubcategories = () => {
        if (!selectedFilters.category) return [];

        const category = dishCategories[selectedFilters.category as keyof typeof dishCategories];
        if (!category) return [];

        return Object.entries(category.subcategories).map(([id, data]) => ({
            id,
            name: data.title,
            slug: id
        }));
    };

    const filterGroups = [
        {
            title: 'Диета',
            type: 'diet' as const,
            options: Object.entries(dietCategories).map(([id, data]) => ({
                id,
                name: data.title,
                slug: id
            }))
        },
        {
            title: 'Кухня',
            type: 'cuisine' as const,
            options: Object.entries(cuisineCategories).map(([id, data]) => ({
                id,
                name: data.title,
                slug: id
            }))
        },
        {
            title: 'Категория',
            type: 'category' as const,
            options: Object.entries(dishCategories).map(([id, data]) => ({
                id,
                name: data.title,
                slug: id
            }))
        },
        {
            title: 'Любое блюдо',
            type: 'subcategory' as const,
            options: getAvailableSubcategories(),
            disabled: !selectedFilters.category
        }
    ];

    return (
        <Container>
            <Breadcrumbs
                title="Рецепты"
                paths={[]}
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
                        handleApplyFilters={ () => console.log('Button Search Click') }
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
