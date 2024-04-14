const { MESSAGES } = require('../constant/common');

/**
 * Check if a record has already existed in the table
 * @param {import("sequelize").Model} model Model name, exported from src/model
 * @param {string} condition object that is put in sequelize "where" options
 * @returns {boolean}
 */
const checkExisted = async (model, condition) => {
  try {
    const findResult = await model?.findOne({ where: condition });
    if (findResult) {
      return true;
    }
    return false;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * @param {string} fieldName
 * @returns
 */
const getRequiredFieldMsg = (fieldName) =>
  MESSAGES.REQUIRED_FIELD.replace('This field', fieldName);

const getExistedFieldMsg = (fieldName) =>
  MESSAGES.NOT_EXIST_FIELD.replace('This field', fieldName);

module.exports = { checkExisted, getRequiredFieldMsg, getExistedFieldMsg };
