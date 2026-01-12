
const servicesBase = require('./services_base');

class categoryServie extends servicesBase{

    constructor (tables) {
        const register = tables.category_register;
        const tableName = "categories";

        super(register, tableName);
    }

}

module.exports = categoryServie;