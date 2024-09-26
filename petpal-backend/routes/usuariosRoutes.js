const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController'); // Importar el controlador
const authController = require('../controllers/authController'); // Importar el controlador de autenticación

// Ruta para obtener todos los usuarios
router.get('/', usuariosController.getUsuarios);

// Ruta para registrar un nuevo usuario
router.post('/register', usuariosController.register);

// Ruta para iniciar sesión
router.post('/login', authController.login); // Ruta de inicio de sesión

// Ruta para cerrar sesión
router.post('/logout', authController.logout); // Ruta de logout

// Ruta para crear un nuevo usuario
router.post('/', usuariosController.createUser);

// Ruta para actualizar un usuario existente
router.put('/:id', usuariosController.updateUser);

// Ruta para eliminar un usuario existente
router.delete('/:id', usuariosController.deleteUser);

// Ruta para obtener un usuario por ID
router.get('/:id', usuariosController.getUserById);

module.exports = router;
