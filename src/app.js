const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3001

app.use(bodyParser.json())

const controllerUsuario = require('./controllers/usuario-controller')
const controllerTarefa = require('./controllers/tarefa-controller')

controllerUsuario(app)
controllerTarefa(app)

app.listen(port, () => {
    console.log(`Ouvindo em http://localhost:${port}`)
})

