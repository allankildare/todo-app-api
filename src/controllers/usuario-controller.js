const Usuario = require('../models/usuario')
module.exports = (app, db) => {
    app.get('/usuarios', (req, res) => {
        res.send('<h1>Usuarios</h1>')
    })

    
    app.post('/usuarios', (req, res) => {
        const user = new Usuario(req.body.nome, req.body.email, req.body.senha)
        db.usuarios.push(user)
        console.log(db)
        res.send('Ok')
    })
    
}