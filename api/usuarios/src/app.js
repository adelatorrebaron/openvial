'use strict'

const express       = require('express')
const bodyParser    = require('body-parser')
const app           = express()

const routes        = require('./routes')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

/*
app.use((req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token, Authorization');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Expose-Headers', 'X-Api-Version, X-Request-Id, X-Response-Time');
  res.setHeader('Access-Control-Max-Age', '1000');
  
  return next();
});
*/

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'),
  res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Request-With, Content-Type, Accept, Authorization'
  );

  if(req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods','GET', 'PUT', 'POST', 'PATCH', 'DELETE')
      return res.status(200).json({});
  }
  next();
});


app.use('/api/v1', routes)

module.exports = app