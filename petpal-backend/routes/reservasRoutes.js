const express = require('express');
const router = express.Router();
const reservasController = require('../controllers/reservasController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, reservasController.createReserva);
router.get('/', authMiddleware, reservasController.getReservas);
router.get('/:id', authMiddleware, reservasController.getReservaById);
router.put('/:id', authMiddleware, reservasController.updateReserva);
router.delete('/:id', authMiddleware, reservasController.deleteReserva);

module.exports = router;