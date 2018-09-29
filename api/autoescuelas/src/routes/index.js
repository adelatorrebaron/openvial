'use strict'

const express   = require('express');
const router    = express.Router();

const AutoescuelasController = require('../controllers/autoescuelas');

// Permite obtener todas las autoescuelas
router.get('/autoescuelas/', AutoescuelasController.autoescuelas_get_all);

// Permite obtener una Autoescuela por el Id del Usuario
router.get('/autoescuelas/:usuarioId', AutoescuelasController.autoescuelas_get_by_usuarioId);

// Permite crear una Autoescuela asociandola al Id del usuario
router.post('/autoescuelas/', AutoescuelasController.autoescuelas_create);

// Permite actualizar los datos de la Autoescuela
router.put('/autoescuelas/:autoescuelaId', AutoescuelasController.autoescuelas_update);

// Permite eliminar una Autoescuela por el Id de la Autoescuela
router.delete('/autoescuelas/:autoescuelaId', AutoescuelasController.autoescuelas_delete);


module.exports = router