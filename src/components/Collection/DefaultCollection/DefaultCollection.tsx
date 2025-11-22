'use client';

import styles from './DefaultCollection.module.scss';
import { Collection } from '@/types/collections';
import { useRef } from 'react';
import ScrollArrows from '../ScrollArrows';
import ShowAllButton from '../ShowAllButton';
import Image from 'next/image';
import Link from 'next/link';

interface DefaultCollectionProps {
  collection: Collection;
}

export function DefaultCollection({ collection }: DefaultCollectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{collection.title}</h2>
        <Link href={collection.link} className={styles.sectionLink}>
          Смотреть все
        </Link>
      </header>
      <div className={styles.scrollableWrapper}>
        <div ref={containerRef} className={styles.scrollableContent}>
          <ul className={styles.cardsContainer}>
            {collection.recipes.map((recipe, index) => (
              <li key={recipe.id} className={styles.card}>
                <Link href={`/recept/${recipe.name}-${recipe.id}`}>
                  {recipe.imageMain && (
                    <Image
                      src={recipe.imageMain}
                      alt={recipe.title}
                      width={300}
                      height={200}
                      className={styles.cardImage}
                      style={{ width: 'auto', height: 'auto' }}
                      priority={recipe.id === 364 && index === 0}
                    />
                  )}
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{recipe.title}</h3>
                    <p className={styles.cardDescription}>{recipe.description}</p>
                    <div className={styles.cardMeta}>
                      <span>{recipe.cookTime}</span>
                      <span>★ {recipe.rating}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
            <li><ShowAllButton link={collection.link} /></li>
          </ul>
        </div>
        <ScrollArrows containerRef={containerRef} scrollAmount={300} />
      </div>
    </section>
  );
}
