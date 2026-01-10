const debug = require('../utilities/debug');

const registers_base = require('./register_base');

class categoryRegister extends registers_base {
    constructor(connection){
        const tableName = "categories";
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS ${tableName} (
                category_id INT NOT NULL AUTO_INCREMENT,
                category_name VARCHAR(100),
                category_image VARCHAR(300),
                category_icon_text CHAR(1),
                PRIMARY KEY (category_id)
            );
        `;

        super(connection, createTableQuery, tableName);
    }

}

module.exports = categoryRegister;