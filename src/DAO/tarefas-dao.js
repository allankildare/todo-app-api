module.exports = class TarefasDAO {
    constructor(db) {
      this._db = db
    }
  
    listaTarefas() {
      return new Promise((resolve, reject) => {
        this._db.all("SELECT * FROM TAREFAS;", (error, rows) => {
          if (error) reject("Erro ao consultar tabela")
          else resolve(rows)
        })
      })
    }

    listaTarefaEspecifica(id) {
      return new Promise((resolve, reject) => {
        this._db.all("SELECT * FROM TAREFAS WHERE id = (?)",
        [id],
        (error, user) => {
          if (error) reject('Usuário não encontrado')
          else resolve(user)
        })
      })
    }
  
    criaTarefas(body) {
      return new Promise ((resolve, reject) => {
        let newArray = [body.TITULO, body.DESCRICAO, body.STATUS, body.DATACRIACAO, body.ID_USUARIO]
        this._db.run("INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?,?,?,?,?)",
        [newArray[0], newArray[1], newArray[2], newArray[3], newArray[4]],
        error => {
          if (error) reject(`Erro ${error} ao inserir valores.`) 
          else resolve("Usuário inserido com sucesso")
        } 
      )})
    }

    atualizaTarefa(body, id) {
      return new Promise((resolve, reject) => {
        this._db.all("UPDATE TAREFAS SET TITULO = (?), DESCRICAO = (?), STATUS = (?), DATACRIACAO = (?), ID_USUARIO = (?) WHERE ID = (?)",
        [body.TITULO, body.DESCRICAO, body.STATUS, body.DATACRIACAO, body.ID_USUARIO, id],
        error => {
          if (error) reject(`${error}`)
          else resolve(`Os dados do ID ${id} foram atualizados com sucesso`)
        })
      })
    }

    deletaTarefa(id) {
      return new Promise((resolve, reject) => {
        this._db.run("DELETE FROM TAREFAS WHERE ID = (?)", id,
        error => {
          if (error) reject(`Erro ao deletar ${error}`)
          else resolve(`Tarefa com o ID ${req.params.email} deletado`)
        })
      })
    }
  }
  