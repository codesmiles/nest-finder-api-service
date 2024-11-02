require("dotenv").config();
const express = require("express");
const srcApp = require("./src/app");
const server = express();
const {testDatabaseConnection } = require("./src/configs/database.config");
server.use(
  express.urlencoded({ extended: true }),
  express.json({ limit: "100mb" })
);
server.use(srcApp);



server.get('/', (req, res) => { 
    res.status(200).json({ message: 'Server is healthy' });
})

testDatabaseConnection();
server.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on ${process.env.DOMAIN}:${process.env.API_PORT}`);
    console.log(
      `API Documentation available at ${process.env.DOMAIN}:${process.env.API_PORT}/${process.env.API_DOC}`
    );
});
