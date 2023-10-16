import { db } from "./SQLite"

export function criaTabela() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " + "usuarios" +
            "( id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, senha TEXT);")
    })
}

export function cadastrarUsuario(usuario) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?);",
                [usuario.nome, usuario.email, usuario.senha],
                () => {
                    resolve("Usuário cadastrado com sucesso!")
                })
        })
    })
}

export async function buscaUsuario(usuario) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT email FROM usuarios WHERE email =? AND senha =? ;", [usuario.email, usuario.senha],
                (transaction, resultado) => {
                    resolve(resultado.rows.item)
                })

        })
    })
}

export async function buscaTodosUsuarios() {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM usuarios;", [],
                (transaction, resultado) => {
                    resolve(resultado.rows._array)
                })
        })
    })
}
