// base_service.js
const debug = require("../utilities/debug");
const apiReturn = require("../utilities/api_return");

class servicesBase {
    constructor(register, tableName) {
        this.register = register;
        this.tableName = tableName;
    }

    async getById(id) {
        debug.log(`${this.tableName} -> getById()`);
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.register.getById(id);

                if (result == false) {
                    const api_return = apiReturn.success(null, `No ${this.tableName.toLowerCase()} found!`);
                    return resolve(api_return);
                }

                const api_return = apiReturn.success(null, `${this.tableName} found successfully!`, result);
                resolve(api_return);
            }
            catch (error) {
                debug.logError(`Error on ${this.tableName} -> getById()`);
                debug.logError(`ERROR: ${error}`);
                reject(apiReturn.errorInternal());
            }
        });
    }

    async getAll() {
        debug.log(`${this.tableName} -> getAll()`);
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.register.getAll();
                const api_return = apiReturn.success(null, `${this.tableName}s found successfully!`, result);
                resolve(api_return);
            }
            catch (error) {
                debug.logError(`Error on ${this.tableName} -> getAll()`);
                debug.logError(`ERROR: ${error}`);
                reject(apiReturn.errorInternal());
            }
        });
    }

    async save(obj) {
        debug.log(`${this.tableName} -> save()`);
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.register.save(obj);
                const search = await this.register.getById(result.insertId);

                const api_return = apiReturn.success(null, "Successfully saved!", search);
                resolve(api_return);
            }
            catch (error) {
                debug.logError(`Error on ${this.tableName} -> save()`);
                debug.logError(`ERROR: ${error}`);

                reject(apiReturn.errorBadRequest(`Error on save! ${error.sqlMessage}`));
            }
        });
    }

    async update(obj, id) {
        debug.log(`${this.tableName} -> update()`);
        return new Promise(async (resolve, reject) => {
            try {
                const search = await this.register.getById(id);
                if (search == false) {
                    const api_return = apiReturn.success(null, `No ${this.tableName.toLowerCase()} found!`);
                    return resolve(api_return);
                }

                const result = await this.register.update(obj, id);
                const updatedSearch = await this.register.getById(id);

                console.log(id);
                console.log(search);


                const api_return = apiReturn.success(null, "Successfully updated!", updatedSearch);
                resolve(api_return);
            }
            catch (error) {
                debug.logError(`Error on ${this.tableName} -> update()`);
                debug.logError(`ERROR: ${error}`);

                reject(apiReturn.errorBadRequest(`Error on update! ${error.sqlMessage}`));
            }
        });
    }

    async delete(id) {
        debug.log(`${this.tableName} -> delete()`);
        return new Promise(async (resolve, reject) => {
            try {
                const search = await this.register.getById(id);
                if (search == false) {
                    const api_return = apiReturn.success(null, `No ${this.tableName.toLowerCase()} found!`);
                    return resolve(api_return);
                }

                const result = await this.register.delete(id);
                const api_return = apiReturn.success(null, "Successfully deleted!");
                resolve(api_return);
            }
            catch (error) {
                debug.logError(`Error on ${this.tableName} -> delete()`);
                debug.logError(`ERROR: ${error}`);

                reject(apiReturn.errorBadRequest(`Error on delete! ${error.sqlMessage}`));
            }
        });
    }

}

module.exports = servicesBase;