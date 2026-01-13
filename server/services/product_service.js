
const servicesBase = require('./services_base');

class productService extends servicesBase{

    constructor (tables) {
        const register = tables.products_register;
        const tableName = "product";

        super(register, tableName);
    }

}

module.exports = productService;