const debug = require('../utilities/debug');

class RegisterBase {

    constructor(connection, createTableQuery, tableName, tableIdField, relationships = {}){
        if(connection == null) {
            debug.logError("Connection can't be null!");
            throw new Error("RegisterBase Error: Connection can't be null!");
        } else if (tableName == null) {
            debug.logError("Please provide a table name!");
            throw new Error("RegisterBase Error: Please provide a table name!");
        }

        this.connection = connection;

        this.createTableQuery = createTableQuery;
        this.tableIdField = tableIdField;
        this.tableName = tableName;
        this.relationships = relationships;

    }

    querySQL(query, success_msg) {
        return new Promise(async (resolve, reject) => {
                try {
                    const [results, fields] = await this.connection.query(query, {});
                    debug.log(success_msg);
                    resolve(results);
                }
                catch (e) {
                    debug.logError("DATABASE QUERY ERROR: " + e);
                    debug.logError("QUERY: " + query);
                    reject(e);
                }
            }
        );
    }

    async createTable() {
        debug.log(`Creating ${this.tableName} table...`)
        return await this.querySQL(this.createTableQuery, `Created ${this.tableName} table.`);
    }

    async getAll() {
        let sql = `SELECT * FROM ${this.tableName} `;

        Object.keys(this.relationships).forEach(tableName => {
            sql += `LEFT JOIN ${tableName} ON
                    ${tableName}.${this.relationships[tableName]} =
                    ${this.tableName}.${this.relationships[tableName]} `;
        });
        sql += ";";

        try {
            const response = await this.querySQL(sql, `Fetched all ${this.tableName}`);
            return response;
        } catch (error) {
            debug.logError(`Error fetching ${this.tableName}: ${error}`);
            throw error;
        }
    }

    async getById(id) {
        const sql = `SELECT * FROM ${this.tableName} WHERE ${this.tableIdField} = ${id}`;
        try {
            const response = await this.querySQL(sql, `Fetched all ${this.tableName}`);
            return response[0];
        } catch (error) {
            debug.logError(`Error fetching ${this.tableName}: ${error}`);
            throw error;
        }
    }

    /**
     * Save values into current table.
     * @param {{columnName: "colmnValue"}} entity - Entity data to save into this current table.
    **/
    async save(entity) {
        debug.log(`Saving into ${this.tableName}...`);

        let columns = Object.keys(entity);
        let values = `'${Object.values(entity).join("', '")}'`.replaceAll("''", null);

        let sql  = `INSERT INTO ${this.tableName} ( ${columns} ) `;
            sql += `VALUES ( ${values} );`;

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

    async update(entity, id) {
        debug.log(`Updating into ${this.tableName}...`);

        let sql = `UPDATE ${this.tableName} SET `
        let items = []

        Object.keys(entity).forEach((el) => {
            items.push(`${el} = '${entity[el]}'`);
        })

        sql += items.join(", ")
        sql += ` WHERE ${this.tableIdField} = ${id} `

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

    async delete(id) {
        debug.log(`Deleting from ${this.tableName}...`);

        let sql = `DELETE FROM ${this.tableName} WHERE ${this.tableIdField} = ${id}`

        try {
            const response = await this.querySQL(sql, `Deleted from ${this.tableName}!`);
            debug.log(`Deleted from ${this.tableName}!`);
            return response;
        } catch (error) {
            debug.logError(`Error deleting from ${this.tableName}: ${error}`);
            debug.logError(`SQL Query: ${sql}`);
            throw error;
        }
    }

}

module.exports = RegisterBase;