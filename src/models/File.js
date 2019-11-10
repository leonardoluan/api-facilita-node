const { Model, DataTypes } = require('sequelize');

class File extends Model {
  static init(sequelize) {
    super.init({
      original_name: DataTypes.STRING,
      extension: DataTypes.STRING,
      path: DataTypes.STRING,
    },
    {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user_file' });
  }
}

module.exports = File;
