import React from 'react';
import styles from './Search.module.scss';

interface SearchProps {
  query: string;
  setQuery: (query: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const SearchIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 19L14.65 14.65"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Search = ({ query, setQuery, handleSubmit }: SearchProps) => {
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit} role="search">
      <input
        type="text"
        className={styles.search}
        placeholder="Поиск по рецептам"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Поиск по рецептам"
      />
      <SearchIcon className={styles.searchIcon} aria-hidden="true" />
      <button type="submit" className={styles.searchButton} aria-label="Найти рецепт">
        Найти
      </button>
    </form>
  );
};

export default Search;
