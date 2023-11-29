import { openDatabase } from 'expo-sqlite';

let db;

if (typeof window === 'undefined') {
  // Ambiente não web (Expo)
  db = openDatabase('MedTime.db');
} else {
  // Ambiente web
  db = null; // ou outra lógica, dependendo do que você deseja fazer no ambiente web
}

const ExecuteQuery = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    if (db) {
      db.transaction((trans) => {
        trans.executeSql(
          sql,
          params,
          (trans, results) => {
            resolve(results);
          },
          (error) => {
            reject(error);
          }
        );
      });
    } else {
      // Lógica para ambiente web, se necessário
      reject(new Error('SQLite not supported on web.'));
    }
  });
};

const getConnection = () => {
  return ExecuteQuery;
};

export default getConnection;
