'use strict'

const express   = require('express');
const router    = express.Router();

const UsuariosController = require('../controllers/usuarios');

router.post('/usuarios/registro', UsuariosController.usuarios_registro);
router.post('/usuarios/login', UsuariosController.usuarios_login);

router.get('/usuarios/', UsuariosController.usuarios_get_all);
router.get('/usuarios/:usuarioId', UsuariosController.usuarios_get_by_id);
////router.put('/usuarios/:usuarioEmail', UsuariosController.usuarios_update);
router.patch('/usuarios/:usuarioId', UsuariosController.usuarios_update);
router.delete('/usuarios/:usuarioId', UsuariosController.usuarios_delete);


module.exports = router