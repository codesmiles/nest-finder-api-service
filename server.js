require("dotenv").config();
const server = require("./src/app");
const { waitForDatabase, logger, redisClient } = require("./src/configs");

redisClient.on("connect", () => {
  logger.info("Redis client connected");
});
redisClient.on("error", (error) => {
  logger.error("Redis Client Error:", error);
});

const PORT = process.env.PORT || 3000;
const startServer = async () => {
  try {
    await waitForDatabase();

    server.listen(PORT, () => {
      logger.info(
        `Server is running on ${process.env.DOMAIN}:${process.env.API_PORT}`
      );
      logger.info(
        `API Documentation available at ${process.env.DOMAIN}:${process.env.API_PORT}/${process.env.API_DOC}`
      );
    });
  } catch (error) {
    logger.error("Error starting server:", error);
  }
};

startServer();
