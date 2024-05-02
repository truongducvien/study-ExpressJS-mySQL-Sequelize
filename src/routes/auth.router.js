const express = require('express');
const { logIn, register } = require('../controller/auth.controller');
const { trimRequest } = require('../middleware');

const authRouter = express.Router();

authRouter.post('/login', trimRequest, logIn);

authRouter.post('/register', trimRequest, register);

module.exports = { authRouter };
