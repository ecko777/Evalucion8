const nodemon = require('nodemon');

nodemon({
  script: 'app.js', // Archivo principal del servidor
  ext: 'js html',   // Extensiones a observar para reiniciar el servidor
  env: {
    NODE_ENV: 'development'
  }
});

nodemon.on('start', () => {
  console.log('Servidor reiniciado por nodemon...');
}).on('quit', () => {
  console.log('Nodemon ha terminado.');
  process.exit();
}).on('restart', (files) => {
  console.log('Archivos cambiados: ', files);
});