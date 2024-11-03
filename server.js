require("dotenv").config();
require("./src/configs/cache.config");
require("./src/configs/database.config").testDatabaseConnection();

const express = require("express");
const srcApp = require("./src/app");
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

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on ${process.env.DOMAIN}:${process.env.API_PORT}`);
    console.log(
      `API Documentation available at ${process.env.DOMAIN}:${process.env.API_PORT}/${process.env.API_DOC}`
    );
});
