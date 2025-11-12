import React from 'react';
import styles from '@/components/shared/page.module.scss';
import { Breadcrumbs } from 'ui-hookapedia';

export default function FAQPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumbs
          title="Вопросы и ответы"
          paths={[]}
        />
        <h1 className={styles.title}>Вопросы и ответы</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Общие вопросы</h2>

          <div className={styles.faqItem}>
            <h3 className={styles.question}>Что такое «Что приготовить»?</h3>
            <p className={styles.answer}>
              «Что приготовить» — это платформа для любителей кулинарии, где вы можете найти тысячи рецептов,
              поделиться своими кулинарными шедеврами и общаться с единомышленниками. Мы создаем
              пространство, где каждый может найти вдохновение для новых кулинарных экспериментов.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.question}>Как начать использовать платформу?</h3>
            <p className={styles.answer}>
              Для начала работы достаточно зарегистрироваться на сайте. После регистрации вы сможете
              просматривать рецепты, сохранять понравившиеся, добавлять свои рецепты и общаться с
              другими пользователями.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.question}>Бесплатно ли использование платформы?</h3>
            <p className={styles.answer}>
              Да, базовый функционал платформы полностью бесплатен. Вы можете просматривать рецепты,
              сохранять их, добавлять свои и общаться с сообществом без каких-либо ограничений.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Работа с рецептами</h2>

          <div className={styles.faqItem}>
            <h3 className={styles.question}>Как добавить свой рецепт?</h3>
            <p className={styles.answer}>
              Чтобы добавить рецепт, нажмите кнопку &#34;Добавить рецепт&#34; в верхнем меню. Заполните все
              необходимые поля: название, описание, ингредиенты, шаги приготовления и фотографии.
              После проверки модераторами ваш рецепт появится на сайте.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.question}>Как сохранить понравившийся рецепт?</h3>
            <p className={styles.answer}>
              На странице рецепта нажмите кнопку &#34;Сохранить рецепт&#34;. Он будет добавлен в вашу
              коллекцию сохраненных рецептов, к которой вы сможете обратиться в любое время.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.question}>Можно ли изменить или удалить свой рецепт?</h3>
            <p className={styles.answer}>
              Да, вы можете редактировать или удалять свои рецепты в любое время. Для этого перейдите
              в раздел &#34;Мои рецепты&#34; и выберите нужное действие.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Сообщество</h2>

          <div className={styles.faqItem}>
            <h3 className={styles.question}>Как общаться с другими пользователями?</h3>
            <p className={styles.answer}>
              Вы можете оставлять комментарии под рецептами, участвовать в обсуждениях и делиться
              своим опытом. Также доступна система личных сообщений для общения с другими участниками
              сообщества.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.question}>Как стать частью сообщества?</h3>
            <p className={styles.answer}>
              Просто зарегистрируйтесь на сайте и начните активно участвовать в жизни платформы:
              делитесь рецептами, комментируйте, общайтесь с другими пользователями. Чем активнее
              вы участвуете, тем больше возможностей открывается перед вами.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
