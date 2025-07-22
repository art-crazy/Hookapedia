/**
 * Типы для Яндекс Метрики
 */

interface Window {
  ym?: (counterId: number, method: string, ...args: any[]) => void;
}

declare global {
  interface Window {
    ym?: (counterId: number, method: string, ...args: any[]) => void;
  }
}