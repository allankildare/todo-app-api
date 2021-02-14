module.exports = class UsuariosDAO {
  constructor(db) {
    this._db = db
  }

  listaUsuarios() {
    return new Promise((resolve, reject) => {
      this._db.all("SELECT * FROM USUARIOS;", (error, rows) => {
        if (error) reject("Erro ao consultar tabela")
        else resolve(rows)
      })
    })
  }

  criaUsuarios(body) {
    return new Promise ((resolve, reject) => {
      let newArray = [body.NOME, body.EMAIL,body.SENHA]
      this._db.run("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)", newArray,
      error => {
        if (error) reject(`Erro ${error} ao inserir valores.`) 
        else resolve("Usuário inserido com sucesso")
      } 
    )})
  }

  procuraUsuario(params) {
    return new Promise ((resolve, reject)=> {
      this._db.all(`SELECT * FROM USUARIOS WHERE EMAIL = (?)`, [params], (error, user) => {
        if (error) {
          reject('Usuário não encontrado')
        } else {
          resolve(user)
        }
      })
    })
  }

  atualizaUsuario(body, email) {
    return new Promise((resolve, reject) => {
      this._db.all("UPDATE USUARIOS SET NOME = (?), EMAIL = (?), SENHA = (?) WHERE EMAIL = (?)",
      [body.NOME, body.EMAIL, body.SENHA, email],
      error => {
        if (error) reject(`Aconteceu algum erro ao buscar o usuario\nErro encontrado: ${error}`)
        else resolve(`Os dados de ${email} foram atualizados com sucesso`)
      })
    })
  }
}
