-- Tabela Farmaceutica
CREATE TABLE IF NOT EXISTS Farmaceutica (
    ID_farmaceutica INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    senha TEXT NOT NULL
);

-- Tabela Cliente
CREATE TABLE IF NOT EXISTS Cliente (
    ID_usuario INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    senha TEXT NOT NULL
);
-- Tabela Telefone
CREATE TABLE IF NOT EXISTS Telefone (
    ID_telefone INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    numero TEXT NOT NULL,
    ID_usuario INTEGER NOT NULL,
    FOREIGN KEY (ID_usuario) REFERENCES Cliente(ID_usuario)
);

-- Tabela Endereco
CREATE TABLE IF NOT EXISTS Endereco (
    ID_endereco INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    cep TEXT NOT NULL,
    cidade TEXT,
    estado TEXT,
    rua_avenida TEXT,
    numero INTEGER NOT NULL,
    complemento TEXT,
    ID_usuario INTEGER NOT NULL,
    FOREIGN KEY (ID_usuario) REFERENCES Cliente(ID_usuario)
);
-- Tabela Receita
CREATE TABLE IF NOT EXISTS Receita (
    ID_receita INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    nome_medicamento TEXT NOT NULL,
    dosagem DOUBLE PRECISION NOT NULL,
    via TEXT NOT NULL,
    medico_responsavel TEXT NOT NULL,
    data TEXT NOT NULL,
    anexo BLOB NOT NULL, -- BLOB para armazenar o anexo
    ID_usuario INTEGER NOT NULL,
    FOREIGN KEY (ID_usuario) REFERENCES Cliente(ID_usuario)
);

-- Tabela Orcamento
CREATE TABLE IF NOT EXISTS Orcamento (
    ID_pedido INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    valor DOUBLE PRECISION, 
    ID_usuario INTEGER NOT NULL,
    ID_farmaceutica INTEGER NOT NULL,
    FOREIGN KEY (ID_usuario) REFERENCES Cliente(ID_usuario),
    FOREIGN KEY (ID_farmaceutica) REFERENCES Farmaceutica(ID_farmaceutica)
);
