//RUn: npm run swagger-autogen to update Swagger docs
const swaggerAutogen = require("swagger-autogen")();

// const doc = {
//   info: {
//     title: 'My API',
//     description: 'Poppin Sodas'
//   },
//   host: 'localHost:8080',
//   schemes: ['http']
// };
const doc = {
  info: {
    title: "My API",
    description: "Poppin Sodas",
  },
  host: "poppinsodasbackend.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
