import { Recipe } from '@/types/recipe';
import { PLACEHOLDER_IMAGE } from '@/config/image.constants';

const INVALID_PREFIXES = ['/hookah/'];

const isValidImage = (image?: string) => {
  if (!image?.trim()) {
    return false;
  }

  const normalized = image.trim();

  if (normalized.startsWith('http://') || normalized.startsWith('https://')) {
    return true;
  }

  return !INVALID_PREFIXES.some(prefix => normalized.startsWith(prefix));
};

const getImageOrPlaceholder = (image?: string) =>
  isValidImage(image) ? image! : PLACEHOLDER_IMAGE;

const getStepImageOrUndefined = (image?: string) =>
  isValidImage(image) ? image : undefined;

export const withRecipePlaceholders = (recipe: Recipe): Recipe => ({
  ...recipe,
  imageMain: getImageOrPlaceholder(recipe.imageMain),
  steps: recipe.steps?.map(step => ({
    ...step,
    image: getStepImageOrUndefined(step.image)
  })) ?? recipe.steps
});
