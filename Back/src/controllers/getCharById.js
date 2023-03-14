const axios = require('axios') // como estamos en back end usamos require y module exports (como en JS porque es nativo de Node entonces no necesitamos configuración ni nada)

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data) // en el objeto response tengo toda la respuesta de la api. Dentro de ella, la propiedad data me da la info que estoy buscando
        // axios parsea JSON automáticamente cuando recibe la respuesta, no cuando va a enviar la información
        // entonces, cuando recibo no necesito parsear, pero cuando envío, sí
        .then(data => {
            let char = {
                id: data.id,
                name: data.name,
                image: data.image,
                gender: data.gender,
                species: data.species
            }
            res
                .writeHead(200, { 'Conten-type': 'application/json' }) // le indico que está todo bien y te indico qué tipo de datos te mando
                .end(JSON.stringify(char)) // parseo el JSON
        })
        .catch(error =>
            res
                .writeHead(500, { 'Content-type': 'text/plain' })
                .end(`El personaje con id:${id} no fue encontrado`)) // también puedo poner error.message
}

module.exports = getCharById;