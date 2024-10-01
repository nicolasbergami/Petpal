const Usuario = require('../models/Usuario');

const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const createUser = async (req, res) => {
  const { name, email, password, role, service_type,profile_image } = req.body; // Agregar service_type

  try {
    // Validar si el rol es 'caregiver' y si es necesario el service_type
    if (role === 'caregiver' && !service_type) {
      return res.status(400).json({ error: 'Service type is required for caregivers' });
    }

    const newUser = await Usuario.create({
      name,
      email,
      password,
      role,
      service_type: role === 'caregiver' ? service_type : null, // Si no es caregiver, service_type será null
      profile_image
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const register = async (req, res) => {
  // Implementar lógica de registro
};

const login = async (req, res) => {
  // Implementar lógica de inicio de sesión
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;
  try {
    const user = await Usuario.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.name = name;
    user.email = email;
    user.password = password;
    user.role = role;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Usuario.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Usuario.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsuarios,
  createUser,
  register,
  login,
  updateUser,
  deleteUser,
  getUserById,
};