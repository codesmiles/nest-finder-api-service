FROM node:lts-alpine AS base
RUN apk add --no-cache su-exec
WORKDIR /usr/src/app
RUN chown -R node:node /usr/src/app

# Development stage
FROM base AS development
USER node
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install
COPY --chown=node:node . .
EXPOSE 3000
CMD ["yarn", "dev"]

# Production stage
FROM base AS production
USER node
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile
COPY --chown=node:node . .
EXPOSE 3000
CMD ["yarn", "start"]