FROM node:18-alpine

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200

CMD [ "npm","start" ]
