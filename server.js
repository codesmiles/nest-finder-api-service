require("dotenv").config();
require("./src/configs/cache.config");

const express = require("express");
const srcApp = require("./src/app");
const logger = require("./src/configs/logger.config");
const { waitForDatabase } = require("./src/configs/database.config");

const server = express();
server.use(
  express.urlencoded({ extended: true }),
  express.json({ limit: "100mb" })
);
server.use(srcApp);

// health check
server.get('/', (req, res) => { 
    res.status(200).json({ message: 'Server is healthy' });
})


const startServer = async () => {
  try {
    // Wait for database to be ready
    await waitForDatabase();
    
    // Start your Express app here
    server.listen(process.env.PORT, () => {
      logger.info(`Server is running on ${process.env.DOMAIN}:${process.env.API_PORT}`);
      logger.info(
        `API Documentation available at ${process.env.DOMAIN}:${process.env.API_PORT}/${process.env.API_DOC}`
      );
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();