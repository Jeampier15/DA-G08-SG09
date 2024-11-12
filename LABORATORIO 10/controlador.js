const path = require('path'); // Añadir esta línea para importar 'path'

// Función para la página principal
exports.paginaPrincipal = (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
};

// Función para la página de productos
exports.productos = (req, res) => {
  res.sendFile(path.join(__dirname, 'productos.html'));
};

// Función para la página de contacto
exports.contacto = (req, res) => {
  res.sendFile(path.join(__dirname, 'contacto.html'));
};

// Función para mostrar detalles de un producto (con parámetro en la URL)
exports.detalleProducto = (req, res) => {
  const { id } = req.params;
  res.send(`Detalles del producto con ID: ${id}`);
};
