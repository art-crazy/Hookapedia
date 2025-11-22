import React, { useRef, useEffect } from 'react';
import styles from './FilterGroup.module.scss';

type FilterType = 'strength' | 'flavor' | 'cooling' | 'mint';

interface FilterGroupProps {
    title: string;
    options: Array<{
        id: string;
        name: string;
        slug: string;
    }>;
    currentPath: {
        [key in FilterType]?: string;
    };
    type: FilterType;
    onSelect: (type: FilterType, slug: string) => void;
    disabled?: boolean;
    placeholder?: string;
}

export function FilterGroup({
                                title,
                                options,
                                currentPath,
                                type,
                                onSelect,
                                disabled,
                                placeholder
                            }: FilterGroupProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [searchText, setSearchText] = React.useState('');
    const filterRef = useRef<HTMLFieldSetElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Открываем фильтр и фокусируемся на поле ввода
    const openFilter = () => {
        if (disabled) return;
        setIsOpen(true);
        // Даем время на рендер поля ввода
        requestAnimationFrame(() => {
            inputRef.current?.focus();
        });
    };

    // Закрываем фильтр и очищаем поиск
    const closeFilter = () => {
        setIsOpen(false);
        setSearchText('');
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
                closeFilter();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleHeaderClick = () => {
        if (isOpen) {
            closeFilter();
        } else {
            openFilter();
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (disabled) return;

        if (event.key === 'Escape') {
            closeFilter();
            return;
        }

        // Обрабатываем Enter и Space только если фокус на заголовке
        if (event.target === event.currentTarget && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            if (isOpen) {
                closeFilter();
            } else {
                openFilter();
            }
        }
    };

    const handleOptionClick = (slug: string, event: React.MouseEvent) => {
        // Если клик был по крестику, только удаляем выбор
        if ((event.target as HTMLElement).closest('button')) {
            onSelect(type, '');
            return;
        }

        // Если элемент уже выбран, удаляем выбор
        if (slug === currentPath[type]) {
            onSelect(type, '');
            return;
        }

        // Иначе выбираем элемент и закрываем список
        onSelect(type, slug);
        closeFilter();
    };

    const handleOptionClear = (event: React.MouseEvent) => {
        event.stopPropagation();
        onSelect(type, '');
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const selectedOption = options.find(option => option.slug === currentPath[type]);
    const filteredOptions = options.filter(option =>
        option.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <fieldset
            ref={filterRef}
            className={styles.filterSection}
            disabled={disabled}
        >
            <div
                className={`${styles.filterHeader} ${disabled ? styles.disabled : ''}`}
                onClick={handleHeaderClick}
                onKeyDown={handleKeyDown}
                tabIndex={disabled ? -1 : 0}
                role="button"
                aria-label={`${title} filter`}
                aria-expanded={isOpen}
                aria-controls={`${type}-options`}
            >
        <span className={styles.filterTitle}>
          {!isOpen && title}
            {isOpen ? (
                <input
                    ref={inputRef}
                    type="text"
                    className={styles.searchInput}
                    value={searchText}
                    onChange={handleSearchChange}
                    onKeyDown={(e) => e.key === 'Escape' && closeFilter()}
                    placeholder={title}
                    aria-label={`Поиск в ${title.toLowerCase()}`}
                />
            ) : selectedOption ? (
                <span className={styles.selectedTags}>
              {selectedOption.name}
                    <button
                        className={styles.clearButton}
                        onClick={handleOptionClear}
                        aria-label="Очистить фильтр"
                        type="button"
                    >
                ×
              </button>
            </span>
            ) : placeholder ? (
                <span className={styles.placeholder}>{placeholder}</span>
            ) : null}
        </span>
            </div>

            {isOpen && (
                <ul
                    className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}
                    role="listbox"
                    id={`${type}-options`}
                >
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map(option => (
                            <li
                                key={option.id}
                                className={`${styles.option} ${option.slug === currentPath[type] ? styles.selected : ''}`}
                                onClick={(e) => handleOptionClick(option.slug, e)}
                                role="option"
                                aria-selected={option.slug === currentPath[type]}
                                tabIndex={0}
                            >
                                {option.name}
                                {option.slug === currentPath[type] && (
                                    <button
                                        className={styles.clearButton}
                                        onClick={handleOptionClear}
                                        aria-label="Удалить выбор"
                                        type="button"
                                    >
                                        ×
                                    </button>
                                )}
                            </li>
                        ))
                    ) : (
                        <li className={styles.noResults}>Ничего не найдено</li>
                    )}
                </ul>
            )}
        </fieldset>
    );
}
