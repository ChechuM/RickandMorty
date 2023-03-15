// Es por esto que la definición de creación de rutas es la siguiente:

// server.METHOD(PATH, HANDLER);

// Donde:
    // server es una instancia de express
    // METHOD es un método de solicitud HTTP (POST, GET, PUT, HEAD y DELETE)
    // PATH es la vía de acceso al servidor
    // HANDLER es la función que se ejecuta cuando se hace el direccionamiento a la ruta, siempre recibe como parámetro dos variables, req por request y res por response.

const express = require('express');
const getCharById = require('./src/controllers/getCharById'); // router -> lo necesito?
const getCharDetail = require('./src/controllers/getCharDetail') // router -> lo necesito?
const router = require('./src/routes/index')

const server = express()
const PORT = 3001;

// Hasta ahora entiendo que éste file:
// Utiliza express
// Levanta el servidor en el puerto 3001. 
// Además expresa y pone en funcionamiento los Middleware.
// Determina qué controladores serán usados para qué rutas

server.use(express.json()) // middleware

server.use('/', router) // hace que el router defina qué controladores utilizar

server.listen(PORT, ()=>{
    console.log('Server raised in port ' + PORT);
})









// Creando un Servidor con Node puro=>
// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');// para que no joda CORS -> permite al front hacer peticiones al back

//     let id = req.url.split('/').at(-1);

//     if(req.url.includes('onsearch')){
//         getCharById(res, id); // éste res, es el mismo res que recibo cuando se crea el Server. De aquí es que esta fción controladora recibe la response! la que va a modificar y devolver el objeto con los datos recibidos de la api
//     }

//     if(req.url.includes('detail')){
//         getCharDetail(res,id);
       
//     }
// }).listen(3001, 'localhost');







// antes hicimos algo así pero lo borramos luego:

// const characters = require('./src/utils/data') // obtengo el array de objetos characters

// http.createServer((req, res) => {

//     res.setHeader('Access-Control-Allow-Origin', '*'); // para que no joda CORS -> permite al front hacer peticiones al back
//     if (req.url.includes('rickandmorty/character')) {
//         let id = req.url.split('/').at(-1); // obtengo el nro de id que está en la request -> pero hay que parsearlo ... porque ese dato es un string, no un nro!
//         // data es un archivo que tiene un arr de objetos, cada objeto tiene una prop id

//         // let charFilter = characters.filter(char => char.id === Number(id)); // el filter devuelve un array con una sola posición y ahí está el objeto

//         let charFilter = characters.find(char=> char.id === Number(id)) // el find devuelve directamente el objeto encontrado, me sirve más para lo que quiero

//         res.writeHead(200, {'Content-Type' : 'application/json'}).end(JSON.stringify(charFilter))
//     }

// }).listen(3001, 'localhost');