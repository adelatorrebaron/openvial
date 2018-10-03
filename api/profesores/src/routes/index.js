'use strict'

const express   = require('express');
const router    = express.Router();

const ProfesoresController = require('../controllers/profesores');

// Permite obtener todos los profesores
router.get('/profesores/', ProfesoresController.profesores_get_all);

// Permite obtener un profesor por el Id del profesor
router.get('/profesores/:profesorId', ProfesoresController.profesores_get_by_profesorId);

// Permite crear un profesor asociandolo al Id de la autoescuela
router.post('/profesores/', ProfesoresController.profesores_create);

// Permite actualizar los datos de un profesor
router.put('/profesores/:profesorId', ProfesoresController.profesores_update);

// Permite eliminar un profesor por el Id de alumno
router.delete('/profesores/:profesorId', ProfesoresController.profesores_delete);


module.exports = router