'use strict'

const express   = require('express');
const router    = express.Router();

const ClasesPracticasController = require('../controllers/clases_practicas');

// Permite obtener todas las clases prácticas
router.get('/clases_practicas/', ClasesPracticasController.clases_practicas_get_all);

// Permite obtener todas las clases prácticas de una autoescuela
router.get('/clases_practicas/:autoescuelaId/autoescuela', ClasesPracticasController.clases_practicas_get_all_by_autoescuelaId);

// Permite obtener una clase practica por el Id del clase practica
router.get('/clases_practicas/:clasePracticaId', ClasesPracticasController.clases_practicas_get_by_clasePracticaId);

// Permite crear una clase practica asociandola a los correspondientes Id de autoescuela, profesor, alumno, vehiculo
router.post('/clases_practicas/', ClasesPracticasController.clases_practicas_create);

// Permite actualizar los datos de la clase practica
router.put('/clases_practicas/:clasePracticaId', ClasesPracticasController.clases_practicas_update);

// Permite eliminar una clase practica por el Id de la clase practica
router.delete('/clases_practicas/:clasePracticaId', ClasesPracticasController.clases_practicas_delete);


module.exports = router