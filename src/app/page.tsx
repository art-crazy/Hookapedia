import { metadata } from './metadata';
export { metadata };
import {ContainerHome} from "ui-hookapedia";
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
	// Создаем подборки рецептов
	const collections: Collection[] = [
		{
			title: 'Летние супы без заморочек: 6 рецептов на каждый день',
			link: '/recepty',
			type: COLLECTION_TYPES.DEFAULT,
			recipes: [364, 365, 366, 367, 368, 369].map(id => recipes[id])
		},
		{
			title: '6 быстрых блюд на даче: готовим на мангале и плите',
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
					name: 'chinese-cuisine',
					title: 'Китайская кухня',
					description: 'Традиционные рецепты китайской кухни',
					link: '/recepty/chinese',
					imageMain: '/recepies/kitayskaya.webp'
				},
				{
					id: 23456789,
					name: 'soups',
					title: 'Супы',
					description: 'Разнообразные рецепты супов',
					link: '/recepty/soups',
					imageMain: '/recepies/sup2.jpg'
				},
				{
					id: 34567890,
					name: 'vegetarian',
					title: 'Вегетарианские блюда',
					description: 'Блюда без мяса',
					link: '/recepty/vegetarian',
					imageMain: '/recepies/vegan.jpg'
				},
				{
					id: 45678901,
					name: 'fast-cooking',
					title: 'Быстрые рецепты',
					description: 'Блюда, которые можно приготовить быстро',
					link: '/recepty/fast-slow-cooking',
					imageMain: '/recepies/bistro.png'
				},
				{
					id: 56789012,
					name: 'baking-desserts',
					title: 'Выпечка и десерты',
					description: 'Сладкие блюда и выпечка',
					link: '/recepty/baking-desserts',
					imageMain: '/recepies/vipechka.jpg'
				},
				{
					id: 67890123,
					name: 'low-calorie',
					title: 'Низкокалорийные блюда',
					description: 'Блюда для поддержания формы',
					link: '/recepty/low-calorie',
					imageMain: '/recepies/lowkkal.jpg'
				},
				{
					id: 78901234,
					name: 'kids-menu',
					title: 'Детское меню',
					description: 'Блюда для детей',
					link: '/recepty/kids-menu',
					imageMain: '/recepies/children.jpg'
				},
				{
					id: 89012345,
					name: 'main-dishes',
					title: 'Основные блюда',
					description: 'Основные блюда для любого случая',
					link: '/recepty/main-dishes',
					imageMain: '/recepies/maineat.jpg'
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
