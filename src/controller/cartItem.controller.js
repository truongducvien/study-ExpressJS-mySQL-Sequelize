const { sequelize } = require('../config');
const { CartItem, Product, User } = require('../model');
const {
  createOrUpdateData,
  checkExisted,
  sendBadRequestError,
  sendPostSuccess,
  sendPutSuccess,
} = require('../utils');
const { sendError, sendGetSuccess } = require('../utils');

const getByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await CartItem.findAll({
      where: { userId },
      include: Product,
    });
    sendGetSuccess(res, cart);
  } catch (error) {
    sendError(res, error);
  }
};

const createByUserId = async (req, res) => {
  try {
    await sequelize.transaction(async () => {
      const { userId } = req.params;
      const { productId, quantity } = req.body;

      // Check exist:
      const errorMessages = [];
      const isUserIdExist = await checkExisted(User, { id: userId });
      if (!isUserIdExist) errorMessages.push('The userId does not exist');

      const isProductIdExist = await checkExisted(Product, { id: productId });
      if (!isProductIdExist) errorMessages.push('The productId does not exist');

      if (errorMessages.length) {
        sendBadRequestError(res, errorMessages);
      } else {
        const [newCartItem, isUpdated] = await createOrUpdateData(
          CartItem,
          { productId, userId },
          { quantity },
          { userId, productId, quantity }
        );
        if (isUpdated) sendPutSuccess(res, newCartItem, 'Cart item updated');
        else sendPostSuccess(res, newCartItem, 'Cart item created');
      }
    });
  } catch (error) {
    sendError(res, error);
  }
};

module.exports = { getByUserId, createByUserId };
