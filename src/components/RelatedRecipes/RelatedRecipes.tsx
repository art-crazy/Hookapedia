import Link from 'next/link';
import Image from 'next/image';
import styles from './RelatedRecipes.module.scss';
import { Recipe } from '@/types/recipe';

interface RelatedRecipesProps {
  recipes: Recipe[];
}

export const RelatedRecipes = ({ recipes }: RelatedRecipesProps) => {
  if (!recipes || recipes.length === 0) return null;

  return (
    <section className={styles.relatedSection}>
      <h2 className={styles.title}>Похожие рецепты кальянов</h2>
      <div className={styles.grid}>
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            href={`/recept/${recipe.name}-${recipe.id}`}
            className={styles.card}
          >
            {recipe.imageMain && (
              <div className={styles.imageWrapper}>
                <Image
                  src={recipe.imageMain}
                  alt={recipe.title}
                  width={300}
                  height={200}
                  className={styles.image}
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            )}
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>{recipe.title}</h3>
              <p className={styles.description}>{recipe.description}</p>
              <div className={styles.meta}>
                <span>{recipe.cookTime}</span>
                {recipe.rating && <span>★ {recipe.rating}</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
