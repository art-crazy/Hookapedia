import React from 'react';
import styles from '@/components/shared/page.module.scss';
import { Breadcrumbs } from 'ui-hookapedia';

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumbs
          title="Блог"
          paths={[]}
        />
        <h1 className={styles.title}>Блог «Что приготовить»</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Разместите свой блог у нас</h2>
          <p className={styles.sectionText}>
            «Что приготовить» предлагает уникальную возможность для блогеров и контент-мейкеров
            в сфере кулинарии и гастрономии. Размещая свой контент на нашей платформе,
            вы получаете:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Доступ к широкой аудитории любителей кулинарии</li>
            <li className={styles.listItem}>Профессиональное оформление ваших материалов</li>
            <li className={styles.listItem}>Возможность монетизации контента</li>
            <li className={styles.listItem}>Техническую поддержку и аналитику</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Сотрудничество</h2>
          <p className={styles.sectionText}>
            Мы открыты к различным формам сотрудничества:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Размещение рекламных материалов</li>
            <li className={styles.listItem}>Совместные проекты и акции</li>
            <li className={styles.listItem}>Спонсорство мероприятий</li>
            <li className={styles.listItem}>Интеграция брендов</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Связаться с нами</h2>
          <p className={styles.sectionText}>
            Для обсуждения возможностей сотрудничества, пожалуйста, напишите нам:
          </p>
          <div className={styles.contactInfo}>
            <p className={styles.contactText}>
              Email: <a href="mailto:info@chto-prigotovit.ru" className={styles.contactLink}>info@chto-prigotovit.ru</a>
            </p>
            {/*<p className={styles.contactText}>*/}
            {/*  Телефон: <a href="tel:+78001234567" className={styles.contactLink}>8 (800) 123-45-67</a>*/}
            {/*</p>*/}
          </div>
        </section>
      </div>
    </div>
  );
}
