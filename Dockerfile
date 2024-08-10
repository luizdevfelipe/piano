FROM node:20.16-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD ["npm", "start"]

EXPOSE 8002

# docker run -p 8002:8002 -v ${PWD}:/app -v /app/node_modules nome-da-imagem