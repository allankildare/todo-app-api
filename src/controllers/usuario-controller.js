const bd = require('../infra/bd')
const Usuario = require('../models/usuario')
module.exports = (app, db) => {
    app.get('/usuarios', (req, res) => {
        res.send( req.body)
    })

    app.get('/usuarios/:email', (req, res) => {
        for (let usr of bd.usuarios) {
            if(usr.email == req.params._email) {
                res.send(usr)
            }
        }
        res.send(`Usuário não encontrado`)
    })

    app.post('/usuarios', (req, res) => {
        res.send(`Usuário ${req.body.email} adicionado(a) com sucesso`)
        const usr = new Usuario(req.body.nome, req.body.email, req.body.senha)
        db.usuarios.push(usr)
        console.log(db)
    })
    
}