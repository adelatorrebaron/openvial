'use strict'

const nodemailer = require('nodemailer');
   

//
// Envia correo electrónicos
//
exports.correos_send = (req, res, next) => {

    const datos = {
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text,
        html: req.body.html
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'usuario@gmail.com',
            pass: 'contraseña'
        }
    });
   
    const mailOptions = {
        from: datos.from,
        to: datos.to,
        subject: datos.subject,
        text: datos.text,
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

