
const servicesBase = require('./services_base');

class inventoryService extends servicesBase{

    constructor (tables) {
        const register = tables.inventory_register;
        const tableName = "inventory";

        super(register, tableName);
    }

}

module.exports = inventoryService;