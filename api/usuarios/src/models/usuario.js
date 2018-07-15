'use strict'

const mongoose  = require('mongoose')

const UsuarioSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique:true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        maxlength: 255
    },
    password: {type: String, required: true, maxlength: 255},
    fecha_creacion: {type: Date, default: Date.now()},
    estado: {type: Boolean, default: true}
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
