const { Model, DataTypes } = require('sequelize');

class DoneWorker extends Model {
  static init(sequelize) {
    super.init({
      comment: DataTypes.STRING,
      total_price: DataTypes.INTEGER,
      starts: DataTypes.INTEGER,
      start_service: DataTypes.DATE,
      finish_service: DataTypes.DATE,
    },
    {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'worker_id', as: 'user_worker' });
    this.belongsTo(models.User, { foreignKey: 'contractor_id', as: 'user_contractor' });
    this.belongsTo(models.Service, { foreignKey: 'service_id', as: 'service' });
  }
}

module.exports = DoneWorker;
