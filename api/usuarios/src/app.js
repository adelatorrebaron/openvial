'use strict'

const express       = require('express')
const bodyParser    = require('body-parser')
const app           = express()
const routes        = require('./routes')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'),
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Request-With, Content-Type, Accept, Authorization'
    );
    
    //if(req.method === 'OPTIONS'){
    //    res.header('Access-Control-Allow-Methods','GET', 'PUT', 'POST', 'PATCH', 'DELETE')
    //    return res.status(200).json({});
    //}
    
    
    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    } else {
        res.header('Access-Control-Allow-Origin', '*');
    }
    
    
    next();
});


// Configurar cabeceras y cors
/*
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    next();
});
*/

app.use('/api/v1', routes)

module.exports = app