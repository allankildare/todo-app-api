module.exports = app => {
    app.get('/tarefas', (req, res) => {
        res.send('<h1>Tarefas</h1>')
    })
    app.post('/tarefas', (req, res) => {
        res.send('Rota POST de usuario ativada: tarefa adicionado ao banco de dados')
    })
}