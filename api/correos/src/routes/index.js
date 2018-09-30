'use strict'

const express   = require('express');
const router    = express.Router();

const CorreosController = require('../controllers/correos');

// Enviar un correo a la direccion pasada por el cuerpo del mensaje JSON
router.post('/correos/enviar', CorreosController.correos_send);


module.exports = router