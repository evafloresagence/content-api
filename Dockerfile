FROM node:14
RUN npm config set http-proxy=http://192.168.205.251:3128
RUN npm config set https-proxy=http://192.168.205.251:3128
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run develop
