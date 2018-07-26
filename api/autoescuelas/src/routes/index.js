'use strict'

const express   = require('express');
const router    = express.Router();

const AutoescuelasController = require('../controllers/autoescuelas');

router.get('/autoescuelas/', AutoescuelasController.autoescuelas_get_all);
router.get('/autoescuelas/:usuarioId', AutoescuelasController.autoescuelas_get_by_usuario_id);
router.post('/autoescuelas/', AutoescuelasController.autoescuelas_create);
router.put('/autoescuelas/:autoescuelaId', AutoescuelasController.autoescuelas_update);
router.delete('/autoescuelas/:autoescuelaId', AutoescuelasController.autoescuelas_delete);


module.exports = router