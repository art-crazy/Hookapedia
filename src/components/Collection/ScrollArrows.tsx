'use client';

import { RefObject } from 'react';
import styles from './ScrollArrows.module.scss';

interface ScrollArrowsProps {
  containerRef: RefObject<HTMLDivElement | null>;
  scrollAmount: number;
  styleType?: 'default' | 'featured';
}

export default function ScrollArrows({ containerRef, scrollAmount, styleType = 'default' }: ScrollArrowsProps) {
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

  const arrowClass = styleType === 'featured' ? styles.scrollArrowFeatured : styles.scrollArrow;

  const baseClass = styleType === 'featured' ? 'scrollArrowFeatured' : 'scrollArrow';

  return (
    <>
      <button
        className={`${arrowClass} ${styles.left} ${baseClass}`}
        onClick={() => scroll('left')}
        aria-label="Прокрутить влево"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>
      <button
        className={`${arrowClass} ${styles.right} ${baseClass}`}
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
