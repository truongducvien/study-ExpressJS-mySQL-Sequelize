const express = require('express');
const { trimRequest, catchValidationResult } = require('../middleware');
const {
  getCartByUserIdValidator,
} = require('../validator/cartItem/get-cart-by-userId.validator');
const {
  getByUserId,
  createByUserId,
} = require('../controller/cartItem.controller');
const {
  createCartByUserId,
} = require('../validator/cartItem/create-cart-by-userId.validator');

const cartRouter = express.Router();

cartRouter.get(
  '/:userId',
  trimRequest,
  getCartByUserIdValidator,
  catchValidationResult,
  getByUserId
);

cartRouter.post(
  '/:userId',
  trimRequest,
  createCartByUserId,
  catchValidationResult,
  createByUserId
);

module.exports = { cartRouter };
