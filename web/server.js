//Server.js, don't forget to add express & ejs to packages
const express = require('express');

const app = express()
//const port = process.env.PORT || 3000
const port = 3000
const router = express.Router()

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


app.use(express.static(`${__dirname}/dist`)) // set the static files location for the static html

app.engine('.html', require('ejs').renderFile)

app.set('views', `${__dirname}/dist`)

router.get('/*', (req, res, next) => {
  res.sendFile(`${__dirname}/dist/index.html`)
})

app.use('/', router)

app.listen(port)
console.log('La aplicacion web está corriendo')