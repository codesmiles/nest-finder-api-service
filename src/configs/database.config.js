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
  logging: (msg) => logger.debug(msg),
});

const waitForDatabase = async () => {
  return await sequelize
    .authenticate()
    .then(() => {
      logger.info("Database connection successful.");
    })
    .catch((error) => {
      logger.error("Unable to connect to the database: ", error);
    });
};

const migrate_tables = () => {
  return sequelize
    .sync()
    .then(() => {
      logger.info(` tables migrated successfully!`);
    })
    .catch((error) => {
      logger.error(`Unable to migrate tables : ${error}`);
    });
};

module.exports = { sequelize, waitForDatabase, migrate_tables };
