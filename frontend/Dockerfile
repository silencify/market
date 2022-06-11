FROM node:14

WORKDIR /frontend

COPY package*.json ./

RUN npm install

EXPOSE 9001

CMD ["npm", "start"]
