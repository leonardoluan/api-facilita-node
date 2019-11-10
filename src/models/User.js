const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      birth_date: DataTypes.DATE,
      user_uf: DataTypes.STRING,
      user_city: DataTypes.STRING,
    },
    {
      sequelize,
    });
  }

  static associate(models) {
    this.hasMany(models.Service, { foreignKey: 'user_id', as: 'service' });
  }
}

module.exports = User;
