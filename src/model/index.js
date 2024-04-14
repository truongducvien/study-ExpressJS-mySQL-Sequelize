const { DataTypes } = require('sequelize');
const { initUserModel } = require('./user.model');
const { initProductModel } = require('./product.model');
const { sequelize } = require('../config');
const { initCartItemModel } = require('./cartItem.model');

const models = {
  Product: initProductModel(sequelize, DataTypes),
  User: initUserModel(sequelize, DataTypes),
  CartItem: initCartItemModel(sequelize, DataTypes),
};

// Association:
Object.values(models).forEach((model) => {
  model?.associate?.(models);
});

module.exports = { ...models };
