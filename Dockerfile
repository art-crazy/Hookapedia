FROM node:18-alpine
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь исходный код
COPY . .

# Собираем продакшен-версию приложения
RUN npm run build

# Открываем порт для продакшен-сервера
EXPOSE 3000

# Запускаем продакшен-сервер Next.js
CMD ["npm", "run", "start"]
