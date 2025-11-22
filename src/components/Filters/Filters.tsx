import {ReactNode} from "react";
import styles from "./Filters.module.scss";


export const Filters = ({children}: {children: ReactNode}) => {
    return (
        <aside className={styles.filters} aria-label="Фильтры рецептов">
            {children}
        </aside>
    )
}
