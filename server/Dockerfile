FROM node:23-alpine3.19

WORKDIR /app

COPY package-lock.json package.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "index.js"]