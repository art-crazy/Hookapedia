import styles from './RecipeListSection.module.scss';
import {ReactNode} from "react";

export const RecipeListSection = ({children}: {children?: ReactNode}) => {
    return (
        <section aria-label="Список рецептов" className={styles.noResults}>
            <p>По вашему запросу ничего не найдено</p>
            {children && children}
        </section>
    )
}
