const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
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
        url: `${process.env.DOMAIN}:${process.env.API_PORT}`,
        description: `${process.env.APP_ENV}`,
      },
    ],
  },
  apis: [path.join(__dirname, "../api/routes/*.js")],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = [swaggerUi.serve, swaggerUi.setup(swaggerDocs)];
