import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { getRecipeById } from '@/services/api';
import { withRecipePlaceholders } from '@/utils/recipePlaceholders';
import { buildMetadata } from '@/utils/metadata';

type Props = {
	params: Promise<{ recipe_id: string }>;
};

function extractIdFromSlug(slug: string): string {
	const parts = slug.split('-');
	return parts[parts.length - 1];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { recipe_id } = await params;
	const id = extractIdFromSlug(recipe_id);

	try {
		const recipe = await getRecipeById(id);
		if (!recipe) {
			notFound();
		}

		const preparedRecipe = withRecipePlaceholders(recipe);
		const url = `${siteConfig.url.current}/recept/${recipe_id}`;

		// Генерируем динамические ключевые слова на основе данных рецепта
		const dynamicKeywords = [
			preparedRecipe.title,
			'рецепт кальяна',
			'микс табака',
			'как забить кальян',
			'забивка кальяна',
		];

		// Добавляем ключевые слова из ингредиентов (только первые 3-4)
		if (preparedRecipe.ingredients && preparedRecipe.ingredients.length > 0) {
			const topIngredients = preparedRecipe.ingredients
				.slice(0, 4)
				.map(ing => ing.name)
				.filter(name => name && name.length > 2);

			topIngredients.forEach(ingredient => {
				dynamicKeywords.push(`табак ${ingredient.toLowerCase()}`);
			});

			// Добавляем комбинированное ключевое слово с первыми 2 ингредиентами
			if (topIngredients.length >= 2) {
				dynamicKeywords.push(`${topIngredients[0]} ${topIngredients[1]} кальян`.toLowerCase());
			}
		}

		// Добавляем категории
		if (preparedRecipe.categories && preparedRecipe.categories.length > 0) {
			preparedRecipe.categories.slice(0, 3).forEach(category => {
				if (category && category.length > 2) {
					dynamicKeywords.push(`кальян ${category.toLowerCase()}`);
				}
			});
		}

		// Добавляем уровень сложности
		if (preparedRecipe.difficulty) {
			dynamicKeywords.push(`${preparedRecipe.difficulty.toLowerCase()} кальян`);
		}

		// Формируем улучшенное описание для OG
		let enhancedOgDescription = preparedRecipe.description;
		if (preparedRecipe.ingredients && preparedRecipe.ingredients.length > 0) {
			const ingredientNames = preparedRecipe.ingredients
				.slice(0, 3)
				.map(ing => ing.name)
				.filter(Boolean)
				.join(', ');
			if (ingredientNames) {
				enhancedOgDescription = `${preparedRecipe.description} Основные табаки: ${ingredientNames}.`;
			}
		}

		return buildMetadata({
			title: `${preparedRecipe.title} — рецепт кальяна | ${siteConfig.metadata.name}`,
			description: preparedRecipe.description,
			url,
			image: preparedRecipe.imageMain,
			type: 'article',
			ogTitle: `${preparedRecipe.title} — рецепт кальяна`,
			ogDescription: enhancedOgDescription,
			keywords: [...new Set(dynamicKeywords)], // Убираем дубликаты
		});
	} catch (error) {
		console.error('Error loading recipe metadata:', error);
		notFound();
	}
}
