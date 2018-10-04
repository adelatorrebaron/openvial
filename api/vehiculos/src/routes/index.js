'use strict'

const express   = require('express');
const router    = express.Router();

const VehiculosController = require('../controllers/vehiculos');

// Permite obtener todas las vehiculos
router.get('/vehiculos/', VehiculosController.vehiculos_get_all);

// Permite obtener una vehiculo por el Id del vehiculo
router.get('/vehiculos/:vehiculoId', VehiculosController.vehiculos_get_by_vehiculoId);

// Permite crear una vehiculo asociandola al Id del usuario
router.post('/vehiculos/', VehiculosController.vehiculos_create);

// Permite actualizar los datos de la vehiculo
router.put('/vehiculos/:vehiculoId', VehiculosController.vehiculos_update);

// Permite eliminar una vehiculo por el Id de la vehiculo
router.delete('/vehiculos/:vehiculoId', VehiculosController.vehiculos_delete);


module.exports = router