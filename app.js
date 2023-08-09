const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Directorio estático para los recursos HTML
app.use(express.static('public'));

// Rutas para las páginas HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});