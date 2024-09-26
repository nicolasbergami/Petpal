const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('Usuario', {
name: {
    type: DataTypes.STRING,
    allowNull: false,
},
  email: {
  type: DataTypes.STRING,
  allowNull: false,
  unique: true,
  },
  password: {
  type: DataTypes.STRING,
  allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['owner', 'caregiver']],
    },
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'users', // Especificar el nombre de la tabla en la base de datos
  timestamps: false,
});

module.exports = Usuario;