import React from 'react';
import styles from '@/components/shared/page.module.scss';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function HistoryPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumbs
          title="Наша история"
          paths={[]}
        />
        <h1 className={styles.title}>Наша история</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Как всё начиналось</h2>
          <p className={styles.sectionText}>
            Хукапедия появилась из желания создать полный справочник по забивке кальяна и рецептам табачных миксов.
            В 2024 году команда энтузиастов кальянной культуры решила объединить знания и опыт тысяч кальянщиков
            в одной платформе, где можно найти любой рецепт забивки кальяна, миксы табака и советы по приготовлению.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Наша миссия</h2>
          <p className={styles.sectionText}>
            Мы создаем крупнейшую базу рецептов кальяна и табачных миксов. Наша цель — помочь каждому кальянщику
            найти идеальный рецепт забивки, узнать как правильно забивать кальян, подобрать миксы табака
            и поделиться своими авторскими рецептами с сообществом.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Что мы предлагаем</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Тысячи проверенных рецептов забивки кальяна от опытных кальянщиков</li>
            <li className={styles.listItem}>Подробные инструкции как забивать кальян на разных чашах и устройствах</li>
            <li className={styles.listItem}>Популярные миксы табака с описанием вкусов и пропорций</li>
            <li className={styles.listItem}>Рецепты кальяна по брендам: Darkside, Musthave, Tangiers, Daily Hookah и другие</li>
            <li className={styles.listItem}>Сообщество кальянщиков для обмена опытом и новыми рецептами</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Наши ценности</h2>
          <div className={styles.values}>
            <div className={styles.value}>
              <h3 className={styles.valueTitle}>Проверенные рецепты</h3>
              <p className={styles.valueText}>Каждый рецепт забивки кальяна проверен на практике опытными кальянщиками</p>
            </div>
            <div className={styles.value}>
              <h3 className={styles.valueTitle}>Открытое сообщество</h3>
              <p className={styles.valueText}>Место для общения любителей кальяна, обмена миксами табака и секретами забивки</p>
            </div>
            <div className={styles.value}>
              <h3 className={styles.valueTitle}>Постоянное развитие</h3>
              <p className={styles.valueText}>Добавляем новые рецепты кальяна, функции поиска и инструменты для кальянщиков</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
