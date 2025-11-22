import React from 'react';
import { Recipe } from '@/types/recipe';
import styles from './RecipeList.module.scss';

interface RecipeListProps {
    recipes: Recipe[];
    Image: any;
    Link: any;
}

export const RecipeList = ({ recipes, Image, Link }: RecipeListProps) => {
    return (
        <ul className={styles.recipeList}>
            {recipes.map((recipe) => (
                <li key={recipe.id}>
                    <Link
                        href={`/recept/${recipe.name}-${recipe.id}`}
                        className={styles.recipeCard}
                    >
                        {recipe.imageMain && (
                            <div className={styles.imageContainer}>
                                <Image
                                    src={recipe.imageMain}
                                    alt={recipe.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{objectFit: 'cover'}}
                                    priority={false}
                                />
                            </div>
                        )}
                        <div className={styles.recipeInfo}>
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                            <div className={styles.recipeMeta}>
                                <span>Время: {recipe.cookTime}</span>
                                <span>Сложность: {recipe.difficulty}</span>
                                <span>Рейтинг: {recipe.rating}</span>
                            </div>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
