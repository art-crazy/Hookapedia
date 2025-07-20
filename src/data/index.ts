import { Recipe } from './recipes';
import { summerHome } from './recipes-home/summerHome';

export const    recipes: Record<number, Recipe> = {
    ...summerHome
};
