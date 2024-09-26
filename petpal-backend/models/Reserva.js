const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Reserva = sequelize.define('Reserva', {
  id: {
	type: DataTypes.INTEGER,
	autoIncrement: true,
	primaryKey: true,
  },
  pet_id: {
	type: DataTypes.INTEGER,
	allowNull: false,
	references: {
	  model: 'Mascotas',
	  key: 'id',
	},
	onDelete: 'CASCADE',
  },
  service_id: {
	type: DataTypes.INTEGER,
	allowNull: false,
	references: {
	  model: 'Servicios',
	  key: 'id',
	},
	onDelete: 'CASCADE',
  },
  owner_id: {
	type: DataTypes.INTEGER,
	allowNull: false,
	references: {
	  model: 'Usuarios',
	  key: 'id',
	},
	onDelete: 'CASCADE',
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
  start_date: {
	type: DataTypes.DATE,
	allowNull: false,
  },
  end_date: {
	type: DataTypes.DATE,
	allowNull: false,
  },
  status: {
	type: DataTypes.STRING,
	allowNull: false,
	validate: {
	  isIn: [['pending', 'confirmed', 'completed', 'cancelled']],
	},
  },
  created_at: {
	type: DataTypes.DATE,
	defaultValue: DataTypes.NOW,
  },
});

module.exports = Reserva;