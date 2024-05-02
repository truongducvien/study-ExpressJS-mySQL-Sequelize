const { MESSAGES, sessions } = require('../constant/common');
const { RES_CREATED_SUCCESS } = require('../constant/res-status');
const { User } = require('../model');
const { checkExisted } = require('../utils');
const {
  sendError,
  sendGetSuccess,
  sendBadRequestError,
  sendPostSuccess,
} = require('../utils');
const { sendUnauthorizedError } = require('../utils/res-send');

const getList = async (req, res) => {
  try {
    const { signedCookies } = req;
    if (sessions.includes(signedCookies?.sessionId)) {
      const users = await User.findAll();
      sendGetSuccess(res, users);
    } else {
      sendUnauthorizedError(res);
    }
  } catch (error) {
    sendError(res, error);
  }
};

const getById = async (req, res) => {
  const userId = req?.params?.userId;
  try {
    const user = await User.findByPk(userId);
    sendGetSuccess(res, user);
  } catch (error) {
    sendError(res, error);
  }
};

const create = async (req, res) => {
  const data = req.body;

  const isExisted = await checkExisted(User, { name: data?.name });
  if (isExisted) {
    sendBadRequestError(res, MESSAGES.USER_EXISTED);
  } else {
    try {
      const newUser = await User.create(data);
      sendPostSuccess(
        res,
        newUser,
        RES_CREATED_SUCCESS.message.replace('%key', 'User')
      );
    } catch (error) {
      sendError(res, error);
    }
  }
};

module.exports = { getList, getById, create };
