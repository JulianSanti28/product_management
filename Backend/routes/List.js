const express = require('express');
const productListController = require('../controllers/ListController');
//Método para agregar rutas
const router = express.Router();
router.post('/create', productListController.crear)
router.get('/listar', productListController.listar)
router.get('/find/:id', productListController.listarPorId)
module.exports = router;
