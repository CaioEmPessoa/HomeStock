
const registers_base = require('./register_base');

class inventoryRegister extends registers_base {
    constructor(connection){
        const tableName = "inventory_items";
        const tableIdField = "inventory_id";
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS inventory_items (
                inventory_id INT NOT NULL AUTO_INCREMENT,
                inventory_quantity INT,
                inventory_expiry_date DATE,
                inventory_manufacturing_date DATE,
                product_id INT,
                inventory_history_user INT,

                PRIMARY KEY (inventory_id),
                FOREIGN KEY (product_id) REFERENCES products(product_id)
            );
        `;

        super(connection, createTableQuery, tableName, tableIdField);
    }

}

module.exports = inventoryRegister;