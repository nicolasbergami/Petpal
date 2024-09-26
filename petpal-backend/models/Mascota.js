const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Usuario = require('./Usuario'); // Importar el modelo Usuario

const Mascota = sequelize.define('Mascota', {
  id: {
	type: DataTypes.INTEGER,
	autoIncrement: true,
	primaryKey: true,
  },
  name: {
	type: DataTypes.STRING,
	allowNull: false,
  },
  type: {
	type: DataTypes.STRING,
	allowNull: false,
  },
  breed: {
	type: DataTypes.STRING,
  },
  age: {
	type: DataTypes.INTEGER,
  },
  user_id: {
	type: DataTypes.INTEGER,
	allowNull: false,
	references: {
	  model: 'users', // Referenciar la tabla 'users'
	  key: 'id',
	},
	onDelete: 'CASCADE',
  },
  created_at: {
	type: DataTypes.DATE,
	defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'pets', // Especificar el nombre de la tabla en la base de datos
  timestamps: false,
});

module.exports = Mascota;