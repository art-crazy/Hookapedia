import styles from './FeaturedCollection.module.scss';
import {Collection} from '@/types/collections';
import ScrollableContainer from './ScrollableContainer';
import ShowAllButton from './ShowAllButton';
import Image from 'next/image';

interface FeaturedCollectionProps {
  collection: Collection;
}

export function FeaturedCollection({ collection }: FeaturedCollectionProps) {
  return (
    <section className={styles.featuredSection}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{collection.title}</h2>
        <a href={collection.link} className={styles.sectionLink}>
          Смотреть все
        </a>
      </header>
      <ScrollableContainer scrollAmount={832}>
        <ul className={styles.featuredCardsContainer}>
          {collection.recipes.map((recipe) => (
              <a href={recipe?.link ? recipe?.link : `/recept/${recipe.name}-${recipe.id}`}
                    key={recipe.id}
                    className={styles.featuredCard}>
                  <div className={styles.featuredCardImageContainer}>
                      {recipe.imageMain &&
                          <Image
                              src={recipe.imageMain}
                              alt={recipe.title}
                              width={800}
                              height={450}
                              className={styles.featuredCardImage}
                          />
                      }
                      <div className={styles.featuredCardContent}>
                          <h3 className={styles.featuredCardTitle}>{recipe.title}</h3>
                          <p className={styles.featuredCardDescription}>{recipe.description}</p>
                          <div className={styles.featuredCardMeta}>
                              <span>{recipe?.cookTime}</span>
                              {recipe?.rating &&
                                <span>★ {recipe?.rating}</span>
                              }
                          </div>
                      </div>
                </div>
              </a>
          ))}
          <li><ShowAllButton link={collection.link} /></li>
        </ul>
      </ScrollableContainer>
    </section>
  );
}
