'use strict'

const mongoose  = require('mongoose')

const AutoescuelaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    usuario_id: mongoose.Schema.Types.ObjectId,
    denominacion: {type: String, required: true, maxlength: 160},
    numero_provincial: {type: String, required: true, maxlength: 8},
    seccion: {type: Number, required: true, min:0, max: 99},
    digito_control: { type: Number, required: true, min: 0, max: 99},
    numero_secuencial: {type: Number, min: 0, max: 99},
    direccion: {
        via: {
            tipo: {type: String, required: true, maxlength: 25 },
            nombre: {type: String, required: true, maxlength: 120},
            numero: {type: String, required: true, maxlength: 10},
            bloque: {type: String, maxlength: 60},
            portal: {type: String, maxlength: 20},
            escalera: {type: String, maxlength: 20},
            planta: {type: String, maxlength: 20},
            puerta: {type: String, maxlength: 20},
            kilometro: {type: String, maxlength: 20}
        },
        codigo_postal: {type: String, required: true, maxlength: 5},
        poblacion: {type: String, required: true, maxlength: 50},
        provincia: {type: String, required: true, maxlength: 50},
        pais: {type: String, required: true, maxlength: 30}
    },
    contacto: {
        telefono_fijo: {type: String, maxlength: 12},
        telefono_movil: {type: String, maxlength: 12},
        whatsapp: {type: String, maxlength: 12},
        email:{type: String, maxlength: 255, lowercase: true},
        website:{type: String, maxlength: 255, lowercase: true},
        facebook: {type: String, maxlength: 255, lowercase: true},
        twitter: {type: String, maxlength: 255, lowercase: true}
    },
    fecha_creacion: {type: Date,required: true, default: Date.now()},
    estado: {type: Boolean, required: true, default: true}
})

module.exports = mongoose.model('Autoescuela', AutoescuelaSchema)