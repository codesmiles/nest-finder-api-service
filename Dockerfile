FROM node:lts-alpine
ENV NODE_ENV=$NODE_ENV
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN yarn install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node


# # Use the Alpine version of Node
# FROM node:lts-alpine

# # Set environment variables
# ARG APP_ENV=production
# ENV APP_ENV=$APP_ENV
# ENV NODE_ENV=$APP_ENV

# # Set the working directory
# WORKDIR /usr/src/app

# # Copy package.json and yarn.lock to install dependencies
# COPY ["package.json", "yarn.lock*", "./"]

# # Install dependencies based on APP_ENV
# RUN if [ "$APP_ENV" = "development" ]; \
#     then yarn install --silent; \
#     else yarn install --production --silent; \
#     fi

# # Move node_modules outside the working directory if needed
# RUN if [ "$APP_ENV" != "production" ]; \
#     then mv node_modules ../; \
#     fi

# # Copy the rest of the application files
# COPY . .

# # Set permissions and ownership for the node user
# RUN chown -R node /usr/src/app

# # Expose the application port
# EXPOSE 3000

# # Run the container as a non-root user
# USER node

# # Set the default command
# CMD ["yarn", "start"]