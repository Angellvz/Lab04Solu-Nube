const express = require('express');
const app = express();

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a mi aplicación Express');
});

// Ruta de clientes
app.get('/clientes', (req, res) => {
  res.send('Estos son los 3 clientes: Luis, Angel, Ventura');
});

// Ruta de productos
app.get('/productos', (req, res) => {
  res.send('Estos son los 3 productos: soda, menhera, flores');
});

// Iniciar el servidor en el puerto 5000
app.listen(5000, () => {
  console.log('Servidor iniciado en el puerto 5000');
});
