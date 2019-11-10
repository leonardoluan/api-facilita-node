
const express = require('express');
const multer = require('multer');
const configMulter = require('./services/multer');
const {
  User, Service, DoneWorker, File,
} = require('./controllers');
// const auth = require('./middlewares/auth');

const routes = express.Router();

// USER
routes.post('/users/login', User.login);
routes.get('/users', User.index);
routes.post('/users', User.store);
routes.put('/users/:id_user', User.update);
routes.delete('/users/:id_user', User.destroy);

// SERVICE
routes.get('/services', Service.index);
routes.post('/services', Service.store);
routes.put('/services/:id_service', Service.update);
routes.delete('/services/:id_service', Service.destroy);

// DONEWORKER
routes.get('/doneWorkers', DoneWorker.index);
routes.post('/doneWorkers', DoneWorker.store);
routes.put('/doneWorkers/:id_doneWorker', DoneWorker.update);
routes.delete('/doneWorkers/:id_doneWorker', DoneWorker.destroy);

// FILE
routes.get('/file/:id', File.index);
routes.post('/file/:user_id', multer(configMulter).single('file'), File.store);

module.exports = routes;
