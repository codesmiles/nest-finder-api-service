require("dotenv").config();
require("./src/configs/cache.config");
const server = require("./src/app");
const logger = require("./src/configs/logger.config");
const { waitForDatabase } = require("./src/configs/database.config");


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
    console.error("Error starting server:", error);
  }
};

startServer();
