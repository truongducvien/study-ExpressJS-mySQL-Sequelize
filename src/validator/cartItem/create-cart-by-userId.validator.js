const { param, body } = require('express-validator');
const { getRequiredFieldMsg } = require('../../utils');

const createCartByUserId = [
  param('userId', getRequiredFieldMsg('userId')).notEmpty(),
  body('productId', getRequiredFieldMsg('productId')).notEmpty(),
  body('quantity', getRequiredFieldMsg('quantity'))
    .notEmpty()
    .isInt({ min: 1 })
    .withMessage('quantity must be at least 1'),
];

module.exports = { createCartByUserId };
