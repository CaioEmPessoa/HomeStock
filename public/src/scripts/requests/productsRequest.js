
import requestBase from "/src/scripts/requests/requestsBase.js";

class productsRequest extends requestBase {
    constructor() {
        const requestPath = "/api/product";

        super(requestPath)
    }

    getAll() {
        return new Promise((resolve, reject) => {
            this.get("list").then((response) => {
                resolve(response)
            });
        });
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            this.get(`${id}/`).then((response) => {
                resolve(response);
            });
        });
    }

    new(obj) {
        return new Promise((resolve, reject) => {
            this.post("new", obj).then((response) => {
                resolve(response)
            });
        });
    }

    update(id, obj) {
        return new Promise((resolve, reject) => {
            this.post(`${id}/update`, obj).then((response) => {
                resolve(response);
            });
        });
    }
}

export default productsRequest;