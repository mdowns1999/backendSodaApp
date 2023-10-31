const routes = require("express").Router();
const controller = require("../controller/soda");

routes.get("/", controller.getAllSodas);
routes.get("/:id", controller.getSodaByID);

module.exports = routes;
