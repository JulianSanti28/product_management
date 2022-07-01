const express = require('express');
const productController = require('../controllers/ProductController');
//Método para agregar rutas
const router = express.Router();
router.post('/create', productController.crear)
router.get('/find/:id', productController.listar)
module.exports = router;
