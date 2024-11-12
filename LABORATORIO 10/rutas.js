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


// Middleware que introduce un retraso específico para cada ruta
//const retrasoMiddleware = (tiempo) => {
 // return (req, res, next) => {
 //   console.log(`Esperando ${tiempo / 1000} segundos...`);
  //  setTimeout(() => {
  //    next(); // Después del tiempo especificado, continúa con la siguiente ruta
 //   }, tiempo); // Tiempo en milisegundos
//  };
//};

// Rutas públicas con diferentes retrasos
//router.get('/', retrasoMiddleware(3000), controlador.paginaPrincipal); // 3 segundos
//router.get('/productos', retrasoMiddleware(5000), controlador.productos); // 5 segundos
//router.get('/contacto', retrasoMiddleware(2000), controlador.contacto); // 2 segundos
//router.get('/producto/:id', retrasoMiddleware(1000), controlador.detalleProducto); // 1 segundo

// Ruta protegida por middleware de autenticación con un retraso de 4 segundos
//router.get('/perfil', isAuthenticated, retrasoMiddleware(4000), (req, res) => {
 // res.send('Página de perfil del usuario');
//});
