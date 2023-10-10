const routes = require('express').Router();
const controller = require('../controller/custom-sodas');

routes.get('/', controller.getCustomSodaIngredients);

module.exports = routes;