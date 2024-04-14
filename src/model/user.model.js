const { Base } = require('./base.model');

// class User {
//   constructor(userName) {
//     this.user_name = userName;
//   }

//   static async getList() {
//     const sql = 'SELECT * FROM user';
//     // const [result] = await pool.execute(sql);
//     const result = sequelize.query(sql);
//     return result;
//   }

//   static async getById(id) {
//     const sql = 'SELECT * FROM user WHERE id = ?';
//     const [result] = await pool.execute(sql, [id]);
//     return result;
//   }

//   async create() {
//     const key = Object.keys(this).join(',');
//     const data = Object.values(this);
//     const sql = `INSERT INTO ${DB_TABLE.USER} (${key}) VALUES (?)`;
//     const [insertedInfo] = await pool.execute(sql, data);
//     if (insertedInfo) {
//       const { insertId } = insertedInfo;
//       const [result] = await pool.execute('SELECT * FROM user WHERE id = ?', [
//         insertId,
//       ]);
//       return result;
//     }
//     return null;
//   }
// }

// module.exports = User;

const initUserModel = (sequelize, DataTypes) => {
  class User extends Base {
    static associate(models) {
      this.hasMany(models.CartItem, {
        foreignKey: 'userId',
      });
    }
  }

  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize, paranoid: true }
  );

  return User;
};

module.exports = { initUserModel };
