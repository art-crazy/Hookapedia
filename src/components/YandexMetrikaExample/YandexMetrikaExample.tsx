'use client';

import React from 'react';
import { useYandexMetrika } from '@/hooks/useYandexMetrika';

/**
 * Пример компонента, демонстрирующего использование Яндекс Метрики
 */
export default function YandexMetrikaExample() {
  const { reachGoal, sendEvent } = useYandexMetrika();

  const handleButtonClick = () => {
    // Отправка цели в Яндекс Метрику
    reachGoal('button_click', { buttonName: 'example_button' });
    
    // Также можно отправить произвольное событие
    sendEvent('user_interaction', { action: 'button_click', timestamp: Date.now() });
    
    alert('Событие отправлено в Яндекс Метрику!');
  };

  return (
    <div className="p-4 border rounded-md my-4">
      <h2 className="text-xl font-bold mb-2">Пример использования Яндекс Метрики</h2>
      <p className="mb-4">При клике на кнопку будет отправлено событие в Яндекс Метрику</p>
      <button 
        onClick={handleButtonClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Отправить событие
      </button>
    </div>
  );
}