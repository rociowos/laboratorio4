const {Router} = require('express');
const {getestrenos, getpeliculas, getactores,getpelicula,getorigenNombre} = require ('../controllers/demo');

const rutas = Router();

rutas.get('/peliculas', getpeliculas);
rutas.get('/pelicula:id', getpelicula);

rutas.get('/estrenos', getestrenos);
rutas.get('/actores', getactores);
rutas.get('/nombre:name', getorigenNombre);

module.exports = rutas;