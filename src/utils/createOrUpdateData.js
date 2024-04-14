/**
 * Create new record in database, update if it has already existed, using Sequelize's method:
 * @param {*} model Sequelize model
 * @param {object} existCondition The condition of the record for considering as existed.
 * Will be put in the sequelize "where" options.
 * @param {object} fieldsUpdate The fields that need to be updated when the record exists
 * @param {object} fieldsCreate The fields that need to create a new record
 */
const createOrUpdateData = async (
  model,
  existCondition,
  fieldsUpdate,
  fieldsCreate
) => {
  const existedItem = await model.findOne({
    where: existCondition || {},
  });
  let isUpdated = false;
  if (existedItem) {
    isUpdated = true;
    const newExistedItem = await existedItem.update(fieldsUpdate || {});
    return [newExistedItem, isUpdated];
  }
  const newItem = await model.create(fieldsCreate || {});
  return [newItem, isUpdated];
};

module.exports = { createOrUpdateData };
