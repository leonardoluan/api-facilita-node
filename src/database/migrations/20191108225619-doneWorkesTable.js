
module.exports = {

  up: (queryInterface, Sequelize) => queryInterface.createTable('done_workers', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    worker_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    contractor_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    service_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'services',
        key: 'id',
      },
    },
    file:{
      type: Sequelize.STRING,
    },
    comment: Sequelize.STRING,
    total_price: Sequelize.INTEGER,
    stars: Sequelize.INTEGER,
    start_service: Sequelize.DATE,
    finish_service: Sequelize.DATE,
    finished: Sequelize.STRING,
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('done_workers'),
};
