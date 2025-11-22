import React from 'react';
import styles from '@/components/shared/page.module.scss';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/config/site';

export { metadata } from './metadata';

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumbs
          title="Блог"
          paths={[]}
        />
        <h1 className={styles.title}>Блог {siteConfig.metadata.name}</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Размещайте контент о кальянах</h2>
          <p className={styles.sectionText}>
            {siteConfig.metadata.name} приглашает блогеров, кальянных мастеров и контент-мейкеров в сфере кальянной культуры.
            Публикуя свои рецепты забивки кальяна, миксы табака и обзоры на нашей платформе,
            вы получаете:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Доступ к тысячам любителей кальяна и профессиональных кальянщиков</li>
            <li className={styles.listItem}>Возможность делиться своими авторскими рецептами кальяна</li>
            <li className={styles.listItem}>Продвижение ваших миксов табака и методик забивки</li>
            <li className={styles.listItem}>Площадку для монетизации контента о кальянах</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Сотрудничество с кальянными брендами</h2>
          <p className={styles.sectionText}>
            Приглашаем производителей табака для кальяна, кальянного оборудования и аксессуаров к партнерству:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Размещение рецептов кальяна с вашим табаком</li>
            <li className={styles.listItem}>Продвижение новых миксов и вкусов табака</li>
            <li className={styles.listItem}>Совместные проекты с кальянными мастерами</li>
            <li className={styles.listItem}>Реклама кальянного оборудования и девайсов</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Связаться с нами</h2>
          <p className={styles.sectionText}>
            Для размещения рецептов кальяна или обсуждения партнерства, свяжитесь с нами:
          </p>
          <div className={styles.contactInfo}>
            <p className={styles.contactText}>
              Email: <a href="mailto:info@hookapedia.ru" className={styles.contactLink}>info@hookapedia.ru</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
