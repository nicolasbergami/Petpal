const express = require('express');
const router = express.Router();
const mascotasController = require('../controllers/mascotasController'); // Importar el controlador
const authMiddleware = require('../middleware/authMiddleware'); // Importar el middleware de autenticación

// Ruta para obtener todas las mascotas
router.get('/', mascotasController.getMascotas);

// Ruta para crear una nueva mascota
router.post('/', authMiddleware, mascotasController.createMascota);

module.exports = router;