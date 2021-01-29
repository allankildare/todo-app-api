const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3001
const db = require('./infra/sqlite-db')
const sqlite = require('sqlite3')

app.use(bodyParser.json())
app.use(cors())

const controllerUsuario = require('./controllers/usuario-controller')
controllerUsuario(app, db)

const controllerTarefa = require('./controllers/tarefa-controller')
controllerTarefa(app, db)

app.listen(port, () => {
    console.log(`Ouvindo em http://localhost:${port}`)
})

