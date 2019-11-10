const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const {
  User, Service, DoneWorkers, File,
} = require('../models');

const connection = new Sequelize(dbConfig);

User.init(connection);
Service.init(connection);
DoneWorkers.init(connection);
File.init(connection);

User.associate(connection.models);
Service.associate(connection.models);
DoneWorkers.associate(connection.models);
File.associate(connection.models);

module.exports = connection;
