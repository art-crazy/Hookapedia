'use client'

import styles from './ServingsCalculatorUI.module.scss';
import {Recipe} from '@/types/recipe'
import {useState} from "react";

interface ServingsCalculatorProps {
  recipe: Recipe;
}

const ServingsCalculatorUI: React.FC<ServingsCalculatorProps> = ({ recipe }) => {
  const [servings, setServings] = useState(recipe.servings);

  const updateServings = (newServings: number) => {
    if (newServings > 0) {
      setServings(newServings);
    }
  };

  return (
    <>
      <fieldset className={styles.servingsBlock} aria-label="Калькулятор порций">
        <legend>Количество порций</legend>
        <button onClick={() => updateServings(servings - 1)} aria-label="Уменьшить количество порций">-</button>
        <span>{servings}</span>
        <button onClick={() => updateServings(servings + 1)} aria-label="Увеличить количество порций">+</button>
      </fieldset>
      <h2 className={styles.ingredientsTitle}>Ингредиенты</h2>
      <ul className={styles.ingredientsList}>
        {recipe.ingredients.map((item, i) => {
          const adjustedAmount = (item.amount * servings) / recipe.servings;
          return (
            <li key={i}>{item.name} — {adjustedAmount.toFixed(1)} {item.unit}</li>
          );
        })}
      </ul>
    </>
  );
};

export default ServingsCalculatorUI;
