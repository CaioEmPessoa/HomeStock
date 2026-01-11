const debug = require("./debug");

class ApiReturn {
    constructor(statusCode, message, body) {
        this.statusCode = statusCode;
        this.message = message;
        this.body = body;

        if (message) {
            debug.log("> ApiReturn: " + message);
        }
    }

    static generic(statusCode, message, body) {
        return new ApiReturn(statusCode, message, body);
    }

    static success(statusCode, message, body) {
        const status_code = statusCode == null ? 200 : statusCode;

        return new ApiReturn(status_code, message, body);
    }

    static error(statusCode, message) {
        return new ApiReturn(statusCode, message);
    }

    static errorBadRequest(message) {
        return new ApiReturn(400, message);
    }

    static errorNotFound() {
        return new ApiReturn(404, "Not Found");
    }

    static errorNotFound(message) {
        return new ApiReturn(200, message);
    }

    static errorForbidden() {
        return new ApiReturn(403, "You don't have the necessary privileges to access this API.");
    }

    static errorForbidden(message) {
        return new ApiReturn(403, message);
    }

    static errorInternal() {
        return new ApiReturn(500, "An unmapped internal error occurred.");
    }

    // ENDPOINT -SPECIFIC RETURNS
    static errorLoginNotFound() {
        return new ApiReturn(404, "No user found for the provided email and password combination.");
    }

    static errorInvalidCode() {
        return new ApiReturn(404, "The verification code provided is invalid.");
    }
}

module.exports = ApiReturn;