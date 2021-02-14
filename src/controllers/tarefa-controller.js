const tarefaDAO = require('../DAO/tarefas-dao')
module.exports = (app, db) => {
    app.get('/tarefas', (req, res) => {
        const tarefa = new tarefaDAO(db)
        tarefa.listaTarefas()
            .then(tarefas => {
                res.send(tarefas)
            })
            .catch(error => {
                res.send(error)
            })
    })

    app.get('/tarefas/:id', (req, res) => {
        const tarefa = new tarefaDAO(db)
        tarefa.listaTarefaEspecifica(req.params.id)
            .then(tarefaEspecifica => {
                res.send(tarefaEspecifica)
            })
            .catch(error => {
                res.send(error)
            })
    })

    app.post('/tarefas', (req, res) => {
        const tarefa = new tarefaDAO(db)
        tarefa.criaTarefas(req.body)
            .then(sucess => res.send(`Tarefa ${req.body.TITULO} adicionada com sucesso: ${sucess}`))
            .catch(error => res.send(error))
    })

    app.put('/tarefas/:id', (req, res) => {
        const tarefa = new tarefaDAO(db)
        tarefa.atualizaTarefa(req.body, req.params.id)
            .then(sucess => res.send(sucess))
            .catch(error => res.send(error))
    })

    app.delete('/tarefas/:id', (req, res) => {
        db.run(
            "DELETE FROM TAREFAS WHERE ID = (?)", req.params.id,
            error => {
                if (error) throw new Error (`Erro ao deletar ${error}`)
                else res.send(`Tarefa com o ID ${req.params.email} deletada`)
            }
        )
    })
}