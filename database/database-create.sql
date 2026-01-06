/*
	DROP DATABASE HomeStock;
	CREATE DATABASE HomeStock;
	USE HomeStock;
*/

CREATE TABLE IF NOT EXISTS categories (
	category_id INT NOT NULL AUTO_INCREMENT,
	category_name VARCHAR(100),
	category_image VARCHAR(300),
	category_icon_text CHAR(1),
	PRIMARY KEY (category_id)
);

CREATE TABLE IF NOT EXISTS roles(
	role_id INT NOT NULL AUTO_INCREMENT,
	role_name VARCHAR(50),
	role_permission TINYINT,
	PRIMARY KEY (role_id)
);

CREATE TABLE IF NOT EXISTS users (
	user_id INT NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(100),
	user_email VARCHAR(100),
	role_id INT,
	PRIMARY KEY (user_id),
	FOREIGN KEY (role_id) REFERENCES roles(role_id)
);

CREATE TABLE IF NOT EXISTS products (
	product_id INT NOT NULL AUTO_INCREMENT,
	product_barcode VARCHAR(20),
	product_image VARCHAR(30),
	product_icon CHAR(1),
	product_minimum TINYINT,
	product_maximum TINYINT,
	category_id INT,
	PRIMARY KEY (product_id),
	FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE IF NOT EXISTS inventory_items (
	inventory_id INT NOT NULL AUTO_INCREMENT,
	inventory_quantity INT,
	inventory_expiry_date DATE,
	inventory_manufacturing_date DATE,
	product_id INT,
	inventory_history_user INT,

	PRIMARY KEY (inventory_id),
	FOREIGN KEY (product_id) REFERENCES products(product_id),
	FOREIGN KEY (inventory_history_user) REFERENCES users(user_id)
);