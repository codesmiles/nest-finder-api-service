const { Router } = require("express");
const app = Router();
const authRoutes = require("./api/routes/auth.route");
const userRoutes = require("./api/routes/user.route");
const swagger = require("./configs/documentation.config")

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use(`/${process.env.API_DOC}`, ...swagger);

module.exports = app;
