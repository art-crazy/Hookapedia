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

const dietFilters = {
    title: "Диета",
    options: [
        { id: "1", name: "Вегетарианская", slug: "vegetarian" },
        { id: "2", name: "Веганская", slug: "vegan" },
        { id: "3", name: "Безглютеновая", slug: "gluten-free" },
        { id: "4", name: "Низкоуглеводная", slug: "low-carb" },
        { id: "5", name: "Кето", slug: "keto" },
    ],
    currentPath: { diet: "vegetarian" }, // текущий выбранный фильтр
    type: "diet" as const,
    onSelect: (type: any, slug: string) => console.log(type, slug),
    placeholder: "Выберите диету"
};

export const ReceptyPage = ({totalPages, fallbackTriggered, recipes}: {
    recipes: Recipe[], fallbackTriggered: boolean; totalPages: number
}) => {
    return (
        <Container>
            <Breadcrumbs
                title="Рецепты"
                paths={[]}
            />

            <ReceptyContent>
                <Filters>
                    <FilterGroup {...dietFilters} />
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
