FROM node:18-alpine as build

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . ./
RUN yarn build

FROM node:18-alpine as prod
COPY api/ ./
RUN yarn install
RUN mkdir public
COPY --from=build /app/build ./public

CMD ["yarn start"]