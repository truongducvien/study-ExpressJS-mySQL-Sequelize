const express = require('express');
const { usersRouter } = require('./users.route');
const { PATH } = require('../constant/path');
const { productsRouter } = require('./products.router');
const { cartRouter } = require('./carts.router');

const router = express.Router();

const ROUTER_MAPPING = [
  [PATH.USERS, usersRouter],
  [PATH.PRODUCTS, productsRouter],
  [PATH.CARTS, cartRouter],
];

ROUTER_MAPPING.forEach(([route, routeControl]) =>
  router.use(`/api/${route}`, routeControl)
);

// Handle 404:
router.use((req, res, next) => {
  next('No result');
});

module.exports = { router };
