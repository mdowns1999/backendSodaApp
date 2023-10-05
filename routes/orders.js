const routes = require('express').Router();
const controller = require('../controller/order');

routes.get('/', controller.getAllOrders);
routes.post('/', controller.postNewOrder);


module.exports = routes;