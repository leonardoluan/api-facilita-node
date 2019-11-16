
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('files', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    original_name: Sequelize.STRING,
    extension: Sequelize.STRING,
    path: {
      type: Sequelize.STRING,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    type_file:{
      type: Sequelize.STRING,
    }
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('files'),
};
