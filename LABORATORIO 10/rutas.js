const express = require('express');
const router = express.Router();
const controlador = require('./controlador');

// Middleware que introduce un retraso de 5 segundos en todas las rutas
const retrasoMiddleware = (req, res, next) => {
  console.log('Esperando 5 segundos...');
  setTimeout(() => {
    next(); // Después de 5 segundos, continua con el siguiente middleware o ruta
  }, 5000); // 5000 milisegundos = 5 segundos
};

// Aplicar el middleware globalmente a todas las rutas
router.use(retrasoMiddleware);

// Rutas públicas
router.get('/', controlador.paginaPrincipal);
router.get('/productos', controlador.productos);
router.get('/contacto', controlador.contacto);
router.get('/producto/:id', controlador.detalleProducto); // Ruta con parámetro

// Ruta protegida por middleware de autenticación
router.get('/perfil', isAuthenticated, (req, res) => {
  res.send('Página de perfil del usuario');
});

// Middleware de autenticación para rutas privadas
function isAuthenticated(req, res, next) {
  const usuarioAutenticado = req.headers['x-usuario']; // Simulación de autenticación
  if (usuarioAutenticado) {
    return next(); // Si el usuario está autenticado, continuar con la solicitud
  } else {
    res.status(401).send('No autorizado'); // Si no está autenticado, responder con 401
  }
}

module.exports = router;

module.exports = router;
