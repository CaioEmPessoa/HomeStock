const debug = require("../utilities/debug");
const apiReturn = require("../utilities/api_return");

class category_service {

    constructor (tables) {
        this.category_register = tables.category_register;
    }

    async getAll() {
        debug.log("Category -> getAll()");
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.category_register.getAll();
                const api_return = apiReturn.success(null, "Categorias encontradas com sucesso!", result);

                resolve(api_return);
            }
            catch (error) {
                debug.logError("Error on Category -> getAll()");
                debug.logError(`ERROR: ${error}`);
                reject(apiReturn.errorInternal());
            }
        })

    }

    async save(obj) {
        debug.log("Category -> save()");
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.category_register.save(obj);
                const api_return = apiReturn.success(null, "Successfully saved!", result);
                resolve(api_return);
            }
            catch (error) {
                debug.logError("Error on Category -> save()");
                debug.logError(`ERROR: ${error}`);

                reject(apiReturn.errorBadRequest(`Error on save! ${error.sqlMessage}`));
            }
        })
    }

}

module.exports = category_service;