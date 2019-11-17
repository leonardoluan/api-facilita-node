const { Model, DataTypes } = require('sequelize');

class DoneWorker extends Model {
  static init(sequelize) {
    super.init({
      comment: DataTypes.STRING,
      total_price: DataTypes.INTEGER,
      stars: DataTypes.INTEGER,
      start_service: DataTypes.DATE,
      finish_service: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'worker_id', as: 'userworker' });
    this.belongsTo(models.User, { foreignKey: 'contractor_id', as: 'usercontractor' });
    this.belongsTo(models.Service, { foreignKey: 'service_id', as: 'service' });
    
  }
}

module.exports = DoneWorker;
