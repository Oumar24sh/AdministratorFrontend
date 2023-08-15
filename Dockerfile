FROM node:16.20.2-alpine3.17 as build
ARG BASE_URL
ARG PORT




ENV BASE_URL=$BASE_URL
ENV PORT=$PORT

WORKDIR /usr/src/app

COPY package*.json .

RUN npm i

COPY . .

RUN npm run build

