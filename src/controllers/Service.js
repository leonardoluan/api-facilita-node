const {
  Service,
  User,
  DoneWorkers,
  File,
} = require('../models');

module.exports = {
  async index(req, res) {
    const services = await Service.findAll();

    return res.json(services);
  },
  async store(req, res) {
    const service = await Service.create(req.body);
    return res.json(service);
  },
  async update(req, res) {
    const { id_service } = req.params;

    const isService = await Service.findByPk(id_service);

    if (!isService) {
      return res.status(404).json({
        error: 'Service not found',
      });
    }
    const [number, service] = await Service.update(
      { ...req.body },
      { where: { id: id_service }, returning: true },
    );

    return res.json(service[0]);
  },
  async destroy(req, res) {
    const { id_service } = req.params;

    const isService = await Service.fdByPk(id_service);

    if (!isService) {
      return res.status(404).json({
        error: 'Service not found!',
      });
    }
    await Service.destroy({ where: { id: id_service } });

    return res.status(200);
  },
  async findServidesByType(req, res) {
    const { type_service } = req.params;

    const services = await Service.findAll({
      where: { type: type_service },
      include: [
        {
          model: User,
          as: 'user',
          include: [{
            model: DoneWorkers,
            as: 'userworker',
          },
          {
            model: File,
            as: 'file',
          }],
        },
      ],
      returning: true,
    });
    return res.json(services);
  },
};
