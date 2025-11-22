import styles from "./ButtonSearch.module.scss";

export const ButtonSearch = ({handleApplyFilters, isButtonDisabled}: {
    handleApplyFilters: () => void, isButtonDisabled: boolean
}) => {
    return (
        <div className={styles.filterActions} role="group" aria-label="Действия с фильтрами">
            <button
                className={`${styles.applyButton} ${isButtonDisabled ? styles.disabled : ''}`}
                onClick={handleApplyFilters}
                disabled={isButtonDisabled}
                aria-label="Применить фильтры и найти рецепты"
            >
                Найти рецепты
            </button>
        </div>
    )
}
