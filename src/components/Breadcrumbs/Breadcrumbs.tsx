import React from 'react';
import Link from 'next/link';
import {ChevronRight, Home} from 'lucide-react';
import styles from './Breadcrumbs.module.scss';

interface Path {
    title: string;
    url: string;
}

interface BreadcrumbsProps {
    title: string;
    paths: Path[];
}

export const Breadcrumbs = ({ title, paths }: BreadcrumbsProps) => {
    return (
        <div className={styles.breadcrumbs}>
            <nav aria-label="Хлебные крошки">
                <ol className={styles.paths}>
                    <li>
                        <Link href="/" className={styles.homeLink}>
                            <Home size={16} />
                        </Link>
                    </li>
                    {paths.map((path, index) => (
                        <React.Fragment key={`${path.url}_${index}`}>
                            <li className={styles.titleWrapper}>
                                <ChevronRight className={styles.separator} size={16} />
                                <Link href={path.url} className={styles.path}>
                                    {path.title}
                                </Link>
                            </li>
                        </React.Fragment>
                    ))}
                </ol>
            </nav>
            <div className={styles.titleWrapper}>
                <ChevronRight className={styles.separator} size={16} />
                <h1 className={styles.title}>{title}</h1>
            </div>
        </div>
    );
};
