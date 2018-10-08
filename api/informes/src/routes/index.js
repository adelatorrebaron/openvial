'use strict'

const express   = require('express');
const router    = express.Router();

const InformesController = require('../controllers/informes');

// Genera un informe con los datos pasados por el cuerpo del mensaje JSON
router.post('/informes/', InformesController.getInforme);


module.exports = router