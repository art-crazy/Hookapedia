'use client';

import { RefObject } from 'react';
import styles from './FeaturedCollection.module.scss';

interface ScrollArrowsProps {
  containerRef: RefObject<HTMLDivElement | null>;
  scrollAmount: number;
}

export default function ScrollArrows({ containerRef, scrollAmount }: ScrollArrowsProps) {
  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const currentScroll = containerRef.current.scrollLeft;
      const newScroll = direction === 'left'
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

      containerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <button
        className={`${styles.scrollArrow} ${styles.left}`}
        onClick={() => scroll('left')}
        aria-label="Прокрутить влево"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>
      <button
        className={`${styles.scrollArrow} ${styles.right}`}
        onClick={() => scroll('right')}
        aria-label="Прокрутить вправо"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </button>
    </>
  );
}
