const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Servicio = sequelize.define('Servicio', {
  id: {
	type: DataTypes.INTEGER,
	autoIncrement: true,
	primaryKey: true,
  },
  title: {
	type: DataTypes.STRING,
	allowNull: false,
  },
  description: {
	type: DataTypes.TEXT,
	allowNull: true,
  },
  price: {
	type: DataTypes.DECIMAL(10, 2),
	allowNull: false,
  },
  caregiver_id: {
	type: DataTypes.INTEGER,
	allowNull: false,
	references: {
	  model: 'Usuarios',
	  key: 'id',
	},
	onDelete: 'CASCADE',
  },
  created_at: {
	type: DataTypes.DATE,
	defaultValue: DataTypes.NOW,
  },
});

module.exports = Servicio;