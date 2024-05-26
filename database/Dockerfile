FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3000

RUN yarn db:init
CMD ["yarn", "start"]
