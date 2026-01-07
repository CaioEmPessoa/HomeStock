const mysql = require('mysql');
const debug = require('../utilities/debug');

const category_register = require('./category_register');

class registersIndex {

init() {
    debug.log("Starting connection...");

    this.connection = mysql.createConnection({
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT || 3306,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE
    });

    this.connection.connect((err) => {
        if (err) {
            debug.log(`Connection FAILED: ${err.code} - ${err.message}`, "ERROR");

            if (err.code === 'ECONNREFUSED') {
                debug.log("MariaDB server is not running or not accessible!", "ERROR");
            } else if (err.code === 'ER_ACCESS_DENIED_ERROR') {
                debug.log("Invalid username/password!", "ERROR");
            } else if (err.code === 'ER_BAD_DB_ERROR') {
                debug.log("Database doesn't exist!", "ERROR");
            }
        }
        debug.log("Connection established successfully!");

        // Now test with a query
        this.testConnection().then(() => {
            const boundQuerySQL = this.querySQL.bind(this);

            debug.log("Start creating tables...")

            category_register.init(boundQuerySQL);
            category_register.createTable();

            debug.log("Finished creating tables!")
        });
    });
}

async testConnection() {
    return new Promise((resolve, reject) => {
        this.connection.query('SELECT 1+1 AS test', (error, results) => {
            if (error) {
                debug.log(`Connection failed: "${error.message}"`, "ERROR");
                reject(error);
            } else {
                debug.log(`Queries working!`);
                resolve(results);
            }
        });
    });
}

querySQL(query, success_msg) {
        this.connection.query(query, {}, (error, response) => {
            if(error) {
                debug.log("DATABASE QUERY ERROR: " + error, "ERROR");
                debug.log("QEURY: " + query, "ERROR");
                return error;
            }
            else {
                debug.log(success_msg);
                return response;
            }
        })

    }
}

module.exports = new registersIndex();