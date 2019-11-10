const { File } = require('../models');

module.exports = {
  async index(req, res) {
    const { id } = req.params;
    const files = await File.findAll({ where: { user_id: id }, include: 'user_file' });
    return res.json(files);
  },
  async store(req, res) {
    const { user_id } = req.params;

    const file = await File.create({
      original_name: req.file.originalname,
      extension: req.file.mimetype,
      path: `http://localhost:${process.env.PORT || 3001}/files/${req.fullName}`,
      user_id,
    });
    return res.json(file);
  },
};
