import { RecipeResponse, RecipeFilters, Recipe } from '@/types/recipe';

const API_URL = 'http://109.205.56.225:3001/api';
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

async function fetchWithRetry(url: string, options: RequestInit = {}, retries = MAX_RETRIES): Promise<Response> {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new ApiError(response.status, `HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    if (retries > 0 && error instanceof ApiError && error.status >= 500) {
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      return fetchWithRetry(url, options, retries - 1);
    }
    throw error;
  }
}

export const getRecipes = async (filters: RecipeFilters = {}): Promise<RecipeResponse> => {
  try {
    const params = new URLSearchParams();

    if (filters.page) params.append('page', filters.page.toString());
    if (filters.limit) params.append('limit', filters.limit.toString());
    if (filters.search) params.append('search', filters.search);
    if (filters.dish_categories) params.append('dish_categories', filters.dish_categories);
    if (filters.subcategories) params.append('subcategories', filters.subcategories);
    if (filters.cuisine_categories) params.append('cuisine_categories', filters.cuisine_categories);
    if (filters.diet_categories) params.append('diet_categories', filters.diet_categories);

    const response = await fetchWithRetry(`${API_URL}/recipes?${params.toString()}`);
    return response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw new Error(`Failed to fetch recipes: ${error.message}`);
    }
    throw new Error('An unexpected error occurred');
  }
};

export const getRecipeById = async (id: string): Promise<Recipe> => {
  try {
    const response = await fetchWithRetry(`${API_URL}/recipes/${id}`);
    return response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw new Error(`Failed to fetch recipe: ${error.message}`);
    }
    throw new Error('An unexpected error occurred');
  }
};
