const express = require('express');
const path = require('path');
const app = express();

// Importar las rutas
const rutas = require('./rutas');

// Configuramos express para servir archivos estáticos (CSS, HTML, etc.)
app.use(express.static(path.join(__dirname)));

// Usamos las rutas definidas en rutas.js
app.use('/', rutas);

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
