const { Sequelize } = require("sequelize");
const { logger } = require("./logger.config");


const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  port: process.env.MYSQL_LOCAL_PORT,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// Test the connection
const testDatabaseConnection = async () => {
  await sequelize.authenticate();
};

const waitForDatabase = async () => {
  let retries = 5;
  while (retries) {
    try {
      await testDatabaseConnection();
      logger.info("Database connection successful");
      return true;
    } catch (err) {
      logger.warn(`Database connection failed. ${retries} retries left...`);
      retries -= 1;
      // Wait for 5 seconds before retrying
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
  return false;
};

module.exports = { sequelize, waitForDatabase };
