'use strict'

const mongoose  = require('mongoose')

const UsuarioSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {type: String, required: true, maxlength: 100},
    email: {
        type: String,
        required: true,
        unique:true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        maxlength: 255
    },
    password: {type: String, required: true, maxlength: 255},
    perfil: {
        contacto: {
            telefono_fijo: {type: String, maxlength: 12},
            telefono_movil: {type: String, maxlength: 12},
            whatsapp: {type: String, maxlength: 12},
            website:{type: String, maxlength: 255, lowercase: true},
            facebook: {type: String, maxlength: 255, lowercase: true},
            twitter: {type: String, maxlength: 255, lowercase: true}
        },
        educacion:{type: String, maxlength: 255},
        notas:{type: String, maxlength: 255},
        avatar:{type: String, maxlength: 255}
    },
    fecha_creacion: {type: Date, default: Date.now()},
    estado: {type: Boolean, default: true}
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
