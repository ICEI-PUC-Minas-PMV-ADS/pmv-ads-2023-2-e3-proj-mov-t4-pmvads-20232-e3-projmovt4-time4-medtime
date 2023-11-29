import getConnection from './DbServices';

const BD_EXEC = getConnection();

export const getReceita = async () => {
  let results = await BD_EXEC('select * from receita');
  return results.rows._array;
}

export const insertReceita = async (param) => {
  let results = await BD_EXEC(`
    insert into Receita (nome, CPF, CEP, Endereço, Bairro, Cidade, Estado, Telefone, Email, Mensagem, imagemPath) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `, [param.nome, param.CPF, param.CEP, param.Endereco, param.Bairro, param.Cidade, param.Estado, param.Telefone, param.Email, param.Mensagem, param.ImagemPath]);

  return results.rowsAffected;
}

// Outras operações de Receita...

export const deleteReceita = async (id) => {
  let results = await BD_EXEC('delete from Receita where id=?', [id]);
  return results.rowsAffected;
}
