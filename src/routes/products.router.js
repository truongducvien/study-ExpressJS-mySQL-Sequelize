const express = require('express');
const {
  getList,
  create,
  update,
  deleteOne,
} = require('../controller/products.controller');
const { trimRequest, catchValidationResult } = require('../middleware');
const { createProductValidator } = require('../validator/product');
const {
  deleteProductByIdValidator,
} = require('../validator/product/delete-product-by-id-validator');

const productsRouter = express.Router();

productsRouter.get('/', trimRequest, getList);

productsRouter.post(
  '/',
  trimRequest,
  createProductValidator,
  catchValidationResult,
  create
);

productsRouter.put('/:productId', trimRequest, update);

productsRouter.delete(
  '/:productId',
  trimRequest,
  deleteProductByIdValidator,
  catchValidationResult,
  deleteOne
);

module.exports = { productsRouter };
