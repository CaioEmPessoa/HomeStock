
const servicesBase = require('./services_base');
const apiReturn = require("../utilities/api_return");

class inventoryService extends servicesBase{

    constructor (tables) {
        const register = tables.inventory_register;
        const tableName = "inventory";

        super(register, tableName);
    }

    addOneStock(id) {
        return new Promise( async (resolve, reject) => {
            // TODO: Better error handeling
            const currentValues = await this.register.getById(id);
    
            const inventory_ammnt = currentValues.inventory_quantity;
    
            const result = await this.register.update({
                "inventory_quantity": +inventory_ammnt + 1
            }, id);

            const updatedSearch = await this.register.getById(id);

            const api_return = apiReturn.success(null, "Successfully updated!", updatedSearch);

            resolve(api_return)

        });
    }

    removeOneStock(id) {
        return new Promise( async (resolve, reject) => {
            // TODO: Better error handeling
            const currentValues = await this.register.getById(id);
    
            const inventory_ammnt = currentValues.inventory_quantity;
    
            const result = await this.register.update({
                "inventory_quantity": +inventory_ammnt - 1
            }, id);

            const updatedSearch = await this.register.getById(id);

            const api_return = apiReturn.success(null, "Successfully updated!", updatedSearch);

            resolve(api_return);

        });
    }

    stockEdit(id) {

    }

}

module.exports = inventoryService;