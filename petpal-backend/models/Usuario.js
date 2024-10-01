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
  service_type: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isIn: [['dog walker', 'caregiver']],
    },
  },
  profile_image: { // Nueva columna para la imagen de perfil
    type: DataTypes.STRING,
    allowNull: true, // Puede ser nulo si no suben una imagen
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'users',
  timestamps: false,
});

module.exports = Usuario;

