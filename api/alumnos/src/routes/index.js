'use strict'

const express   = require('express');
const router    = express.Router();

const AlumnosController = require('../controllers/alumnos');

// Permite obtener todos los alumnos
router.get('/alumnos/', AlumnosController.alumnos_get_all);

// Permite obtener un alumno por el Id del alumno
router.get('/alumnos/:alumnoId', AlumnosController.alumnos_get_by_alumnoId);

// Permite crear un Alumno asociandolo al Id de la autoescuela
router.post('/alumnos/', AlumnosController.alumnos_create);

// Permite actualizar los datos de un Alumno
router.put('/alumnos/:alumnoId', AlumnosController.alumnos_update);

// Permite eliminar un Alumno por el Id de alumno
router.delete('/alumnos/:alumnoId', AlumnosController.alumnos_delete);


module.exports = router