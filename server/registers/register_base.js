const debug = require('../utilities/debug');

class RegisterBase {

    constructor(connection, createTableQuery, tableName){
        this.connection = connection;

        this.createTableQuery = createTableQuery;
        this.tableName = tableName;
    }

    querySQL(query, success_msg) {
        return new Promise((resolve, reject) => {
            this.connection.query(query, {}, (error, response) => {
                if(error) {
                    debug.log("DATABASE QUERY ERROR: " + error, "ERROR");
                    debug.log("QUERY: " + query, "ERROR");
                    reject(error);
                }
                else {
                    debug.log(success_msg);
                    resolve(response);
                }
            });
        });
    }

    createTable() {
        debug.log(`Creating ${this.tableName} table...`)

        this.querySQL(this.createTableQuery, `Created ${this.tableName} table.`);
    }

    async getAll() {
        const sql = `SELECT * FROM ${this.tableName};`;
        try {
            const response = await this.querySQL(sql, `Fetched all ${this.tableName}`);
            return response;
        } catch (error) {
            debug.log(`Error fetching ${this.tableName}: ${error}`, "ERROR");
            throw error;
        }
    }

}

module.exports = RegisterBase;