const { MESSAGES } = require('../constant/common');
const {
  RES_INTERNAL_SERVER_ERROR,
  RES_GET_SUCCESS,
  RES_BAD_REQUEST,
  RES_CREATED_SUCCESS,
  RES_UPDATED_SUCCESS,
  RES_DELETED_SUCCESS,
} = require('../constant/res-status');

// ===========================  SUCCESS RESPONSE: ===========================
/**
 * Send success response to client:
 * @param {any} res
 * @param {{status: number, message: string, data: any}} config
 */
const sendSuccess = (res, config = {}) => {
  res.status(config.status || RES_GET_SUCCESS.status).json({
    result: config.message || MESSAGES.SUCCESS,
    data: config.data || null,
  });
};

/**
 * Send success GET response to client:
 * @param {*} res
 * @param {*} data
 * @param {string?} message
 */
const sendGetSuccess = (res, data, message) => {
  sendSuccess(res, {
    status: RES_GET_SUCCESS.status,
    message: message || MESSAGES.SUCCESS,
    data,
  });
};

/**
 * Send success POST response to client:
 * @param {*} res
 * @param {*} data
 * @param {string?} message
 */
const sendPostSuccess = (res, data, message) => {
  sendSuccess(res, {
    status: RES_CREATED_SUCCESS.status,
    message: message || MESSAGES.SUCCESS,
    data,
  });
};

/**
 * Send success PUT response to client:
 * @param {*} res
 * @param {*} data
 * @param {string?} message
 */
const sendPutSuccess = (res, data, message) => {
  sendSuccess(res, {
    status: RES_UPDATED_SUCCESS.status,
    message: message || MESSAGES.SUCCESS,
    data,
  });
};

/**
 * Send success DELETE response to client:
 * @param {*} res
 * @param {*} data
 * @param {string?} message
 */
const sendDeleteSuccess = (res, message) => {
  sendSuccess(res, {
    status: RES_DELETED_SUCCESS.status,
    message: message || MESSAGES.SUCCESS,
  });
};

// ============================  ERROR RESPONSE: ============================
/**
 * Send error response to client:
 * @param {any} res
 * @param {Object} err
 * @param {number} err.status
 * @param {string} err.message
 */
const sendError = (res, err) => {
  const statusCode = err?.status || RES_INTERNAL_SERVER_ERROR.status;
  res.status(statusCode).json({
    error: {
      code: statusCode,
      message: err?.message || MESSAGES.UNEXPECTED_ERROR,
    },
  });
};

/**
 * Send bad request error (400) response to client:
 * @param {any} res Middleware's response
 * @param {string | string[]} message
 */
const sendBadRequestError = (res, message) => {
  sendError(res, {
    status: RES_BAD_REQUEST.status,
    message: message || RES_BAD_REQUEST.message,
  });
};

module.exports = {
  sendSuccess,
  sendGetSuccess,
  sendPostSuccess,
  sendPutSuccess,
  sendDeleteSuccess,
  sendError,
  sendBadRequestError,
};
