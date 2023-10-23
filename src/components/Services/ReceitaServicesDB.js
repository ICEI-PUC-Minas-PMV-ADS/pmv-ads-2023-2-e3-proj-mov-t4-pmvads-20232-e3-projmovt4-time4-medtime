import DataBase from './DbServices';

const BD_EXEC = DataBase.getConnection();

export const getReceita = async() => {
  let results = await BD_EXEC('select *from receita');
  return results.rows._array;
}

export const insertReceita = async (param) => {
  let results = await BD_EXEC(`insert into Receita (nome, CPF, CEP, Endereço, Bairro, Cidade, Estado, Telefone, Email, Mensagem, imagemPath) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,[param.nome, param.CPF, param.CEP, param.Endereco, param.Bairro, param.Cidade, param.Estado, param.Telefone, param.Email, param.Mensagem, param.ImagemPath]);
  return results.rowsAffected;
}
export const updateReceita = async (param) => {
  let results = await BD_EXEC('update Receita set nome=?, CPF=?, CEP=?, Endereço=?, Bairro=?, Cidade=?, Estado=?, Telefone=?, Email=?, Mensagem=?, imagemPath=? where id=?', [param.nome, param.CPF, param.CEP, param.Endereco, param.Bairro, param.Cidade, param.Estado, param.Telefone, param.Email, param.Mensagem, param.ImagemPath, param.id]);
  return results.rowsAffected;
}
export const deleteReceita = async (id) => {
  let results = await BD_EXEC('delete Receita where id=?', [id]);
  return results.rowsAffected;
}