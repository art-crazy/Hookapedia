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

		return buildMetadata({
			title: `${preparedRecipe.title} — рецепт кальяна`,
			description: preparedRecipe.description,
			url,
			image: preparedRecipe.imageMain,
			type: 'article',
			ogTitle: `${preparedRecipe.title} — рецепт кальяна`,
			ogDescription: preparedRecipe.description,
			keywords: [
				preparedRecipe.title,
				'рецепт кальяна',
				'микс табака',
				'как забить кальян',
				'вкусы кальяна',
			],
		});
	} catch (error) {
		console.error('Error loading recipe metadata:', error);
		notFound();
	}
}
