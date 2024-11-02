FROM node:lts-alpine AS base
WORKDIR /usr/src/app
COPY package.json yarn.lock ./

# Development stage
FROM base AS development
RUN yarn global add nodemon
RUN yarn install
COPY . .
EXPOSE 3000
USER node
CMD ["yarn", "dev"]

# Production stage
FROM base AS production
RUN yarn install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["yarn", "start"]