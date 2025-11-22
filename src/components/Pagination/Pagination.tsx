import React from 'react';
import styles from './Pagination.module.scss';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    baseUrl: string;
    searchParams: Record<string, any>;
    Link: any;
}

export const Pagination: React.FC<PaginationProps> = ({
                                                          currentPage,
                                                          totalPages,
                                                          baseUrl,
                                                          searchParams,
                                                          Link
                                                      }) => {
    const createPageUrl = (page: number) => {
        const params = new URLSearchParams();

        // Preserve all existing search params except page and limit
        Object.entries(searchParams).forEach(([key, value]) => {
            if (key !== 'page' && value) {
                params.append(key, value.toString());
            }
        });

        // Add the new page number
        if (page > 1) {
            params.append('page', page.toString());
        }

        const queryString = params.toString();
        return `${baseUrl}${queryString ? `?${queryString}` : ''}`;
    };

    const renderPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        // First page
        if (startPage > 1) {
            pages.push(
                <Link
                    key="first"
                    href={createPageUrl(1)}
                    className={styles.pageLink}
                >
                    1
                </Link>
            );
            if (startPage > 2) {
                pages.push(<span key="first-ellipsis" className={styles.ellipsis}>...</span>);
            }
        }

        // Page numbers
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <Link
                    key={i}
                    href={createPageUrl(i)}
                    className={`${styles.pageLink} ${i === currentPage ? styles.active : ''}`}
                >
                    {i}
                </Link>
            );
        }

        // Last page
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push(<span key="last-ellipsis" className={styles.ellipsis}>...</span>);
            }
            pages.push(
                <Link
                    key="last"
                    href={createPageUrl(totalPages)}
                    className={styles.pageLink}
                >
                    {totalPages}
                </Link>
            );
        }

        return pages;
    };

    return (
        <nav className={styles.pagination} aria-label="Pagination">
            {currentPage > 1 && (
                <Link
                    href={createPageUrl(currentPage - 1)}
                    className={styles.pageLink}
                    aria-label="Previous page"
                >
                    ←
                </Link>
            )}

            {renderPageNumbers()}

            {currentPage < totalPages && (
                <Link
                    href={createPageUrl(currentPage + 1)}
                    className={styles.pageLink}
                    aria-label="Next page"
                >
                    →
                </Link>
            )}
        </nav>
    );
};
