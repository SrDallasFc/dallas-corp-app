const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Solo levantar el puerto si no estamos ejecutando pruebas automáticas
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}

// Exportar la app para que app.test.js la pueda consumir
module.exports = app;