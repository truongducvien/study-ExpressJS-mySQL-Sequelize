const { MESSAGES } = require('./common');

// Success
const RES_CREATED_SUCCESS = {
  status: 201,
  message: '%key created!',
};

const RES_GET_SUCCESS = {
  status: 200,
  message: MESSAGES.SUCCESS,
};

const RES_UPDATED_SUCCESS = {
  status: 200,
  message: '%key updated!',
};

const RES_DELETED_SUCCESS = {
  status: 200,
  message: '%key deleted!',
};

//= ================================
// Error
const RES_BAD_REQUEST = {
  status: 400,
  message: MESSAGES.BAD_REQUEST,
};

const RES_UNAUTHORIZED = {
  status: 401,
  message: MESSAGES.UNAUTHORIZED,
};

const RES_NOT_FOUND = {
  status: 404,
  message: MESSAGES.NOT_FOUND,
};

const RES_INTERNAL_SERVER_ERROR = {
  status: 500,
  message: MESSAGES.INTERNAL_SERVER_ERROR,
};

module.exports = {
  RES_CREATED_SUCCESS,
  RES_GET_SUCCESS,
  RES_UPDATED_SUCCESS,
  RES_DELETED_SUCCESS,
  RES_BAD_REQUEST,
  RES_UNAUTHORIZED,
  RES_NOT_FOUND,
  RES_INTERNAL_SERVER_ERROR,
};
