const jwt = require('jsonwebtoken');
const config = require('../config/config');
const { isBlacklisted } = require('./tokenBlacklist'); // Importar la lista negra

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  const token = authHeader.replace('Bearer ', '');
  if (isBlacklisted(token)) {
    return res.status(401).json({ message: 'Token is blacklisted' });
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;


