const { sessions } = require('../constant/common');
const { User } = require('../model');
const {
  sendError,
  sendPostSuccess,
  checkExisted,
  sendBadRequestError,
} = require('../utils');

const register = async (req, res) => {
  const data = req.body;

  const isExisted = await checkExisted(User, { name: data?.name });
  if (isExisted) {
    sendBadRequestError(res, 'This name has already been existed');
  } else {
    try {
      const newUser = await User.create(data);
      sendPostSuccess(res, newUser, 'Register successfully');
    } catch (error) {
      sendError(res, error);
    }
  }
};

const logIn = async (req, res) => {
  try {
    const { name } = req.body;
    const isUserExist = await checkExisted(User, { name });
    if (isUserExist) {
      const sessionKey = name.trim(); // Fake a session key
      if (!sessions.includes(sessionKey)) sessions.push(sessionKey);
      res.cookie('sessionId', sessionKey, {
        signed: true,
        httpOnly: true,
        maxAge: 5 * 60 * 1000,
      });
      sendPostSuccess(res, {}, 'Log in successfully');
    } else {
      sendBadRequestError(res, 'User does not exist');
    }
  } catch (error) {
    sendError(res, error);
  }
};

module.exports = { register, logIn };
