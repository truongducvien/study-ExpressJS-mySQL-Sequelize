const { Base } = require('./base.model');

const initCartItemModel = (sequelize, DataTypes) => {
  class CartItem extends Base {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
      this.belongsTo(models.Product, {
        foreignKey: 'productId',
        onDelete: 'CASCADE',
      });
    }
  }

  CartItem.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true,
    }
  );

  return CartItem;
};

module.exports = { initCartItemModel };
