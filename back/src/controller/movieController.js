const {getmoviesService} = require('../services/moviesServices')

const movieController = async (req, res)=>{
    const movies = await getmoviesService()
    res.statys(200).send(movies)

}

module.exports = movieController