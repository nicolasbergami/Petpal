const Mascota = require('../models/Mascota');

const getMascotas = async (req, res) => {
  try {
    const mascotas = await Mascota.findAll();
    res.status(200).json(mascotas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createMascota = async (req, res) => {
  try {
    const { name, type, breed, age, user_id } = req.body;
    if (!name || !type || !user_id) {
      return res.status(400).json({ error: 'Name, type, and user_id are required' });
    }
    const newMascota = await Mascota.create({ name, type, breed, age, user_id });
    res.status(201).json(newMascota);
  } catch (error) {
    res.status(500).json({ error: error.message }); // Mejorar el mensaje de error
  }
};

module.exports = {
  getMascotas,
  createMascota,
};