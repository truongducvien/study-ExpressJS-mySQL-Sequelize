const { body } = require('express-validator');
const { getRequiredFieldMsg } = require('../../utils');

const createUserValidator = [
  body('name', getRequiredFieldMsg('name')).notEmpty(),
];

module.exports = { createUserValidator };
