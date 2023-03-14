const http = require('http');
const getCharById = require('./src/controllers/getCharById');
const getCharDetail = require('./src/controllers/getCharDetail')

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');// para que no joda CORS -> permite al front hacer peticiones al back

    let id = req.url.split('/').at(-1);

    if(req.url.includes('onsearch')){
        getCharById(res, id); // éste res, es el mismo res que recibo cuando se crea el Server. De aquí es que esta fción controladora recibe la response! la que va a modificar y devolver el objeto con los datos recibidos de la api
    }

    if(req.url.includes('detail')){
        getCharDetail(res,id);
       
    }
}).listen(3001, 'localhost');







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