const routes = require("express").Router();
const controller = require("../controller/order");

routes.get("/", controller.getAllOrders);
routes.get("/:id", controller.getOrderByID);
routes.post("/", controller.postNewOrder);

module.exports = routes;
