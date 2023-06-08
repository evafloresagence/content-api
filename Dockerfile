FROM node:14.20.1-alpine
RUN npm config set http-proxy=http://192.168.205.251:3128
RUN npm config set https-proxy=http://192.168.205.251:3128
WORKDIR /app
COPY ./package.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]
