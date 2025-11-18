import React from 'react';
import styles from './ShowAllButton.module.scss';

interface ShowAllButtonProps {
  link: string;
}

const ShowAllButton: React.FC<ShowAllButtonProps> = ({ link }) => {
  return (
    <a href={link} className={styles.showAllCard} aria-label="Показать все рецепты в подборке">
      <div className={styles.showAllArrow}>
        <svg viewBox="0 0 24 24" className={styles.arrowIcon} aria-hidden="true">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </div>
      <span className={styles.showAllText}>Показать всё</span>
    </a>
  );
};

export default ShowAllButton;
