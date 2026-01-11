const debug = require('../utilities/debug');

class RegisterBase {

    constructor(connection, createTableQuery, tableName){
        if(connection == null) {
            debug.logError("Connection can't be null!");
            throw new Error("RegisterBase Error: Connection can't be null!");
        } else if (tableName == null) {
            debug.logError("Please provide a table name!");
            throw new Error("RegisterBase Error: Please provide a table name!");
        }

        this.connection = connection;

        this.createTableQuery = createTableQuery;
        this.tableName = tableName;

    }

    querySQL(query, success_msg) {
        return new Promise((resolve, reject) => {
            this.connection.query(query, {}, (error, response) => {
                if(error) {
                    debug.logError("DATABASE QUERY ERROR: " + error);
                    debug.logError("QUERY: " + query);
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
            debug.logError(`Error fetching ${this.tableName}: ${error}`);
            throw error;
        }
    }

    /**
     * Save values into current table.
     * @param {[{columnName: "str", columnValue: "str"}]} entity - Entity data to save into this current table.
    **/
    async save(entity) {
        debug.log(`Saving into ${this.tableName}...`);
        let sql = `INSERT INTO ${this.tableName} (${entity.map(el => el.columnName)}) `;
        sql    += `VALUES (${entity.map(el => ` '${el.columnValue}'`)} )`;

        try {
            const response = await this.querySQL(sql, `Saved into ${this.tableName}!`);
            debug.log(`Saved into ${this.tableName}!`);
            return response;
        } catch (error) {
            debug.logError(`Error saving into ${this.tableName}: ${error}`);
            debug.logError(`SQL Query: ${sql}`);
            throw error;
        }
    }

}

module.exports = RegisterBase;