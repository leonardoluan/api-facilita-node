const { Model, DataTypes } = require('sequelize');

class Service extends Model {
  static init(sequelize) {
    super.init({
      ftype: DataTypes.STRING,
      description: DataTypes.STRING,
      specialization: DataTypes.STRING,
      price_type: DataTypes.STRING,
      price: DataTypes.STRING,
    },
    {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.hasMany(models.DoneWorker, { foreignKey: 'service_id', as: 'doneworker' });
  }
}

module.exports = Service;
