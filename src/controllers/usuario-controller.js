const usuarioDAO = require('../DAO/usuarios-dao')

module.exports = (app, db) => {
    app.get('/usuarios', (req, res) => {
        const usuario = new usuarioDAO(db)
        usuario.listaUsuarios()
            .then(usuarios => {
                res.send(usuarios)
            })
            .catch(error => {
                res.send(error)
            })
    })

    app.get('/usuarios/:email', (req, res) => {
        const usuario = new usuarioDAO(db)
        usuario.procuraUsuario(req.params.email)
        .then(usuario => {
            res.send(usuario)
        })
        .catch(error => {
            res.send(error)
        })
    })

    app.post('/usuarios', (req, res) => {
        db.run(`INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)`, [req.body.NOME, req.body.EMAIL,req.body.SENHA],
        function (error) {
            if (error) throw new Error (`Erro ao inserir ${error}`)
            else {
                res.send("Usuário adicionado")
            }
        })
    })

    app.delete('/usuarios/:email', (req, res) => {
        db.run(
            "DELETE FROM USUARIOS WHERE EMAIL = (?)", req.params.email,
            error => {
                if (error) throw new Error (`Erro ao deletar ${error}`)
                else res.send("Usuário deletado")
            }
        )
    })

    const atualizaRegistro = (email, body) => {
        for (let user of bd.usuarios) {
            if (user.email === email) {
                user.nome = body.nome
                user.senha = body.senha
            }
        }
    }

    app.put('/usuarios/:email', (req, res) => {
        atualizaRegistro(req.params.email, req.body)
        res.send(`Usuário ${ req.body.nome } atualizado`)
    })
    
}