FROM node:18-alpine as build

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY src/ ./src
COPY public/ ./public

RUN yarn build

FROM node:18-alpine as prod
COPY api/ ./
RUN yarn install
RUN mkdir src/public
COPY --from=build /app/build ./stc/public

CMD ["yarn", "start"]