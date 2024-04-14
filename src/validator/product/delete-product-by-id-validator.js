const { param } = require('express-validator');

const deleteProductByIdValidator = [
  param('productId', 'This field is required').notEmpty(),
];

module.exports = { deleteProductByIdValidator };
