const express = require('express');
const { getList, getById, create } = require('../controller/users.controller');
const { trimRequest, catchValidationResult } = require('../middleware');
const { createUserValidator } = require('../validator/user');

const usersRouter = express.Router();

usersRouter.get('/', trimRequest, getList);

usersRouter.get('/:userId', trimRequest, getById);

usersRouter.post(
  '/',
  trimRequest,
  createUserValidator,
  catchValidationResult,
  create
);

module.exports = { usersRouter };
