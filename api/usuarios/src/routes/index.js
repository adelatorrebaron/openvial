'use strict'

const express   = require('express');
const router    = express.Router();
const multer = require('multer');

const UsuariosController = require('../controllers/usuarios');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'./uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
        //cb(null, );
    }
});

const fileFilter = (req, file, cb) => {
    // Reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5},
    fileFilter: fileFilter
});


// Permite el registro de un usuario
router.post('/usuarios/registro', UsuariosController.usuarios_registro);

// Permite realizar el login y asi obtener el token JWT
router.post('/usuarios/login', UsuariosController.usuarios_login);

// Permite realizar la actualización de la imagen de perfil el usuario
router.post('/usuarios/imagenPerfil',upload.single('imagenPerfil') ,UsuariosController.usuarios_imagen_perfil);

// Obtiene todos los usuarios
router.get('/usuarios/', UsuariosController.usuarios_get_all);

// Obtiene los datos de un usuario por su ID
router.get('/usuarios/:usuarioId', UsuariosController.usuarios_get_by_usuarioId);

// Actualización con PUT
////router.put('/usuarios/:usuarioEmail', UsuariosController.usuarios_update);

// Actualiza los datos del usuario con el metodo PATCH
router.patch('/usuarios/:usuarioId', UsuariosController.usuarios_update);

// Elimina un usuario por su Id
router.delete('/usuarios/:usuarioId', UsuariosController.usuarios_delete);



module.exports = router