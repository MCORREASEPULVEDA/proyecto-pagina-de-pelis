const { Schema, model } = require('mongoose')

const movieSchema = new Schema({
    tittle:String,
    year:Number,
    director:String,
    duration:String,
    genre: Array,
    rate:Number,
    poster:String
})

const Movie = model('Movie',movieSchema)

module.exports = Movie; 
