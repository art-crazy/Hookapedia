import React from 'react';
import styles from '@/components/shared/page.module.scss';
import { Breadcrumbs } from 'ui-hookapedia';

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
            «Что приготовить» родился из простой идеи: сделать кулинарию доступной и увлекательной для каждого.
            В 2023 году группа энтузиастов, объединенных любовью к еде и технологиям, решила создать платформу,
            где каждый может делиться своими рецептами и находить вдохновение для новых кулинарных экспериментов.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Наша миссия</h2>
          <p className={styles.sectionText}>
            Мы верим, что приготовление пищи — это не просто процесс, а настоящее искусство,
            которое объединяет людей. Наша цель — создать сообщество, где каждый может найти
            рецепты, поделиться своим опытом и вдохновить других на кулинарные открытия.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Что мы предлагаем</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Тысячи проверенных рецептов от профессиональных поваров и домашних кулинаров</li>
            <li className={styles.listItem}>Удобный поиск по ингредиентам, категориям и сложности приготовления</li>
            <li className={styles.listItem}>Возможность сохранять любимые рецепты и создавать свои коллекции</li>
            <li className={styles.listItem}>Сообщество единомышленников, готовых делиться опытом и советами</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Наши ценности</h2>
          <div className={styles.values}>
            <div className={styles.value}>
              <h3 className={styles.valueTitle}>Качество</h3>
              <p className={styles.valueText}>Мы тщательно проверяем каждый рецепт, чтобы вы могли быть уверены в результате</p>
            </div>
            <div className={styles.value}>
              <h3 className={styles.valueTitle}>Сообщество</h3>
              <p className={styles.valueText}>Создаем пространство для общения и обмена опытом между любителями кулинарии</p>
            </div>
            <div className={styles.value}>
              <h3 className={styles.valueTitle}>Инновации</h3>
              <p className={styles.valueText}>Постоянно развиваем платформу, добавляя новые функции и улучшая пользовательский опыт</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
