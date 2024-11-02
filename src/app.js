const { Router } = require("express");
const app = Router();
const authRoutes = require("./api/routes/auth.route");
const swagger = require("./config/swagger")

app.use("/api/user", authRoutes);
app.use(`/${process.env.API_DOC}`, ...swagger);

module.exports = app;
