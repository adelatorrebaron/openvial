

const app = require('./src/app');
const config = require('./src/config');


app.listen(config.PORT, () => {
  console.log(`Microservicio generador de informes PDF: iniciado correctamente en el puerto ${config.PORT}`);
})
 