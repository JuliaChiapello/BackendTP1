const express = require("express")
const app = express()
const port = 3000

app.use(express.json())


const db = require("./models/index.model")
db.sequelize.sync()   //{ alter:true }
.then(() => {
    console.log("Base de Datos conectada!")
})
.catch((error) => {
    console.log("Error al conectar con la Base de Datos: ", error)
})

require("./router/index.routes")(app)

app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`)
})