'use strict'

const mongoose  = require('mongoose')

const AlumnoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    autoescuela_id: mongoose.Schema.Types.ObjectId,
    dni: {type: String, required: true, maxlength: 9},
    nombre: {type: String, required: true, maxlength: 30},
    primer_apellido: {type: String, required: true, maxlength: 30},
    segundo_apellido: {type: String, required: true, maxlength: 30},
    sexo: {type: String, required: true, maxlength: 1, uppercase: true},
    fecha_nacimiento: {type: Date, required: true},
    pais_nacimiento: {type: String, required: true, maxlength: 30},
    nacionalidad: {type: String, required: true, maxlength: 30},
    direccion: {
        via: {
            tipo: {type: String, required: true, maxlength: 25 },
            nombre: {type: String, required: true, maxlength: 120},
            numero: {type: String, required: true, maxlength: 10},
            bloque: {type: String, maxlength: 20},
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
        facebook: {type: String, maxlength: 255, lowercase: true},
        twitter: {type: String, maxlength: 255, lowercase: true}
    },
    fecha_creacion: {type: Date, default: Date.now()},
    estado: {type: Boolean, default: true}
})

module.exports = mongoose.model('Alumno', AlumnoSchema)