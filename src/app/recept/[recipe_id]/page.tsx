import {notFound} from "next/navigation";
import {Recipe} from "@/types/recipe";
import {getRecipeById} from "@/services/api";
import {ReceptPage} from "@/page/ReceptPage/ReceptPage";
import {withRecipePlaceholders} from "@/utils/recipePlaceholders";
import {StructuredData} from "@/components/StructuredData";
import {generateRecipeSchema} from "@/utils/structuredData";
import {siteConfig} from "@/config/site";

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

    const recipeUrl = `${siteConfig.url.current}/recept/${recipe_id}`;
    const recipeSchema = generateRecipeSchema(preparedRecipe, recipeUrl);

    return (
        <>
          <StructuredData data={recipeSchema} />
          <ReceptPage recipe={preparedRecipe} />
        </>
    )
  } catch (error) {
    console.error('Error loading recipe:', error);
    notFound();
  }
}
