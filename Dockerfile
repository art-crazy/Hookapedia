FROM node:18-alpine
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь исходный код
COPY . .

# Открываем порт, на котором обычно запускается dev-сервер
EXPOSE 3000

# Запускаем dev-сервер (например, React, Vue, Vite)
CMD ["npm", "run", "dev"]
