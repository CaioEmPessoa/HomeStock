/*
	DROP DATABASE HomeStock;
	CREATE DATABASE HomeStock;
	USE HomeStock;
*/

CREATE TABLE IF NOT EXISTS categorias (
	categoria_id INT NOT NULL AUTO_INCREMENT,
	categoria_nome VARCHAR(100),
	categoria_imagem VARCHAR(300),
	categoria_icone_texto CHAR(1),
	PRIMARY KEY (categoria_id)
);

CREATE TABLE IF NOT EXISTS cargos(
	cargo_id INT NOT NULL AUTO_INCREMENT,
	cargo_nome VARCHAR(50),
	cargo_perm TINYINT,
	PRIMARY KEY (cargo_id)
);

CREATE TABLE IF NOT EXISTS usuarios (
	usuario_id INT NOT NULL AUTO_INCREMENT,
	usuario_nome VARCHAR(100),
	usuario_email VARCHAR(100),
	cargo_id INT,
	PRIMARY KEY (usuario_id),
	FOREIGN KEY (cargo_id) REFERENCES cargos(cargo_id)
);

CREATE TABLE IF NOT EXISTS produtos (
	produto_id INT NOT NULL AUTO_INCREMENT,
	produto_codBarras VARCHAR(20),
	produto_imagem VARCHAR(30),
	produto_icone CHAR(1),
	produto_minimo TINYINT,
	produto_maximo TINYINT,
	categoria_id INT,
	PRIMARY KEY (produto_id),
	FOREIGN KEY (categoria_id) REFERENCES categorias(categoria_id)
);

CREATE TABLE IF NOT EXISTS produtos_estoque (
	estoque_id INT NOT NULL AUTO_INCREMENT,
	estoque_quantidade INT,
	estoque_data_validade DATE,
	estoque_data_fabricacao DATE,
	produto_id INT,
	produto_historico_usuario INT,
	
	PRIMARY KEY (estoque_id),
	FOREIGN KEY (produto_id) REFERENCES produtos(produto_id),
	FOREIGN KEY (produto_historico_usuario) REFERENCES usuarios(usuario_id)
)



/*

*/