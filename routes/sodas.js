const routes = require('express').Router();
const controller = require('../controller/index');

routes.get('/', controller.getAllSodas);


module.exports = routes;