'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
import { HeartIcon } from '@/components/icons';
import styles from './SaveRecipeButton.module.scss';

interface SaveRecipeButtonProps {
  recipeId: string;
}

export const SaveRecipeButton = ({ recipeId }: SaveRecipeButtonProps) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // Check if recipe is saved on component mount
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
    setIsSaved(savedRecipes.includes(recipeId));
  }, [recipeId]);

  const handleClick = () => {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');

    if (isSaved) {
      // Remove from saved
      const updatedRecipes = savedRecipes.filter((id: string) => id !== recipeId);
      localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
      setIsSaved(false);
    } else {
      // Add to saved
      savedRecipes.push(recipeId);
      localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
      setIsSaved(true);
    }
  };

  return (
    <Button
      onClick={handleClick}
      aria-label={isSaved ? 'Удалить из избранного' : 'Сохранить рецепт в избранное'}
      aria-pressed={isSaved}
    >
      <HeartIcon className={isSaved ? styles.filledHeart : ''} aria-hidden="true" />
      {isSaved ? 'В избранном' : 'Сохранить рецепт'}
    </Button>
  );
};
