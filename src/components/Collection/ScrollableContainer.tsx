'use client';

import { useRef } from 'react';
import ScrollArrows from './ScrollArrows';
import styles from './FeaturedCollection.module.scss';

interface ScrollableContainerProps {
  children: React.ReactNode;
  scrollAmount: number;
}

export default function ScrollableContainer({ children, scrollAmount }: ScrollableContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.scrollableWrapper} role="region" aria-label="Горизонтальная галерея рецептов">
      <div ref={containerRef} className={styles.scrollableContent}>
        {children}
      </div>
      <ScrollArrows containerRef={containerRef} scrollAmount={scrollAmount} />
    </section>
  );
}
