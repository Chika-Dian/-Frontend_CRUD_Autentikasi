// File: models/Item.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');

const Item = sequelize.define('Item', {
  title: {
    type: DataTypes.STRING,
    allowNull: false, // wajib diisi
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false, // wajib diisi
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false, // wajib diisi
    references: {
      model: User,
      key: 'id',
    },
    onDelete: 'CASCADE', // kalau user dihapus, items ikut terhapus
    onUpdate: 'CASCADE',
  },
}, {
  tableName: 'items',
  timestamps: true, // createdAt & updatedAt otomatis
});

// Relasi
User.hasMany(Item, { foreignKey: 'userId', as: 'items' });
Item.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = Item;
