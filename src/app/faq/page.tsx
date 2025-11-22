import React from 'react';
import styles from '@/components/shared/page.module.scss';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/config/site';

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
          <h2 className={styles.sectionTitle}>Общие вопросы о кальяне</h2>

          <div className={styles.faqItem}>
            <h3 className={styles.question}>Что такое {siteConfig.metadata.name}?</h3>
            <p className={styles.answer}>
              {siteConfig.metadata.name} — это крупнейшая база рецептов забивки кальяна и миксов табака. У нас вы найдете
              тысячи проверенных рецептов кальяна от опытных кальянщиков, инструкции как забивать кальян,
              популярные миксы табака и сможете поделиться своими авторскими рецептами.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.question}>Как начать пользоваться {siteConfig.metadata.nameInstrumental}?</h3>
            <p className={styles.answer}>
              Просто заходите на сайт и ищите рецепты забивки кальяна через поиск или фильтры по брендам табака,
              крепости и вкусам. После регистрации вы сможете сохранять понравившиеся рецепты кальяна,
              добавлять свои миксы табака и делиться опытом с другими кальянщиками.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.question}>Бесплатно ли пользоваться рецептами кальяна?</h3>
            <p className={styles.answer}>
              Да, все рецепты забивки кальяна, миксы табака и инструкции доступны абсолютно бесплатно.
              Вы можете просматривать любые рецепты кальяна, сохранять их, добавлять свои и общаться
              с сообществом кальянщиков без ограничений.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Рецепты забивки кальяна</h2>

          <div className={styles.faqItem}>
            <h3 className={styles.question}>Как добавить свой рецепт кальяна?</h3>
            <p className={styles.answer}>
              Зарегистрируйтесь и нажмите кнопку &#34;Добавить рецепт&#34;. Укажите название микса табака,
              выберите бренды и вкусы, опишите пропорции и особенности забивки кальяна, добавьте фотографии.
              После модерации ваш рецепт кальяна появится в каталоге.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.question}>Как сохранить рецепт забивки кальяна?</h3>
            <p className={styles.answer}>
              На странице рецепта нажмите &#34;Сохранить&#34;. Рецепт кальяна добавится в вашу личную коллекцию,
              где вы сможете хранить все избранные миксы табака и быстро находить нужные рецепты забивки.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.question}>Можно ли редактировать свои рецепты кальяна?</h3>
            <p className={styles.answer}>
              Да, в любой момент можете отредактировать или удалить свои рецепты кальяна. Перейдите в профиль,
              раздел &#34;Мои рецепты&#34;, где можно изменить пропорции миксов табака, добавить новые фото
              или обновить описание забивки.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Сообщество кальянщиков</h2>

          <div className={styles.faqItem}>
            <h3 className={styles.question}>Как общаться с другими кальянщиками?</h3>
            <p className={styles.answer}>
              Оставляйте комментарии под рецептами кальяна, делитесь опытом забивки, советуйте миксы табака.
              Обсуждайте с другими кальянщиками, какие рецепты лучше работают, какие бренды табака использовать
              и как улучшить технику забивки кальяна.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.question}>Как стать активным участником сообщества?</h3>
            <p className={styles.answer}>
              Регистрируйтесь и начинайте активно участвовать: публикуйте свои рецепты кальяна, пробуйте
              миксы табака от других кальянщиков, оставляйте отзывы и советы по забивке. Чем больше вы
              делитесь опытом, тем полезнее становится сообщество для всех любителей кальяна.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
