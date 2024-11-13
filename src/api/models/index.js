const User = require("./user.model")
const { migrate_tables } = require("../../configs/database.config");

// migrate tables to the databases
migrate_tables();

module.exports = {
User
}