# Использование Яндекс Метрики в проекте

## Общая информация

В проект интегрирована Яндекс Метрика с ID: `103415240`. Метрика настроена для отслеживания следующих параметров:

- Карта кликов (clickmap)
- Отслеживание переходов по ссылкам (trackLinks)
- Точное отслеживание отказов (accurateTrackBounce)
- Вебвизор (webvisor)

## Структура интеграции

1. **YandexMetrika.tsx** - компонент для инициализации Яндекс Метрики
2. **useYandexMetrika.ts** - хук для отправки событий в метрику
3. **yandex-metrika.d.ts** - типы для TypeScript

## Как использовать

### Отправка целей (reachGoal)

Для отправки целей используйте хук `useYandexMetrika`:

```tsx
import { useYandexMetrika } from '@/hooks/useYandexMetrika';

function MyComponent() {
  const { reachGoal } = useYandexMetrika();
  
  const handleClick = () => {
    // Отправка цели с названием 'target_name'
    reachGoal('target_name');
    
    // Отправка цели с дополнительными параметрами
    reachGoal('target_name', { param1: 'value1', param2: 'value2' });
  };
  
  return <button onClick={handleClick}>Кнопка</button>;
}
```

### Отправка произвольных событий

```tsx
import { useYandexMetrika } from '@/hooks/useYandexMetrika';

function MyComponent() {
  const { sendEvent } = useYandexMetrika();
  
  const handleAction = () => {
    // Отправка события с названием 'event_name'
    sendEvent('event_name');
    
    // Отправка события с дополнительными параметрами
    sendEvent('event_name', { param1: 'value1', param2: 'value2' });
  };
  
  return <div onClick={handleAction}>Действие</div>;
}
```

## Пример компонента

В проекте есть пример компонента `YandexMetrikaExample`, который демонстрирует использование Яндекс Метрики. Вы можете использовать его как образец для своих компонентов.

## Проверка работы метрики

Для проверки работы метрики можно использовать:

1. Консоль браузера - при отправке событий в консоли должны появляться соответствующие запросы
2. Интерфейс Яндекс Метрики - события должны отображаться в разделе "Цели" или "Вебвизор"

## Дополнительная информация

Для получения дополнительной информации о возможностях Яндекс Метрики обратитесь к [официальной документации](https://yandex.ru/support/metrica/).