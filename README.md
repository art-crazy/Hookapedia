# 💨 Hookapedia — Энциклопедия Кальянных Миксов

**Hookapedia** — это современная full-stack платформа для создания, поиска и каталогизации кальянных рецептов. Проект демонстрирует профессиональный подход к разработке веб-приложений с использованием TypeScript, Next.js и NestJS.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)](https://nestjs.com/)

---

## 📋 О проекте

Hookapedia — это каталог кальянных рецептов, который помогает пользователям находить идеальные миксы табака. Проект включает:

- 🔍 **Удобный поиск и фильтрация** — по вкусам, крепости, брендам
- 📱 **Адаптивный дизайн** — работает на всех устройствах
- ⚡ **Высокая производительность** — Server Components, оптимизация загрузки
- 🔐 **RESTful API** — полноценный backend на NestJS
- 🎨 **Современный UI/UX** — темная тема, плавные анимации
- 📊 **SEO-оптимизация** — микроразметка Schema.org, метатеги

### Для кого этот проект?

- **Разработчиков** — демонстрирует знание современного стека и архитектуры
- **Работодателей** — показывает умение работать с TypeScript, Next.js, NestJS
- **Кальянных энтузиастов** — реальный рабочий продукт с базой рецептов

---

## 🏗️ Архитектура проекта

Проект состоит из трёх репозиториев:

### 1. **Hookapedia** (этот репозиторий)
Основной фронтенд на Next.js 15 с TypeScript и Lucide React.

### 2. [**Hookapedia-frontend**](https://github.com/art-crazy/Hookapedia-frontend)
Новая версия фронтенда с улучшенной архитектурой:
- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Server Components First
- Яндекс.Метрика интеграция

### 3. [**Hookapedia-backend**](https://github.com/art-crazy/Hookapedia-backend)
RESTful API на NestJS:
- TypeScript 5
- PostgreSQL + TypeORM
- Docker/Docker Compose
- GitHub Actions CI/CD
- Swagger документация

---

## 🛠️ Технологический стек

### Frontend (этот репозиторий)
- **Framework:** Next.js 15.4.7
- **Language:** TypeScript
- **UI Library:** React 19.0.0
- **Styling:** Sass 1.89.2
- **Icons:** Lucide React 0.554.0

### Frontend (новая версия)
- **Framework:** Next.js 16
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Analytics:** Yandex Metrika

### Backend
- **Framework:** NestJS
- **Database:** PostgreSQL
- **ORM:** TypeORM
- **Containerization:** Docker

---

## 🚀 Быстрый старт

### Требования
- Node.js 18+
- npm, yarn, pnpm или bun

### Установка

```bash
# Клонируйте репозиторий
git clone https://github.com/art-crazy/Hookapedia.git
cd Hookapedia

# Установите зависимости
npm install
# или
yarn install
# или
pnpm install
# или
bun install
```

### Запуск в режиме разработки

```bash
npm run dev
# или
yarn dev
# или
pnpm dev
# или
bun dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Сборка для продакшена

```bash
npm run build
npm run start
```

### Линтинг

```bash
npm run lint
```

---

## 📁 Структура проекта

```
Hookapedia/
├── .github/workflows/  # GitHub Actions CI/CD
├── public/            # Статические файлы (изображения, sitemap)
├── scripts/           # Вспомогательные скрипты
├── src/
│   ├── app/          # Next.js App Router страницы
│   ├── components/   # React компоненты
│   ├── config/       # Конфигурация приложения
│   ├── data/         # Данные и моки
│   ├── docs/         # Документация
│   ├── hooks/        # Custom React hooks
│   ├── page/         # Страницы приложения
│   ├── services/     # API сервисы
│   ├── styles/       # Глобальные стили (SCSS)
│   ├── types/        # TypeScript типы и интерфейсы
│   └── utils/        # Утилитные функции
├── .gitignore
├── Dockerfile        # Docker конфигурация
├── eslint.config.mjs # ESLint настройки
├── next.config.ts    # Next.js конфигурация
├── package.json
├── README.md
└── tsconfig.json     # TypeScript конфигурация
```

---

## ✨ Основные возможности

### Frontend
- ✅ Server-side rendering (SSR)
- ✅ Static site generation (SSG)
- ✅ Динамические метаданные для SEO
- ✅ Микроразметка Schema.org (Recipe, BreadcrumbList)
- ✅ Поиск и фильтрация рецептов
- ✅ Адаптивный дизайн
- ✅ Темная тема
- ✅ Плавные анимации

### Backend
- ✅ RESTful API
- ✅ CRUD операции для рецептов
- ✅ Управление категориями и коллекциями
- ✅ PostgreSQL база данных
- ✅ TypeORM миграции
- ✅ Docker контейнеризация
- ✅ Swagger документация API

---

## 🔗 Связанные репозитории

| Репозиторий | Описание | Технологии |
|-------------|----------|------------|
| [Hookapedia](https://github.com/art-crazy/Hookapedia) | Основной фронтенд | Next.js 15, React 19, TypeScript |
| [Hookapedia-frontend](https://github.com/art-crazy/Hookapedia-frontend) | Новый фронтенд | Next.js 16, Tailwind CSS 4 |
| [Hookapedia-backend](https://github.com/art-crazy/Hookapedia-backend) | Backend API | NestJS, PostgreSQL, TypeORM |

---

## 🌐 Деплой

### Vercel (рекомендуется для фронтенда)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/art-crazy/Hookapedia)

Проект оптимизирован для деплоя на Vercel. Просто подключите GitHub репозиторий к Vercel и проект автоматически задеплоится.

### Docker (для backend)

```bash
# Перейдите в репозиторий backend
cd Hookapedia-backend

# Запустите через Docker Compose
docker-compose up -d
```

---

## 📚 Документация

- **Frontend Setup:** См. раздел "Быстрый старт" выше
- **Backend API:** [Hookapedia-backend README](https://github.com/art-crazy/Hookapedia-backend)
- **API Документация:** После запуска backend доступна по адресу `/api/docs`

---

## 🧪 Тестирование

```bash
# Запуск тестов (если настроены)
npm run test

# Запуск e2e тестов
npm run test:e2e
```

---

## 🤝 Вклад в проект

Проект открыт для предложений и улучшений:

1. Форкните репозиторий
2. Создайте ветку для ваших изменений (`git checkout -b feature/AmazingFeature`)
3. Закоммитьте изменения (`git commit -m 'Add some AmazingFeature'`)
4. Запушьте в ветку (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

---

## 📊 Для работодателей и рекрутеров

Этот проект демонстрирует:

- ✅ **Fullstack разработку** — опыт работы с фронтендом и бэкендом
- ✅ **TypeScript** — строгая типизация на всех уровнях
- ✅ **Современный стек** — Next.js 15/16, React 19, NestJS
- ✅ **Архитектурные паттерны** — разделение на модули, сервисы, компоненты
- ✅ **SEO и производительность** — SSR, SSG, оптимизация метаданных
- ✅ **Docker и CI/CD** — контейнеризация, автоматизация деплоя
- ✅ **Работа с БД** — PostgreSQL, TypeORM, миграции
- ✅ **Чистый код** — ESLint, Prettier, структура проекта

---

## 📝 Лицензия

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Автор

**Михаил (art-crazy)**

- GitHub: [@art-crazy](https://github.com/art-crazy)
- Проект создан с ❤️ для любителей кальяна и демонстрации навыков fullstack разработки

---

## 🔮 Планы развития

- [ ] Добавить аутентификацию пользователей
- [ ] Реализовать личный кабинет и избранное
- [ ] Добавить комментарии и рейтинги к рецептам
- [ ] Внедрить поиск по ингредиентам
- [ ] Создать мобильное приложение (React Native)
- [ ] Добавить юнит и e2e тесты (Jest, Playwright)
- [ ] Интеграция с внешними API табачных брендов

---

**Разработано с 💨 для кальянного сообщества**
