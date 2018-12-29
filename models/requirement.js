const Sequelize = require('sequelize')
const database = require('../config/database');

// Creating User model and users table:
const Requirement = database.define('requirements', {
	uuid: {
  	type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: Sequelize.literal('uuid_generate_v4()')
  },
  loadingStation: {
    type: Sequelize.STRING,
    allowNull: false
  },
  destination: {
    type: Sequelize.STRING,
    allowNull: false
  },
  weight: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  loadingDate: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  material: {
    type: Sequelize.STRING,
    allowNull: false
  },
  freight: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  truckType: {

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

module.exports = Requirement; 