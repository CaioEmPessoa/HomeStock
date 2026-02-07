
const registers_base = require('./register_base');

class productRegister extends registers_base {
    constructor(connection){
        const tableName = "products";
        const tableIdField = "product_id";
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS products (
                product_id INT NOT NULL AUTO_INCREMENT,
                product_name VARCHAR(500),
                product_barcode VARCHAR(20),
                product_image VARCHAR(500),
                product_icon CHAR(1),
                product_minimum TINYINT,
                product_maximum TINYINT,
                category_id INT,
                PRIMARY KEY (product_id),
                FOREIGN KEY (category_id) REFERENCES categories(category_id)
            );
        `;
        const relationships = {
            "categories": "category_id"
        }

        super(connection, createTableQuery, tableName, tableIdField, relationships);
    }

}

module.exports = productRegister;