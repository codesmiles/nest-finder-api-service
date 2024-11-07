const express = require("express");
const authRoutes = require("./api/routes/auth.route");
const userRoutes = require("./api/routes/user.route");
const swagger = require("./configs/documentation.config")
const { ResponseType, SendResponse } = require("../Response");
const app = express();

app.use(
  express.urlencoded({ extended: true }),
  express.json({ limit: "100mb" })
);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use(`/${process.env.API_DOC}`, ...swagger);



// health check
app.get("/", (req, res) => {
  res
    .status(200)
    .json(new SendResponse("Server Is Healthy", 200, ResponseType.SUCCESS));
});



module.exports = app;
