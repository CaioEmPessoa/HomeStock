const mysql = require('mysql2/promise');
const debug = require('../utilities/debug');

const categoryRegister = require('./category_register');
const rolesRegister    = require('./roles_register');
const productsRegister = require('./product_register');
const inventoryRegister = require('./inventory_register');

class registersIndex {

    async init() {
        return new Promise(async (resolve, reject) => {
            debug.log("Starting connection...");

            this.registers = {};

            this.connection = await mysql.createConnection({
                host: process.env.DATABASE_HOST,
                port: process.env.DATABASE_PORT || 3306,
                user: process.env.DATABASE_USER,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_DATABASE
            });

            // --------- START CREATING TABLES --------
            debug.log("Start creating tables...");
            this.registers.category_register = new categoryRegister(this.connection);
            await this.registers.category_register.createTable();

            this.registers.roles_register = new rolesRegister(this.connection);
            await this.registers.roles_register.createTable();

            this.registers.products_register = new productsRegister(this.connection);
            await this.registers.products_register.createTable();

            this.registers.inventory_register = new inventoryRegister(this.connection);
            await this.registers.inventory_register.createTable();

            debug.log("Finished creating tables!");

            resolve(this.registers);
        });
    }
}

module.exports = new registersIndex();