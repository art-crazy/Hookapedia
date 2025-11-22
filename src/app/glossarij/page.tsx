import React from 'react';
import styles from '@/components/shared/page.module.scss';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export { metadata } from './metadata';

const glossaryTerms = [
  {
    term: 'Крепость табака',
    definition: 'Содержание никотина в табаке. Крепость делится на лёгкую (до 0,3% никотина), среднюю (0,3-0,6%) и крепкую (более 0,6%). Влияет на ощущения при курении и рекомендуется начинающим выбирать лёгкую крепость.',
  },
  {
    term: 'Холодок',
    definition: 'Охлаждающий эффект при курении кальяна, создаваемый ментоловыми добавками или мятой. Бывает лёгкий, средний и сильный холодок. Популярен в летних миксах и освежающих вкусах.',
  },
  {
    term: 'Форточка',
    definition: 'Техника управления жаром в кальяне путём частичного снятия крышки калауда или смещения углей. Позволяет регулировать температуру и избежать перегрева табака.',
  },
  {
    term: 'Бленд',
    definition: 'Смесь нескольких вкусов табака в одной забивке. Создаётся для получения уникальных вкусовых сочетаний. Противоположность моновкусу.',
  },
  {
    term: 'Моновкус',
    definition: 'Табак с одним вкусом без смешивания с другими. Идеален для тех, кто хочет насладиться чистым вкусом без дополнительных нот.',
  },
  {
    term: 'Забивка',
    definition: 'Процесс подготовки и укладки табака в чашу кальяна. Существуют различные методы забивки: воздушная, плотная, оверпак и другие, каждый подходит для определённых типов табака.',
  },
  {
    term: 'Калауд (Kaloud)',
    definition: 'Устройство для управления жаром, которое устанавливается на чашу вместо фольги. Позволяет лучше контролировать температуру и продлевает сеанс курения.',
  },
  {
    term: 'Оверпак',
    definition: 'Метод забивки, при котором табак укладывается выше бортика чашки. Используется для жаростойких табаков, таких как Tangiers или Darkside.',
  },
  {
    term: 'Воздушная забивка',
    definition: 'Способ укладки табака рыхло, с пространством между листьями. Подходит для большинства современных табаков средней крепости.',
  },
  {
    term: 'Акклиматизация',
    definition: 'Процесс адаптации табака к условиям хранения. Особенно важен для капризных марок типа Tangiers. Заключается в перемешивании и проветривании табака.',
  },
  {
    term: 'Жаростойкость',
    definition: 'Способность табака выдерживать высокие температуры без горения. Жаростойкие табаки (Darkside, Tangiers) требуют больше углей и особой техники забивки.',
  },
  {
    term: 'Соус (сироп)',
    definition: 'Жидкость, которой пропитан табак. Влияет на дымность, вкус и аромат. Разные производители используют разные составы соуса.',
  },
  {
    term: 'Чилим',
    definition: 'Чаша для табака, верхняя часть кальяна. Бывают глиняные, керамические, силиконовые. Разные типы чаш подходят для разных методов забивки.',
  },
  {
    term: 'Шахта',
    definition: 'Основная трубка кальяна, через которую проходит дым. Длина шахты влияет на охлаждение дыма.',
  },
  {
    term: 'Даунстем',
    definition: 'Погружная трубка шахты, которая опускается в колбу с водой. Глубина погружения влияет на тягу и фильтрацию дыма.',
  },
];

export default function GlossaryPage() {
  // Группируем термины по алфавиту
  const groupedTerms = glossaryTerms.reduce((acc, item) => {
    const firstLetter = item.term[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(item);
    return acc;
  }, {} as Record<string, typeof glossaryTerms>);

  const sortedLetters = Object.keys(groupedTerms).sort();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumbs
          title="Глоссарий кальянных терминов"
          paths={[]}
        />

        <section className={styles.section}>
          <p className={styles.sectionText}>
            Здесь собраны все основные термины и понятия, используемые в кальянной культуре.
            Этот глоссарий поможет начинающим разобраться в терминологии, а опытным кальянщикам
            освежить знания.
          </p>
        </section>

        {sortedLetters.map((letter) => (
          <section key={letter} className={styles.section}>
            <h2 className={styles.sectionTitle}>{letter}</h2>

            {groupedTerms[letter].map((item, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={styles.question}>{item.term}</h3>
                <p className={styles.answer}>{item.definition}</p>
              </div>
            ))}
          </section>
        ))}

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Не нашли нужный термин?</h2>
          <p className={styles.sectionText}>
            Если вы не нашли определение нужного термина, напишите нам на{' '}
            <a href="mailto:info@hookapedia.ru" className={styles.contactLink}>
              info@hookapedia.ru
            </a>
            {' '}и мы добавим его в глоссарий.
          </p>
        </section>
      </div>
    </div>
  );
}
