const {
  checkExisted,
  getRequiredFieldMsg,
  getExistedFieldMsg,
} = require('./common');
const { createOrUpdateData } = require('./createOrUpdateData');
const {
  sendSuccess,
  sendGetSuccess,
  sendPostSuccess,
  sendPutSuccess,
  sendDeleteSuccess,
  sendError,
  sendBadRequestError,
} = require('./res-send');

module.exports = {
  checkExisted,
  getRequiredFieldMsg,
  getExistedFieldMsg,
  createOrUpdateData,
  sendSuccess,
  sendGetSuccess,
  sendPostSuccess,
  sendPutSuccess,
  sendDeleteSuccess,
  sendError,
  sendBadRequestError,
};
