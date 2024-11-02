const { Router } = require("express");
const app = Router();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const authRoutes = require("./api/routes/auth.route");
const path = require("path");



const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Nest finder API Documentation",
      version: "1.0.0",
      description: "API documentation for your Express.js application",
    },
    servers: [
      {
        url: "http://localhost:8800",
        description: "Development server",
      },
    ],
  },
  apis: [
    path.join(__dirname, "./api/routes/*.js"),
  ],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use("/api/user", authRoutes);
app.use(`${process.env.API_DOC}`, swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;
