'use strict'

const express   = require('express');
const router    = express.Router();

const AlumnosController = require('../controllers/alumnos');

router.get('/alumnos/', AlumnosController.alumnos_get_all);
router.get('/alumnos/:alumnoId', AlumnosController.alumnos_get_by_id);
router.post('/alumnos/', AlumnosController.alumnos_create);
router.put('/alumnos/:alumnoId', AlumnosController.alumnos_update);
router.delete('/alumnos/:alumnoId', AlumnosController.alumnos_delete);


module.exports = router