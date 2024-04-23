require ('dotenv').config()
const mongoose = require ('mongoose')

const { URI } = process.env

const dbconnection = async () => {
    await mongoose.connect (`${URI}`)
}

module.exports = dbconnection;
