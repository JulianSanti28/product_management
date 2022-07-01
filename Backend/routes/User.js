const express = require('express');
const userController = require('../controllers/UserController');
//Método para agregar rutas
const router = express.Router();
router.post('/create', userController.crear)
router.post('/login', userController.login)
router.get('/listar', userController.listar)
module.exports = router;
