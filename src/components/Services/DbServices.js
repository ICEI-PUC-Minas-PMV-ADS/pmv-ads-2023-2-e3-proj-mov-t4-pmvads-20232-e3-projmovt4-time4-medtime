import *as SQLite from 'expo-sqlite';

export const DataBase = {

  getConnection: () => {

    const db = SQLite.openDatabase ('MedTime.db');

    db.transaction (() =>{
  tx.executeSql('create table is not exists gastos(id integer primary key autoincremet, name text not null, CPF text not null, CEP text not null, Endereco text not null, Bairro text not null, Cidade text not null, Estado text not null, Telefone text not null, Email text not null, Mensagem text not null, ImagemPath);');
    });

    const ExecuteQuery = (sql, params = []) => {
      new Promise((resolve, reject) => {
        db.transaction ((trans) => {
          trans.executeSql(
            sql,
            params,
            (trans, results) => {
              resolve(results);
            },
            (Error) => {
              reject(Error);
            }
          );
        });
      });

      return ExecuteQuery;
    };
  },
};
