const Item = require('../models/Item');

exports.getItems = async (req, res) => {
  try {
    const items = await Item.findAll({ where: { userId: req.userId } });
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};

exports.createItem = async (req, res) => {
  const { title, description } = req.body;
  try {
    const item = await Item.create({ title, description, userId: req.userId });
    res.status(201).json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};

exports.updateItem = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;
  try {
    const item = await Item.findOne({ where: { id, userId: req.userId } });
    if (!item) return res.status(404).json({ message: 'Item tidak ditemukan' });

    item.title = title;
    item.description = description;
    await item.save();
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};

exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findOne({ where: { id, userId: req.userId } });
    if (!item) return res.status(404).json({ message: 'Item tidak ditemukan' });

    await item.destroy();
    res.json({ message: 'Item dihapus' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};
