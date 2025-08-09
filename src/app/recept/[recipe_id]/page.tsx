import {notFound} from "next/navigation";
import {Recipe} from "@/types/recipe";
import {getRecipeById} from "@/services/api";
import {ReceptPage} from "@/page/ReceptPage/ReceptPage";

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
    if (!recipe) {
      notFound();
    }
    return (
        <ReceptPage recipe={recipe} />
    )
  } catch (error) {
    console.error('Error loading recipe:', error);
    notFound();
  }
}
