const { validationResult } = require('express-validator');
const { sendError } = require('../utils');
const { RES_BAD_REQUEST } = require('../constant/res-status');

const catchValidationResult = (req, res, next) => {
  const result = validationResult(req);
  if (result.isEmpty()) next();
  else {
    const errorMessages = result.errors.map((item) => item.msg);
    sendError(res, {
      status: RES_BAD_REQUEST.status,
      message: errorMessages,
    });
  }
};

module.exports = { catchValidationResult };
