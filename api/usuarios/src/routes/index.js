'use strict'

const express   = require('express');
const router    = express.Router();

const UsuariosController = require('../controllers/usuarios');

// Permite el registro de un usuario
router.post('/usuarios/registro', UsuariosController.usuarios_registro);

// Permite realizar el login y asi obtener el token JWT
router.post('/usuarios/login', UsuariosController.usuarios_login);

// Obtiene todos los usuarios
router.get('/usuarios/', UsuariosController.usuarios_get_all);

// Obtiene un usuario por su Id
router.get('/usuarios/:usuarioId', UsuariosController.usuarios_get_by_usuarioId);

// Actualización con PUT
////router.put('/usuarios/:usuarioEmail', UsuariosController.usuarios_update);

// Actualiza los datos del usuario con el metodo PATCH
router.patch('/usuarios/:usuarioId', UsuariosController.usuarios_update);

// Elimina un usuario por su Id
router.delete('/usuarios/:usuarioId', UsuariosController.usuarios_delete);



module.exports = router