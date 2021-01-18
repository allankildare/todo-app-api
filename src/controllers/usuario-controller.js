module.exports = app => {
    app.get('/usuarios', (req, res) => {
        res.send('<h1>Usuarios</h1>')
    })
    app.post('/usuarios', (req, res) => {
        res.send('Rota post de usuario ativada: Usuário adicionado ao banco de dados')
    })
}