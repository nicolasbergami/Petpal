const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/serviciosController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, serviciosController.createServicio);
router.get('/', serviciosController.getServicios);
router.get('/:id', serviciosController.getServicioById);
router.put('/:id', authMiddleware, serviciosController.updateServicio);
router.delete('/:id', authMiddleware, serviciosController.deleteServicio);

module.exports = router;