require('dotenv').config()

const app = require('./src/app')
const dbconection = require ('./src/config/dbconenction')

const{ PORT } = process.env

dbconection()
.then(() => app.listen(PORT, () =>console.log(`server is listening on port ${PORT}`)))
.catch((err) => console.log('fallo en la conexion' = err.message))

 