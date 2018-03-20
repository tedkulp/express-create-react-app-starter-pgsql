const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DOCKER_POSTGRES_DATABASE || 'example', process.env.DOCKER_POSTGRES_USERNAME || 'postgres', process.env.DOCKER_POSTGRES_PASSWORD || '', {
  host: process.env.DOCKER_POSTGRES_HOST || '127.0.0.1',
  dialect: 'postgres',
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