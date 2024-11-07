const express = require("express");
const apiRoutes = require("./api/routes/index");
const swagger = require("./configs/documentation.config");
const { ResponseType, SendResponse } = require("../Response");
const ROUTES = require("./configs/routes.config");
const app = express();

app.use(
  express.urlencoded({ extended: true }),
  express.json({ limit: "100mb" })
);

// health check
app.get("/", (req, res) => {
  res
    .status(200)
    .json(new SendResponse("Server Is Healthy", 200, ResponseType.SUCCESS));
});

app.use(`${ROUTES.apiV1}`, apiRoutes);
app.use(`/${process.env.API_DOC}`, ...swagger);

module.exports = app;
