const express = require('express');
const router = express.Router();
const { getProductSales } = require('../controllers/datacontrollers');

// Ruta para obtener los datos 
http://localhost:3000/api/producto-vendidos
router.get('/producto-vendidos', getProductSales);

module.exports = router;
