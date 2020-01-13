FROM node:carbon

WORKDIR /app

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install

COPY src /app

EXPOSE 3000

CMD [ "nodemon", "server.js" ]