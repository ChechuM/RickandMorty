// La definición de creación de rutas es la siguiente:

// server.METHOD(PATH, HANDLER);

// Donde:
    // server es una instancia de express
    // METHOD es un método de solicitud HTTP (POST, GET, PUT, HEAD y DELETE)
    // PATH es la vía de acceso al servidor
    // HANDLER es la función que se ejecuta cuando se hace el direccionamiento a la ruta, siempre recibe como parámetro dos variables, req por request y res por response.

const express = require("express");
const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');
const getFavChar = require('../controllers/getFavChar');


// Hasta ahora entiendo que éste file:
// Utiliza express
// Define según qué rutas han sido escritas, qué controlador es utilizado

const router = express.Router();

router.use(express.json()); // sí hace falta!

router.get('/onsearch/:id', getCharById)

router.get('/detail/:id', getCharDetail)

router.get('fav/:id', getFavChar)




module.exports = router;