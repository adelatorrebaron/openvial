'use strict'

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');
const config = require('../config');


//
// Permite el registro de un usuario
//
exports.usuarios_registro =  (req, res, next) => {
    Usuario.find({email: req.body.email})
        .exec()
        .then(usuario => {
            if (usuario.length >= 1) {
                return res.status(409).json({
                    status: "Internal Server Error",
                    code: 409,
                    messages: [{error: 'Correo electrónico ya existente'}]
                })
            } else {
                bcrypt.hash(req.body.password,10,(err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            status: "Internal Server Error",
                            code: 500,
                            messages: [{error: err}],
                            result: {}
                        });
                    }
                    else {
                        const usuario = new Usuario({
                            _id: new mongoose.Types.ObjectId(),
                            username: req.body.username,
                            email: req.body.email,
                            password: hash,
                            perfil: {
                                contacto: {
                                    telefono_fijo: '',
                                    telefono_movil: '',
                                    whatsapp: '',
                                    website: '',
                                    facebook: '',
                                    twitter: ''
                                },
                                educacion: '',
                                notas: '',
                                avatar: ''
                            },
                            estado: req.body.estado
                        });
                        usuario.save().then(result => {
                            res.status(201).json({
                                status: "created",
                                code: 201,
                                messages: [],
                                result: {
                                    message: 'Registro creado correctamente',
                                    usuario: {
                                        _id: result._id,
                                        username: result.username,
                                        email: result.email,
                                        perfil: {
                                            contacto: {
                                                telefono_fijo: result.perfil.contacto.telefono_fijo,
                                                telefono_movil: result.perfil.contacto.telefono_movil,
                                                whatsapp: result.perfil.contacto.whatsapp,
                                                website: result.perfil.contacto.website,
                                                facebook: result.perfil.contacto.facebook,
                                                twitter: result.perfil.contacto.twitter
                                            },
                                            educacion: result.perfil.educacion,
                                            notas: result.perfil.notas,
                                            avatar: result.perfil.avatar 
                                        },
                                        fecha_creacion: result.fecha_creacion,
                                        estado: result.estado,                    
                                        request: {
                                            descripcion: 'Obtener registro creado',
                                            type: 'GET',
                                            url: req.protocol + '://' + req.headers.host + req.originalUrl + '/' + result._id
                                        }
                                    }
                                }
                            });
                        })
                        .catch(err => {
                            res.status(500).json({
                                status: "Internal Server Error",
                                code: 500,
                                messages: [{error: err}],
                                result: {}
                            })
                        });
                    }
                });
            }
        })
}


//
// Permite a un usuario previamente registrado logearse y obtener el token JWT
//
exports.usuarios_login =  (req, res, next) => {
    Usuario.find({email: req.body.email})
        .exec()
        .then(usuario => {
            // Sin autorización al no existir el email
            if (usuario.length < 1) {
                return res.status(401).json({
                    status: "Unauthorized",
                    code: 401,
                    messages: [{error: 'Autenticación fallida'}],
                    result: {}
                });
            }
            bcrypt.compare(req.body.password, usuario[0].password,(err, result) => {
                // Sin autorización al no coindicir la contraseña
                if (err) {
                    return res.status(401).json({
                        status: "Unauthorized",
                        code: 401,
                        messages: [{error: 'Autenticación fallida'}],
                        result: {}
                    });
                }
                // Si todo es correcto y la contraseña coincide devuelvo el token
                if (result) {
                    const token = jwt.sign({
                        id: usuario[0]._id,
                        username: usuario[0].username,
                        email:  usuario[0].email,
                        fecha_creacion: usuario[0].fecha_creacion                        
                        },
                        config.JWT_KEY,
                        {
                            expiresIn: config.JWT_EXPIRES_TIME
                        });

                        return res.status(200).json({
                            status: "ok",
                            code: 200,
                            messages: [],
                            result: {
                                message: 'Autenticación satisfactoria',
                                token: token
                            }
                        
                        });
                }
                // Devolver error si ocurre algo no esperado
                res.status(401).json({
                    status: "Unauthorized",
                    code: 401,
                    messages: [{error: 'Autenticación fallida'}],
                    result: {}
                });
            })
        })
        .catch(err => {
            res.status(500).json({
                status: "Internal Server Error",
                code: 500,
                messages: [{error: err}],
                result: {}                
            });
        });
}


