'use strict'

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');
const config = require('../config');



exports.usuarios_registro =  (req, res, next) => {
    console.log(req.body)
    Usuario.find({email: req.body.email})
        .exec()
        .then(usuario => {
            if (usuario.length >= 1) {
                return res.status(409).json({
                    message: 'Correo electrónico ya existente'
                })
            } else {
                bcrypt.hash(req.body.password,10,(err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const usuario = new Usuario({
                            _id: new mongoose.Types.ObjectId(),
                            username: req.body.username,
                            email: req.body.email,
                            password: hash,
                            estado: req.body.estado
                        });
                        usuario.save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: 'Registro creado correctamente',
                                    registro_creado: {
                                        _id: result._id,
                                        username: result.username,
                                        email: result.email,
                                        fecha_creacion: result.fecha_creacion,
                                        estado: result.estado,                    
                                        request: {
                                            descripcion: 'Obtener registro creado',
                                            type: 'GET',
                                            url: req.protocol + '://' + req.headers.host + req.originalUrl + '/' + result._id
                                        }
                                    }
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                })
                            });
                    }
                });
            }
        });
}



exports.usuarios_login =  (req, res, next) => {
    Usuario.find({email: req.body.email})
        .exec()
        .then(usuario => {
            console.log(req.body);

            // Sin autorización al no existir el email
            if (usuario.length < 1) {
                return res.status(401).json({
                    message: 'Autenticación fallida'
                });
            }
            bcrypt.compare(req.body.password, usuario[0].password,(err, result) => {
                // Sin autorización al no coindicir la contraseña
                if (err) {
                    return res.status(401).json({
                        message: 'Autenticación fallida'
                    });
                }
                if (result) {
                    const token = jwt.sign({
                        usuarioId: usuario[0]._id,
                        username: usuario[0].username,
                        email:  usuario[0].email,
                        fecha_creacion: usuario[0].fecha_creacion                        
                        },
                        config.JWT_KEY,
                        {
                            expiresIn: config.JWT_EXPIRES_TIME
                        });
                    console.log('Autenticación satisfactoria');
                    return res.status(200).json({
                        message: 'Autenticación satisfactoria',
                        token: token
                    });
                }
                console.log('Autenticación fallida 401');
                res.status(401).json({
                    message: 'Autenticación fallida'
                });
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}



exports.usuarios_get_all =  (req, res, next) => {
    Usuario.find()
        .exec()
        .then(docs => {
            res.status(200).json({
                total: docs.length,
                usuarios: docs.map(doc => {
                    return {
                        _id: doc._id,
                        username: doc.username,
                        email: doc.email,
                        password: doc.password,
                        fecha_creacion: doc.fecha_creacion,
                        estado: doc.estado,
                        request: {
                            descripcion: 'Obtener el registro',
                            type: 'GET',
                            url: req.protocol + '://' + req.headers.host + req.originalUrl + '/' + doc._id
                        }
                    }
                })
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}



exports.usuarios_get_by_id = (req, res, next) => {
    const id = req.params.usuarioId;
    Usuario.findById(id)
        .exec()
        .then(doc => {
            if (doc){
                res.status(200).json({
                    _id: doc._id,
                    username: doc.username,
                    email: doc.email,
                    password: doc.password,
                    fecha_creacion: doc.fecha_creacion,
                    estado: doc.estado,
                    request: {
                        descripcion: 'Obtener todos los registros',
                        type: 'GET',
                        url: req.protocol + '://' + req.headers.host + '/' + req.originalUrl.split('/')[1] + '/' + req.originalUrl.split('/')[2] + '/' + req.originalUrl.split('/')[3]
                    }
                });
            } else {
                res.status(404).json({
                    mensaje: 'Registro no encontrado'
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}


/*
exports.usuarios_update = (req, res, next) => {
    const id = req.params.usuarioId;
    const updatedOps = {};

    for (const ops of req.body){
        if (ops.propName == 'password'){
            bcrypt.hash(ops.value, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                }
                else {
                    updatedOps[ops.propName] = hash;
                }
            });
        }
        else {
            updatedOps[ops.propName] = ops.value; 
        }
        updatedOps[ops.propName] = ops.value;
    }

    Usuario.update({_id: id}, {$set: updatedOps})
        .exec()
        .then(result => {
            res.status(200).json({
                mensaje: 'Registro actualizado correctamente',
                request: {
                    descripcion: 'Obtener registro actualizado',
                    type: 'GET',
                    url: req.protocol + '://' + req.headers.host + req.originalUrl
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}
*/



/*
exports.usuarios_update = (req, res, next) => {
    const id = req.params.usuarioId;
    const update = req.body;

    Usuario.update({_id: id}, update)
        .exec()
        .then(result => {
            res.status(200).json({
                mensaje: 'Registro actualizado correctamente',
                request: {
                    descripcion: 'Obtener registro actualizado',
                    type: 'GET',
                    url: req.protocol + '://' + req.headers.host + req.originalUrl
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}
*/


exports.usuarios_delete = (req, res, next) => {
    const id = req.params.usuarioId;
    Usuario.remove({_id: id})
        .exec()
        .then(result => {
            res.status(200).json({
                mensaje: 'Registro borrado correctamente',
                request: {
                    descripcion: 'Crear un nuevo registro',
                    type: 'POST',
                    url: req.protocol + '://' + req.headers.host + '/' + req.originalUrl.split('/')[1] + '/' + req.originalUrl.split('/')[2] +  '/' + req.originalUrl.split('/')[3],
                    body: {
                        email: 'String',
                        password: 'String',
                        estado: 'Boolean',
                    }
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}