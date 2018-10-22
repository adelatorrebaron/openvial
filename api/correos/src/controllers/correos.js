'use strict'

const nodemailer = require('nodemailer');
require('dotenv').load();
const fs = require('fs-extra');
const path = require('path');

//
// Lee la plantilla y la introduce en una variable
//
const loadHTML = async function(templateName){
    // Genero el path donde está la plantilla en formato html
    const filePath = path.join(process.cwd(), 'templates', `${templateName}.html`)
    
    // Leo el archivo
    const html = await fs.readFileSync(filePath, 'utf-8')
    
    // Devuelvo el html
    return html
}


//
// Envia correo electrónicos
//
exports.correos_send = async (req, res, next) => {

    // Cargo los datos del body en variables
    const template_name = req.body.template_name
    const user_email = req.body.user_email

    // Cargo el contenido de la plantilla en la variable
    const html = await loadHTML(template_name);
    
    const datos = {
        from: process.env.USER_SENDER_MAIL,
        to: user_email,
        subject: 'Bienvenido a OpenVial',
        html: html
    }

    // Crear un archivo .env he introducir el siguiente texto
    // USER_MAIL = usuario@gmail.com
    // PASSWORD_MAIL = contraseña
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_SENDER_MAIL,
            pass: process.env.PASSWORD_SENDER_MAIL
        }
    });

    const mailOptions = {
        from: datos.from,
        to: datos.to,
        subject: datos.subject,
        html: datos.html
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.status(500).json({
                status: "Internal Server Error",
                code: 500,
                messages: [{error: error}],
                result: {}
            })
        } else {
            res.status(200).json({
                status: "ok",
                code: 200,
                messages: [{status: 'Correo enviado: ' + info.response}],
                result: {}
            })
        }
    });

}

