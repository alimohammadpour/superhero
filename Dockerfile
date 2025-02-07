FROM node:20.12.2

WORKDIR /superhero

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 4010

CMD ["npm", "run", "start:dev"]
