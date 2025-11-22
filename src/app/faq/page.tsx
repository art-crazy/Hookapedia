import React from 'react';
import styles from '@/components/shared/page.module.scss';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/config/site';
import { StructuredData } from '@/components/StructuredData';
import { generateFAQPageSchema } from '@/utils/structuredData';

export { metadata } from './metadata';

const faqData = [
  {
    question: `Что такое ${siteConfig.metadata.name}?`,
    answer: `${siteConfig.metadata.name} — это крупнейшая база рецептов забивки кальяна и миксов табака. У нас вы найдете тысячи проверенных рецептов кальяна от опытных кальянщиков, инструкции как забивать кальян, популярные миксы табака и сможете поделиться своими авторскими рецептами.`,
  },
  {
    question: `Как начать пользоваться ${siteConfig.metadata.nameInstrumental}?`,
    answer: 'Просто заходите на сайт и ищите рецепты забивки кальяна через поиск или фильтры по брендам табака, крепости и вкусам. После регистрации вы сможете сохранять понравившиеся рецепты кальяна, добавлять свои миксы табака и делиться опытом с другими кальянщиками.',
  },
  {
    question: 'Бесплатно ли пользоваться рецептами кальяна?',
    answer: 'Да, все рецепты забивки кальяна, миксы табака и инструкции доступны абсолютно бесплатно. Вы можете просматривать любые рецепты кальяна, сохранять их, добавлять свои и общаться с сообществом кальянщиков без ограничений.',
  },
  {
    question: 'Как добавить свой рецепт кальяна?',
    answer: 'Зарегистрируйтесь и нажмите кнопку "Добавить рецепт". Укажите название микса табака, выберите бренды и вкусы, опишите пропорции и особенности забивки кальяна, добавьте фотографии. После модерации ваш рецепт кальяна появится в каталоге.',
  },
  {
    question: 'Как сохранить рецепт забивки кальяна?',
    answer: 'На странице рецепта нажмите "Сохранить". Рецепт кальяна добавится в вашу личную коллекцию, где вы сможете хранить все избранные миксы табака и быстро находить нужные рецепты забивки.',
  },
  {
    question: 'Можно ли редактировать свои рецепты кальяна?',
    answer: 'Да, в любой момент можете отредактировать или удалить свои рецепты кальяна. Перейдите в профиль, раздел "Мои рецепты", где можно изменить пропорции миксов табака, добавить новые фото или обновить описание забивки.',
  },
  {
    question: 'Как общаться с другими кальянщиками?',
    answer: 'Оставляйте комментарии под рецептами кальяна, делитесь опытом забивки, советуйте миксы табака. Обсуждайте с другими кальянщиками, какие рецепты лучше работают, какие бренды табака использовать и как улучшить технику забивки кальяна.',
  },
  {
    question: 'Как стать активным участником сообщества?',
    answer: 'Регистрируйтесь и начинайте активно участвовать: публикуйте свои рецепты кальяна, пробуйте миксы табака от других кальянщиков, оставляйте отзывы и советы по забивке. Чем больше вы делитесь опытом, тем полезнее становится сообщество для всех любителей кальяна.',
  },
];

export default function FAQPage() {
  const faqSchema = generateFAQPageSchema(faqData, siteConfig.url.current);

  return (
    <>
      <StructuredData data={faqSchema} />
      <div className={styles.page}>
        <div className={styles.container}>
          <Breadcrumbs
            title="Вопросы и ответы"
            paths={[]}
          />

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Общие вопросы о кальяне</h2>

            {faqData.slice(0, 3).map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={styles.question}>{faq.question}</h3>
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            ))}
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Рецепты забивки кальяна</h2>

            {faqData.slice(3, 6).map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={styles.question}>{faq.question}</h3>
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            ))}
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Сообщество кальянщиков</h2>

            {faqData.slice(6, 8).map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={styles.question}>{faq.question}</h3>
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
