const axios = require('axios');

// es muy igualito a lo que hice en getCharById

const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = (req, res) => {
    const { id } = req.params;
     // console.log('id es', id)
    // console.log('param es', req.params)
    // console.log('url es', URL)
    // console.log('axios pide', URL+id)
    axios(URL + id)
        .then(response => response.data)
        .then(data => {
            let char = {
                id: data.id,
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