const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3002

app.use(bodyParser.json())

const controllerUsuario = require('./controllers/usuario-controller')
const controllerTarefa = require('./controllers/tarefa-controller')

const db = require('./infra/bd')

controllerUsuario(app, db)
controllerTarefa(app, db)

app.listen(port, () => {
    console.log(`Ouvindo em http://localhost:${port}`)
})

