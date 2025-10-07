import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Sistema Acadêmico",
      version: "1.0.0"
    }
  },
  apis: ["./src/routes/*.ts"]
};

const specs = swaggerJsDoc(options);

export { swaggerUi, specs };
