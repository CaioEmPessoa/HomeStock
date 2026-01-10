const debug = require('../utilities/debug');

const registers_base = require('./register_base');

class categoryRegister extends registers_base {
    constructor(connection){

        const tableName = "roles";
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS roles(
                role_id INT NOT NULL AUTO_INCREMENT,
                role_name VARCHAR(50),
                role_permission TINYINT,
                PRIMARY KEY (role_id)
            );
        `;

        super(connection, createTableQuery, tableName);
    }

}

module.exports = categoryRegister;