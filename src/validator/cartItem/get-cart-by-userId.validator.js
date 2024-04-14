const { param } = require('express-validator');
const { getRequiredFieldMsg } = require('../../utils');

const getCartByUserIdValidator = [
  param('userId', getRequiredFieldMsg('userId')).notEmpty(),
];

module.exports = { getCartByUserIdValidator };
