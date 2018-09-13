

const mongoose = require('mongoose');
const app = require('./src/app');
const config = require('./src/config');

mongoose.connect(config.DB_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(config.PORT, () => {
      console.log(`Microservicio usuarios: iniciado correctamente en el puerto ${config.PORT}`);
    })
  })
  .catch((err) => {
    console.log('Microservicio usuarios: se ha producido un error al iniciar');
    console.log('Error al iniciar la aplicación: ' + err.stack);
    process.exit(1);
  });

/*
app.listen(config.PORT, () => {
  console.log('Microservicio usuarios: iniciado correctamente');
});

app.get("/", (req, res) => {
  res.json({ msg: "Usuarios" });
});
*/