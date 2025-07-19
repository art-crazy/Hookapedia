'use client'

import {
    Breadcrumbs,
    ButtonSearch,
    Container,
    FilterGroup,
    Filters, Pagination,
    ReceptyContent,
    RecipeList, RecipeListAll,
    RecipeListSection
} from "ui-hookapedia";
import Link from "next/link";
import Image from 'next/image';

const mockRecipes: any[] = [
    {
        id: '1',
        title: 'Вегетарианская паста с песто',
        slug: 'vegetarian-pasta-pesto',
        image: '/images/pasta.jpg',
        cookingTime: 20,
        difficulty: 'легко',
        rating: 4.5,
        diet: 'vegetarian',
        cuisine: 'italian',
        category: 'dinner',
        subcategory: 'pasta',
        author: {
            name: 'Мария Иванова',
            avatar: '/avatars/avatar1.jpg'
        }
    },
    {
        id: '2',
        title: 'Веганский бургер',
        slug: 'vegan-burger',
        image: '/images/burger.jpg',
        cookingTime: 30,
        difficulty: 'средне',
        rating: 4.2,
        diet: 'vegan',
        cuisine: 'american',
        category: 'dinner',
        subcategory: 'burgers',
        author: {
            name: 'Алексей Петров',
            avatar: '/avatars/avatar2.jpg'
        }
    },
    {
        id: '3',
        title: 'Греческий салат',
        slug: 'greek-salad',
        image: '/images/salad.jpg',
        cookingTime: 15,
        difficulty: 'легко',
        rating: 4.8,
        diet: 'vegetarian',
        cuisine: 'mediterranean',
        category: 'lunch',
        subcategory: 'salads',
        author: {
            name: 'Елена Смирнова',
            avatar: '/avatars/avatar3.jpg'
        }
    }
];

const mockFilters = {
    diet: 'vegetarian',
    cuisine: '',
    category: 'dinner',
    subcategory: '',
    search: ''
};

export default function Home() {
    // Моки для фильтра по диетам
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

    const fallbackTriggered = true;

    const recipes = [];

    const totalPages = 2;
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
                                recipes={mockRecipes}
                                filters={mockFilters}
                                Image={Image}
                                Link={Link}
                            />
                        </RecipeListAll>
                    </RecipeListSection>
                    : !recipes?.length ? <RecipeListSection/> :
                        <section aria-label="Список рецептов">
                            <RecipeList
                                recipes={mockRecipes}
                                filters={mockFilters}
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
    );
}
