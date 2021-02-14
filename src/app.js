const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const db = require('./infra/sqlite-db')
const port = 3001

app.use(bodyParser.json())
app.use(cors())

const controllerUsuario = require('./controllers/usuario-controller')
const controllerTarefa = require('./controllers/tarefa-controller')

controllerUsuario(app, db)
controllerTarefa(app, db)

app.listen(port, () => {
    console.log(`Ouvindo em http://localhost:${port}`)
})

console.log(db)

