import styles from './MixPage.module.scss';
import {ServingsCalculatorUI} from '@/components/ServingsCalculator';
import {ShareButtonUI} from '@/components/ShareButton';
import {SaveRecipeButton} from '@/components/UI/SaveRecipeButton';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {Key} from 'react';
import {Container} from '@/components/Container';
import {Recipe} from "@/types/recipe";

export const Mix = ({recipe}: { recipe: Recipe }) => {
  return (
      <Container>
        <Breadcrumbs
            title={recipe.title}
            paths={[
              {title: 'Рецепты', url: '/recepty'},
            ]}
        />
        <article itemScope itemType="https://schema.org/Recipe"
                 className={styles.topSection}>
          <div className={styles.imageColumn}>
            {recipe.imageMain && (
                <div className={styles.mainImage}>
                  <img
                      className={styles.imageMain}
                      src={recipe.imageMain}
                      alt={recipe.title}
                      width={800}
                      height={600}
                      style={{objectFit: 'cover'}}
                      itemProp="image"
                  />
                </div>
            )}
          </div>
          <div className={styles.infoBlock}>
            <h1 itemProp="name">{recipe.title}</h1>
            <div className={styles.rating} itemProp="aggregateRating" itemScope
                 itemType="https://schema.org/AggregateRating">
              {!!recipe.rating &&
                  <meta itemProp="ratingValue"
                        content={recipe.rating.toString()}/>
              }
              {!!recipe.reviews &&
                  <meta itemProp="reviewCount"
                        content={recipe.reviews.toString()}/>
              }
              {!!recipe.rating &&
                  <span>{'★'.repeat(Math.round(recipe.rating))}{'☆'.repeat(5 - Math.round(recipe.rating))}</span>
              }
              <span
                  className={styles.ratingText}>({recipe.rating}/5 — {recipe.reviews} отзывов)</span>
            </div>
            <ServingsCalculatorUI recipe={recipe}/>
            <div className={styles.actionBtns}>
              <SaveRecipeButton recipeId={String(recipe.id)}/>
              <ShareButtonUI
                  url={`/recepty/${String(recipe.id)}`}
                  title={recipe.title}
              />
            </div>
          </div>
        </article>
        {recipe?.steps &&
            <section className={styles.instructions}>
              <h2>Инструкция</h2>
              {recipe.steps.map((step: any, i: Key) => (
                <div className={styles.step} key={i} itemProp="recipeInstructions">
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  {step.image && (
                    <div className={styles.stepImage}>
                      <img
                        className={styles.image}
                        src={step.image}
                        alt={`${step.title}`}
                        width={600}
                        height={400}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <div className={styles.stepText}>{step.text}</div>
                </div>
              ))}
          </section>
        }
      </Container>
    );
}
