
const Servicio = require('../models/Servicio');

const createServicio = async (req, res) => {
  try {
    const newServicio = await Servicio.create(req.body);
    res.status(201).json(newServicio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getServicios = async (req, res) => {
  try {
    const servicios = await Servicio.findAll();
    res.status(200).json(servicios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getServicioById = async (req, res) => {
  const { id } = req.params;
  try {
    const servicio = await Servicio.findByPk(id);
    if (!servicio) {
      return res.status(404).json({ error: 'Servicio not found' });
    }
    res.status(200).json(servicio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateServicio = async (req, res) => {
  const { id } = req.params;
  try {
    const servicio = await Servicio.findByPk(id);
    if (!servicio) {
      return res.status(404).json({ error: 'Servicio not found' });
    }
    await servicio.update(req.body);
    res.status(200).json(servicio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteServicio = async (req, res) => {
  const { id } = req.params;
  try {
    const servicio = await Servicio.findByPk(id);
    if (!servicio) {
      return res.status(404).json({ error: 'Servicio not found' });
    }
    await servicio.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getServicioByName = async (req, res) => {
  const { name } = req.params;
  try {
    const servicio = await Servicio.findOne({ where: { name } });
    if (!servicio) {
      return res.status(404).json({ error: 'Servicio not found' });
    }
    res.status(200).json(servicio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createServicio,
  getServicios,
  getServicioById,
  updateServicio,
  deleteServicio,
  getServicioByName,
};