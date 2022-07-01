const express = require('express');
const storeController = require('../controllers/StoreController');
//Método para agregar rutas
const router = express.Router();
router.post('/create', storeController.crear)
router.get('/find/:id', storeController.listar)
module.exports = router;