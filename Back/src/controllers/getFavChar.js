const axios = require('axios')
const favs = require('../utils/favs')

const URL = "https://rickandmortyapi.com/api/character/";

// Lo que quiero que haga este controlador es que tome el objeto JSON que me llega desde el axios
// Si es axios.post -> quiero que lo agregue al array del file favs que está en utils
// Si es axios.delete -> quiero que busque por id en el array y lo elimine del array

const getFavChar = (req, res) => {
    const { id } = req.params;
    console.log(req.params)
    console.log(req.data)
    res.end('Por lo menos el back se inmutó')
}

module.exports = getFavChar;