const Sequelize = require('sequelize');
const config = require('../config/config');

const currentConfig = config[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(currentConfig.database, currentConfig.username, currentConfig.password, {
  host: currentConfig.host,
  dialect: currentConfig.dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    version: true,
    underscored: true,
  },
});

module.exports.db = sequelize;