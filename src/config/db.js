require('dotenv').config();
const { Sequelize } = require('sequelize');

const database = process.env.DB_NAME || 'study2';
const username = process.env.DB_USERNAME || 'root';
const password = process.env.DB_PASSWORD || '1234567';
const host = process.env.DB_HOST || '127.0.0.1';

const sequelize = new Sequelize(database, username, password, {
  dialect: 'mysql',
  host,
});

module.exports = { sequelize };
