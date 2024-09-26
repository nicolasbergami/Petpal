const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');
const config = require('../config/config');
const { addToBlacklist } = require('../middleware/tokenBlacklist'); // Importar la función para agregar a la lista negra

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Usuario.findOne({ where: { email } });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, config.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logout = (req, res) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    return res.status(400).json({ message: 'No token provided' });
  }

  const token = authHeader.replace('Bearer ', '');
  addToBlacklist(token);
  res.status(200).json({ message: 'Logged out successfully' });
};

module.exports = {
  login,
  logout,
};