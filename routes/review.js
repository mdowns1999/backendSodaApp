const routes = require("express").Router();
const controller = require("../controller/review");

routes.get("/", controller.getAllReviews);
routes.post("/", controller.postNewReview);

module.exports = routes;
