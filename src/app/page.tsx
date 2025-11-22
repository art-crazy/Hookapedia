import { metadata } from './metadata';
export { metadata };
import {ContainerHome} from "@/components/ContainerHome";
import {COLLECTION_TYPES, CollectionType} from "@/types/collections";
import { CollectionHome } from '@/components/Collection';
import {Recipe} from "@/data/recipes";
import {recipes} from "@/data";

interface CollectionCategories {
	id: number;
	name: string;
	title: string;
	description: string;
	imageMain?: string;
	cookTime?: string;
	rating?: string;
	link: string;
}

interface Collection {
	title: string;
	link: string;
	type: CollectionType;
	recipes: Recipe[] | CollectionCategories[];
}

export default function Home() {
	// Создаем подборки рецептов кальянов
	const collections: Collection[] = [
		{
			title: 'Освежающие миксы для лета: 6 ярких вкусов на каждый день',
			link: '/recepty',
			type: COLLECTION_TYPES.DEFAULT,
			recipes: [364, 365, 366, 367, 368, 369].map(id => recipes[id])
		},
		{
			title: 'Топ-6 классических миксов: проверенные сочетания табаков',
			link: '/recepty',
			type: COLLECTION_TYPES.DEFAULT,
			recipes: [370, 371, 372, 373, 374, 409].map(id => recipes[id])
		},
		{
			title: 'Подборка категорий',
			link: '/recepty',
			type: COLLECTION_TYPES.FEATURED,
			recipes: [
				{
					id: 12345678,
					name: 'fruity-mixes',
					title: 'Фруктовые миксы',
					description: 'Сочные и яркие сочетания фруктовых табаков',
					link: '/recepty/fruity',
					imageMain: '/mock.webp',
				},
				{
					id: 23456789,
					name: 'classic-mixes',
					title: 'Классические миксы',
					description: 'Проверенные временем рецепты кальянов',
					link: '/recepty/classic',
					imageMain: '/mock.webp',
				},
				{
					id: 34567890,
					name: 'dessert-mixes',
					title: 'Десертные миксы',
					description: 'Сладкие и насыщенные вкусы для гурманов',
					link: '/recepty/dessert',
					imageMain: '/mock.webp',
				},
				{
					id: 45678901,
					name: 'quick-mixes',
					title: 'Простые миксы',
					description: 'Быстрые рецепты из 2-3 компонентов',
					link: '/recepty/quick-mixes',
					imageMain: '/mock.webp',
				},
				{
					id: 56789012,
					name: 'refreshing-mixes',
					title: 'Освежающие миксы',
					description: 'Холодящие и свежие сочетания с мятой',
					link: '/recepty/refreshing',
					imageMain: '/mock.webp',
				},
				{
					id: 67890123,
					name: 'light-mixes',
					title: 'Лёгкие миксы',
					description: 'Нежные и воздушные вкусы для начинающих',
					link: '/recepty/light',
					imageMain: '/mock.webp',
				},
				{
					id: 78901234,
					name: 'exotic-mixes',
					title: 'Экзотические миксы',
					description: 'Необычные и редкие сочетания табаков',
					link: '/recepty/exotic',
					imageMain: '/mock.webp',
				},
				{
					id: 89012345,
					name: 'strong-mixes',
					title: 'Крепкие миксы',
					description: 'Насыщенные и терпкие вкусы для опытных',
					link: '/recepty/strong',
					imageMain: '/mock.webp',
				}
			]
		}
	];

	return (
		<ContainerHome>
			{collections.map((collection, index) =>
				<CollectionHome
					key={index}
					collection={collection}
				/>
			)}
		</ContainerHome>
	);
}
