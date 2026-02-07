
import requestBase from "/src/scripts/requests/requestsBase.js";

class productsRequest extends requestBase {
    constructor() {
        const requestPath = "/api/product";

        super(requestPath)
    }

    getAll() {
        return new Promise((resolve, reject) => {
            this.get("list").then((response) => {
                let body = response.json()
                resolve(body)
            });
        });
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            this.get(`${id}/`).then((response) => {
                let body = response.json();
                resolve(body);
            });
        });
    }

    new(obj) {
        return new Promise((resolve, reject) => {
            this.post("new", obj).then((response) => {
                let body = response.json()
                resolve(body)
            });
        });
    }

    update(id, obj) {
        return new Promise((resolve, reject) => {
            this.post(`${id}/update`, obj).then((response) => {
                let body = response.json();
                resolve(body);
            });
        });
    }
}

export default productsRequest;