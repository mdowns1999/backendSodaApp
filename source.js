const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
var corsOptions = {
  origin: "http://localhost:3000"
};


app
  .use(bodyParser.json())
  .use(cors(corsOptions))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
  })
  

  .use("/", require("./routes"));
  
  module.exports = app;
