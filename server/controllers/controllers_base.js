const apiReturn = require("../utilities/api_return");
const debug = require('../utilities/debug');

class ControllersBase {

    constructor(app, tables, service) {
        this.app = app;
        this.service = new service(tables);
    }

    validateJoi(schema, res, req) {
        const validation = schema.validate(req.body);

        if(validation.error != undefined) {
            const details = validation.error.message;

            const errorReturn = apiReturn.errorBadRequest(details);
            res.status(400).end(JSON.stringify(errorReturn));
            return 1;
        }

        return 0;
    }

    initRequests() {

    }
}

module.exports = ControllersBase;