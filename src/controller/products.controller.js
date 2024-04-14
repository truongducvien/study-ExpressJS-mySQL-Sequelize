const { Op } = require('sequelize');
const { Product, User, CartItem } = require('../model');
const {
  sendError,
  sendGetSuccess,
  sendBadRequestError,
  sendPostSuccess,
  sendPutSuccess,
  sendDeleteSuccess,
} = require('../utils');
const {
  RES_CREATED_SUCCESS,
  RES_UPDATED_SUCCESS,
} = require('../constant/res-status');
const { checkExisted } = require('../utils');
const { sequelize } = require('../config');

const getList = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: User,
    });
    sendGetSuccess(res, products);
  } catch (error) {
    sendError(res, error);
  }
};

const create = async (req, res) => {
  try {
    const { name, price } = req.body;
    const isExisted = await checkExisted(Product, {
      [Op.and]: { name, price },
    });
    if (isExisted) {
      sendBadRequestError(res, 'This product has already existed');
    } else {
      const newProduct = await Product.create(req.body);
      sendPostSuccess(
        res,
        newProduct,
        RES_CREATED_SUCCESS.message.replace('%key', 'Product')
      );
    }
  } catch (error) {
    sendError(res, error);
  }
};

const update = async (req, res) => {
  try {
    const productId = req?.params?.productId;
    const isExisted = await checkExisted(Product, { id: productId });
    if (!isExisted) {
      sendBadRequestError(res, 'The productId does not exist');
    } else {
      const updatedProduct = await Product.update(req.body, {
        where: { id: productId },
      });
      sendPutSuccess(
        res,
        updatedProduct,
        RES_UPDATED_SUCCESS.message.replace('%key', 'Product')
      );
    }
  } catch (error) {
    sendError(res, error);
  }
};

const deleteOne = async (req, res) => {
  try {
    await sequelize.transaction(async () => {
      const { productId } = req.params;
      const isProductExist = await checkExisted(Product, { id: productId });
      if (!isProductExist) {
        sendBadRequestError(res, 'The productId does not exist');
      } else {
        await Promise.all([
          Product.destroy({ where: { id: productId } }),
          CartItem.destroy({ where: { productId } }),
        ]);
        sendDeleteSuccess(res, 'Product has been deleted successfully');
      }
    });
  } catch (error) {
    sendError(res, error);
  }
};

module.exports = { getList, create, update, deleteOne };
