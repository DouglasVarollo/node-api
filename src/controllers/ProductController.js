const ProductSchema = require('../models/Product');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const response = await ProductSchema.paginate({}, {
      page,
      limit: 10
    });

    res.json(response);
  },

  async show(req, res) {
    const response = await ProductSchema.findById(req.params.id);
    res.json(response);
  },

  async store(req, res) {
    const response = await ProductSchema.create(req.body);
    res.json(response);
  },

  async update(req, res) {
    const response = await ProductSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(response);
  },

  async destroy(req, res) {
    const response = await ProductSchema.findByIdAndDelete(req.params.id);
    res.send()
  }
}