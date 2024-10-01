const Reserva = require('../models/Reserva');

const createReserva = async (req, res) => {
  try {
	const newReserva = await Reserva.create(req.body);
	res.status(201).json(newReserva);
  } catch (error) {
	res.status(500).json({ error: error.message });
  }
};

const getReservas = async (req, res) => {
  try {
	const reservas = await Reserva.findAll();
	res.status(200).json(reservas);
  } catch (error) {
	res.status(500).json({ error: error.message });
  }
};

const getReservaById = async (req, res) => {
  const { id } = req.params;
  try {
	const reserva = await Reserva.findByPk(id);
	if (!reserva) {
	  return res.status(404).json({ error: 'Reserva not found' });
	}
	res.status(200).json(reserva);
  } catch (error) {
	res.status(500).json({ error: error.message });
  }
};

const updateReserva = async (req, res) => {
  const { id } = req.params;
  try {
	const reserva = await Reserva.findByPk(id);
	if (!reserva) {
	  return res.status(404).json({ error: 'Reserva not found' });
	}
	await reserva.update(req.body);
	res.status(200).json(reserva);
  } catch (error) {
	res.status(500).json({ error: error.message });
  }
};

const deleteReserva = async (req, res) => {
  const { id } = req.params;
  try {
	const reserva = await Reserva.findByPk(id);
	if (!reserva) {
	  return res.status(404).json({ error: 'Reserva not found' });
	}
	await reserva.destroy();
	res.status(204).send();
  } catch (error) {
	res.status(500).json({ error: error.message });
  }
};

