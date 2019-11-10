const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const { User, Service, DoneWorkers } = require('../models');

const connection = new Sequelize(dbConfig);

User.init(connection);
Service.init(connection);
DoneWorkers.init(connection);

User.associate(connection.models);
Service.associate(connection.models);
DoneWorkers.associate(connection.models);

module.exports = connection;
