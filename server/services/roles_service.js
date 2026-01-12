
const servicesBase = require('./services_base');

class rolesService extends servicesBase{

    constructor (tables) {
        const register = tables.roles_register;
        const tableName = "roles";

        super(register, tableName);
    }

}

module.exports = rolesService;