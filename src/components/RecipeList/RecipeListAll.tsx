import styles from "./RecipeListAll.module.scss";
import React, {ReactNode} from "react";

export const RecipeListAll = ({children}: {children: ReactNode}) => {
    return (
        <div className={styles.allRecipes}>
            <h3>Все рецепты:</h3>
            {children}
        </div>
    )
}
