FROM node:16-alpine3.11
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --silent
COPY . .
EXPOSE 8080