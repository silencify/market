FROM node:14

WORKDIR /backend

COPY package*.json ./

RUN npm install

EXPOSE 9090

CMD ['npm', 'run', 'dev:start']
