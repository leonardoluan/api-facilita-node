const jwt = require('jsonwebtoken');
const { DoneWorkers } = require('../models');

module.exports = {
  async index(req, res) {
    const doneWorker = await DoneWorkers.findAll({
      include: ['userworker', 'usercontractor', 'service'],
    });
    return res.json(doneWorker);
  },
  async store(req, res) {
    const doneWorker = await DoneWorkers.create(req.body);
    return res.json(doneWorker);
  },
  async update(req, res) {
    const { id_doneWorker } = req.params;

    const isDoneWorker = await DoneWorkers.findByPk(id_doneWorker);

    if (!isDoneWorker) {
      return res.status(404).json({
        error: 'Done Worker not found',
      });
    }
    const [number, doneWorker] = await DoneWorkers.update(
      { ...req.body },
      { where: { id: id_doneWorker }, returning: true },
    );

    return res.json(doneWorker[0]);
  },
  async destroy(req, res) {
    const { id_doneWorker } = req.params;

    const isDoneWorker = await DoneWorkers.findByPk(id_doneWorker);

    if (!isDoneWorker) {
      return res.status(404).json({
        error: 'Done Worker not found!',
      });
    }
    await DoneWorkers.destroy({ where: { id: id_doneWorker } });

    return res.status(200);
  },
};
