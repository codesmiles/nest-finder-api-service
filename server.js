require("dotenv").config();
const express = require("express");
const srcApp = require("./src/app");
const server = express();

server.use(
  express.urlencoded({ extended: true }),
  express.json({ limit: "100mb" })
);
server.use(srcApp);


server.get('/', (req, res) => { 
    res.status(200).json({ message: 'Server is healthy' });
})
   
const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Server is running on localhost ${PORT}`);
    console.log(`API Documentation available at ${process.env.API_DOC}`);
});
