const Sequelize = require('sequelize')
const database = require('../config/database');

// Creating User model and users table:
const Admin = database.define('admins', {
	uuid: {
  	type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: Sequelize.literal('uuid_generate_v4()')
  },
  email: {
  	type: Sequelize.STRING,
  	allowNull: false,
  	unique: true
  },
  adminName: {
  	type: Sequelize.STRING,
  	allowNull: false,
  	unique: true
  },
  password: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  createdAt: {
  	type: Sequelize.DATE, defaultValue: Sequelize.NOW,
  	allowNull: false
  },
  updatedAt: {
  	type: Sequelize.DATE,
  	allowNull: true
  }
});

module.exports = Admin; 