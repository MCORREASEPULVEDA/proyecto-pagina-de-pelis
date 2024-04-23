const axios = require('axios')
const renderFilms = require('./renderFilms')

const getFilms = () => {
    axios.get('https://students-api.up.railway.app/movies')
    .then((response) => {
        console.log(response)
        response.data.map(renderFilms)
    }).catch((error)=> alert(error.message))
}

module.exports = getFilms