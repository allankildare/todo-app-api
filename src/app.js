const express = require('express')
const app = express()
const port = 3001

const controllerUsuario = require('./controllers/usuario-controller')
const controllerTarefa = require('./controllers/tarefa-controller')

controllerUsuario(app)
controllerTarefa(app)

app.listen(port, () => {
    console.log(`Ouvindo em http://localhost:${port}`)
})

