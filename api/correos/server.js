

const app = require('./src/app');
const config = require('./src/config');


app.listen(config.PORT, () => {
  console.log(`Microservicio enviador de Correos: iniciado correctamente en el puerto ${config.PORT}`);
})
 