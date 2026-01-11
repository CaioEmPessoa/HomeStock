const debug = require("../utilities/debug");
const apiReturn = require("../utilities/api_return");

class category_service {

    constructor (tables) {
        this.category_register = tables.category_register;
    }

    async getById(id) {
        debug.log("Category -> getById()");
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.category_register.getById(id);

                if (result == false) {
                    const api_return = apiReturn.success(null, "No category found!");
                    return resolve(api_return);
                }

                const api_return = apiReturn.success(null, "Category found successfully!", result);
                resolve(api_return);
            }
            catch (error) {
                debug.logError("Error on Category -> getById()");
                debug.logError(`ERROR: ${error}`);
                reject(apiReturn.errorInternal());
            }
        })

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

    async update(obj, id) {
        debug.log("Category -> update()");
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.category_register.update(obj, id);
                const api_return = apiReturn.success(null, "Successfully saved!", result);
                resolve(api_return);
            }
            catch (error) {
                debug.logError("Error on Category -> update()");
                debug.logError(`ERROR: ${error}`);

                reject(apiReturn.errorBadRequest(`Error on update! ${error.sqlMessage}`));
            }
        })
    }

    async delete(id) {
        debug.log("Category -> delete()");
        return new Promise(async (resolve, reject) => {
            try {
                const search = await this.category_register.getById(id);
                if (search == false) {
                    const api_return = apiReturn.success(null, "No category found!");
                    return resolve(api_return);
                }

                const result = await this.category_register.delete(id);

                const api_return = apiReturn.success(null, "Successfully deleted!");
                resolve(api_return);
            }
            catch (error) {
                debug.logError("Error on Category -> delete()");
                debug.logError(`ERROR: ${error}`);

                reject(apiReturn.errorBadRequest(`Error on delete! ${error.sqlMessage}`));
            }
        })
    }

}

module.exports = category_service;