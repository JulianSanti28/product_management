
const express = require('express');
const productInListController = require('../controllers/ProductInListController');
//Método para agregar rutas
const router = express.Router();
router.post('/create', productInListController.crear)
router.get('/products/:id', productInListController.listarPorId)
router.put('/update/:id', productInListController.actualizar)
module.exports = router;