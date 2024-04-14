const { Base } = require('./base.model');

const initProductModel = (sequelize, DataTypes) => {
  class Product extends Base {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        hooks: true,
      });
      this.hasOne(models.CartItem, {
        foreignKey: 'productId',
        onDelete: 'CASCADE',
        hooks: true,
      });
    }
  }

  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { sequelize, paranoid: true }
  );

  return Product;
};

module.exports = { initProductModel };
