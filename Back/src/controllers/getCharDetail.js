const axios = require('axios');

// es muy igualito a lo que hice en getCharById

const getCharDetail = (res,id) =>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data)
        .then(data => {
            let char = {
                name: data.name,
                image: data.image,
                gender: data.gender,
                species: data.species,
                status: data.status,
                origin: data.origin.name // porque origin es un objeto
            }
            res
                .writeHead(200, { 'Conten-type': 'application/json' }) 
                .end(JSON.stringify(char))
        })
        .catch(error =>
            res
                .writeHead(500, { 'Content-type': 'text/plain' })
                .end(`El personaje con id:${id} no fue encontrado`)) 
}

module.exports = getCharDetail;