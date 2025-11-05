const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.User = require('./user')(sequelize, DataTypes);
db.Item = require('./item')(sequelize, DataTypes);

// Relasi
db.User.hasMany(db.Item, { foreignKey: 'userId' });
db.Item.belongsTo(db.User, { foreignKey: 'userId' });

module.exports = db;
