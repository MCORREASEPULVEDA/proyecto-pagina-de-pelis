const Movie = require('../utils/classMovies')
const Movie = require('../models/Movie')

module.exports = {
    getMovieService: async () => {
        try{
            const Movie = await Movie.find()
            return Movie
        } catch (error) {
            throw error.message
        }
    }
}