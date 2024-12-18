const express = require("express");
const apiRoutes = require("./api/routes");
const ROUTES = require("./api/utils/routes.utils");
const { errorHandler } = require("./api/middlewares");
const swagger = require("./configs/documentation.config");
const app = express();

app.use(
  express.urlencoded({ extended: true }),
  express.json({ limit: "100mb" })
);

// health check
app.get("/", (req, res) => {
  return res.status(200).json("Server Is Healthy");
});

app.use(errorHandler);
app.use(`${ROUTES.apiV1}`, apiRoutes);
app.use(`/${process.env.API_DOC}`, ...swagger);


module.exports = app;
