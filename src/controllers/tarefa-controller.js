const Tarefa = require('../models/tarefa')
module.exports = (app, db) => {
    app.get('/tarefas', (req, res) => {
        res.send('<h1>Tarefas</h1>')
    })

    app.post('/tarefas', (req, res) => {
        const tarefas = new Tarefa(req.body.titulo, req.body.descricao, req.body.status. req.body.status)
        db.tarefas.push(tarefas)
        res.send('Ok')
    })
}