
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('services', {
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
    ftype: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
    },
    specialization: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
    },
    price_type: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      required: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('services'),
};
