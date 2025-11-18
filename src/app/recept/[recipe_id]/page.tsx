import {notFound} from "next/navigation";
import {Recipe} from "@/types/recipe";
import {getRecipeById} from "@/services/api";
import {ReceptPage} from "@/page/ReceptPage/ReceptPage";
import {withRecipePlaceholders} from "@/utils/recipePlaceholders";

interface PageProps {
  params: Promise<{
    recipe_id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const {recipe_id} = await params;

  const id = (() => {
    const parts = recipe_id.split('-');
    return parts[parts.length - 1];
  })();

  try {
    const recipe:Recipe = await getRecipeById(id);
    const preparedRecipe = withRecipePlaceholders(recipe);
    if (!recipe) {
      notFound();
    }
    return (
        <ReceptPage recipe={preparedRecipe} />
    )
  } catch (error) {
    console.error('Error loading recipe:', error);
    notFound();
  }
}
