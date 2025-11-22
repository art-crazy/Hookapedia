'use client';

import { YM_ENABLED, YM_ID } from '@/config/ym.constants';

/**
 * Хук для работы с Яндекс Метрикой
 * Позволяет отправлять события в метрику из любого компонента
 */
export const useYandexMetrika = () => {
  /**
   * Отправка цели в Яндекс Метрику
   * @param targetName - название цели
   * @param params - дополнительные параметры
   */
  const reachGoal = (targetName: string, params?: Record<string, any>) => {
    if (!YM_ENABLED) return;

    if (typeof window !== 'undefined' && window.ym) {
      window.ym(YM_ID, 'reachGoal', targetName, params);
    } else {
      console.warn('Yandex Metrika not initialized');
    }
  };

  /**
   * Отправка произвольного события в Яндекс Метрику
   * @param eventName - название события
   * @param params - дополнительные параметры
   */
  const sendEvent = (eventName: string, params?: Record<string, any>) => {
    if (!YM_ENABLED) return;

    if (typeof window !== 'undefined' && window.ym) {
      window.ym(YM_ID, 'params', { [eventName]: params || true });
    } else {
      console.warn('Yandex Metrika not initialized');
    }
  };

  return {
    reachGoal,
    sendEvent,
  };
};
