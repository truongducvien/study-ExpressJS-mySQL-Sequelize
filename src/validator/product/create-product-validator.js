const { body } = require('express-validator');
const { getRequiredFieldMsg } = require('../../utils');

const createProductValidator = [
  body('name', getRequiredFieldMsg('name')).notEmpty(),
  body('price', getRequiredFieldMsg('price')).notEmpty(),
  body('userId', getRequiredFieldMsg('userId')).notEmpty(),
];

module.exports = { createProductValidator };
