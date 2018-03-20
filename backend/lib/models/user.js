const Sequelize = require('sequelize');
const sequelize = require('../database').db;

const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: 4,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: 8,
    },
  },
  admin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  location: {
    type: Sequelize.STRING,
  },
}, {
  paranoid: true,
  tableName: 'users',
});

User.associate = models => {
  // associations can be defined here
};

module.exports.model = User;