//
// Permite obtener todos los usuarios del sistema
//
exports.usuarios_get_all =  (req, res, next) => {
    Usuario.find()
        .exec()
        .then(docs => {
            res.status(200).json({
                status: "ok",
                code: 200,
                messages: [],
                result: {
                    total: docs.length,
                    usuarios: docs.map(doc => {
                        return {
                            _id: doc._id,
                            username: doc.username,
                            email: doc.email,
                            password: doc.password,
                            perfil: {
                                contacto: {
                                    telefono_fijo: doc.perfil.contacto.telefono_fijo,
                                    telefono_movil: doc.perfil.contacto.telefono_movil,
                                    whatsapp: doc.perfil.contacto.whatsapp,
                                    website: doc.perfil.contacto.website,
                                    facebook: doc.perfil.contacto.facebook,
                                    twitter: doc.perfil.contacto.twitter
                                },
                                educacion: doc.perfil.educacion,
                                notas: doc.perfil.notas,
                                avatar: doc.perfil.avatar
                            },
                            fecha_creacion: doc.fecha_creacion,
                            estado: doc.estado,
                            request: {
                                descripcion: 'Obtener el registro',
                                type: 'GET',
                                url: req.protocol + '://' + req.headers.host + req.originalUrl + '/' + doc._id
                            }
                            
                        }
                    })
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                status: "Internal Server Error",
                code: 500,
                messages: [{error: err}],
                result: {}
            });
        });
}


//
// Permite obtener un usuario por su ID
//
exports.usuarios_get_by_usuarioId = (req, res, next) => {
    const id = req.params.usuarioId;
    Usuario.findById(id)
        .exec()
        .then(doc => {
            if (doc){
                res.status(200).json({
                    status: "ok",
                    code: 200,
                    messages: [],
                    result: {
                        _id: doc._id,
                        username: doc.username,
                        email: doc.email,
                        password: doc.password,
                        perfil: {
                            contacto: {
                                telefono_fijo: doc.perfil.contacto.telefono_fijo,
                                telefono_movil: doc.perfil.contacto.telefono_movil,
                                whatsapp: doc.perfil.contacto.whatsapp,
                                website: doc.perfil.contacto.website,
                                facebook: doc.perfil.contacto.facebook,
                                twitter: doc.perfil.contacto.twitter
                            },
                            educacion: doc.perfil.educacion,
                            notas: doc.perfil.notas,
                            avatar: doc.perfil.avatar
                        },
                        fecha_creacion: doc.fecha_creacion,
                        estado: doc.estado,
                        request: {
                            descripcion: 'Obtener todos los registros',
                            type: 'GET',
                            url: req.protocol + '://' + req.headers.host + '/' + req.originalUrl.split('/')[1] + '/' + req.originalUrl.split('/')[2] + '/' + req.originalUrl.split('/')[3]
                        }
                    }
                });
            } else {
                res.status(200).json({
                    status: "Not found",
                    code: 404,
                    messages: [{mensaje:'Registro no encontrado'}],
                    result: {}
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                status: "Internal Server Error",
                code: 500,
                messages: [{error: err}],
                result: {}
            });
        });
}


//
// Permite actualizar los datos de un usuario en el formato indicado a continuación
//
/*
El formato que se ha de mandar a esta funcion es de la siguiente forma,
se ha de tener en cuenta que se manda un array:
[
	{"propName": "perfil.contacto.telefono_fijo", "value": "000123456789"},
	{"propName": "perfil.educacion", "value": "A ver que sale de todo esto jajaja esto si que chanela"}
]
*/
exports.usuarios_update = (req, res, next) => {
    const id = req.params.usuarioId;
    const updatedOps = {};

    for (const ops of req.body){
        // Si la propiedad a actualizar es el password, lo encripto
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

    // Actualizo solo las propiedades que han cambiado
    Usuario.updateOne({_id: id}, {$set: updatedOps})
        .exec()
        .then(result => {
            res.status(200).json({
                status: 'ok',
                code: 200,
                messages: [],
                result: {
                    request: {
                        descripcion: 'Obtener registro actualizado',
                        type: 'GET',
                        url: req.protocol + '://' + req.headers.host + req.originalUrl
                    }
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                status: "Internal Server Error",
                code: 500,
                messages: [{error: err}],
                result: {}
            });
        });
}


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


//
// Permite eliminar un usuario por su ID
//
exports.usuarios_delete = (req, res, next) => {
    const id = req.params.usuarioId;
    Usuario.deleteOne({_id: id})
        .exec()
        .then(result => {
            res.status(200).json({
                status: "ok",
                code: 200,
                messages: [],
                result: {
                    request: {
                        descripcion: 'Crear un nuevo registro',
                        type: 'POST',
                        url: req.protocol + '://' + req.headers.host + '/' + req.originalUrl.split('/')[1] + '/' + req.originalUrl.split('/')[2] +  '/' + req.originalUrl.split('/')[3],
                        body: {
                            username: 'String',
                            email: 'String',
                            password: 'String',
                            perfil: {
                                contacto: {
                                    telefono_fijo: 'String',
                                    telefono_movil: 'String',
                                    whatsapp: 'String',
                                    website: 'String',
                                    facebook: 'String',
                                    twitter: 'String'
                                },
                                educacion: 'String',
                                notas: 'String',
                                avatar: 'String'
                            },
                            estado: 'Boolena'
                        }
                    }
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                status: "Internal Server Error",
                code: 500,
                messages: [{error: err}],
                result: {}
            });
        });
}
