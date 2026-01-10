const debug = require("../utilities/debug");

class category_service {

    constructor (tables) {
        this.category_register = tables.category_register;
    }

    async getAll() {
        debug.log("Category -> getAll()");
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.category_register.getAll();
                resolve(result);
            }
            catch {
                debug.logError("Error on Category -> getAll()");
            }
        })

    }

}

module.exports = category_service;