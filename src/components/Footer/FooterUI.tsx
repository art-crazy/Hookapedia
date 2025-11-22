'use client'

import React from 'react';
import Link from 'next/link';
import styles from './FooterUI.module.scss';

const LINKS = [
    {
        text: 'Наша история',
        url: "/istoriya",
    },
    {
        text: 'Блог',
        url: "/blog",
    },
    {
        text: 'Вопросы и ответы',
        url: "/faq",
    },
    {
        text: 'Глоссарий',
        url: "/glossarij",
    },
]

interface FooterUIProps {
  siteName: string;
}

export function FooterUI({ siteName }: FooterUIProps) {
  return (
    <footer className={styles.footer}>
      <nav className={styles.section} aria-label="О нас">
        <b className={styles.sectionTitle}>О нас</b>
        <div className={styles.links}>
          {LINKS.map((link, index) => (
              <Link key={index} href={link.url} className={styles.link}>
                {link.text}
              </Link>
          ))}
        </div>
      </nav>
      <div className={styles.copyright}>
        © 2025 «{siteName}». Все права защищены.
      </div>
    </footer>
  );
}
