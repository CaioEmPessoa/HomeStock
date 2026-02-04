
import requestBase from "/src/scripts/requests/requestsBase.js";

class inventoriesRequest extends requestBase {
    constructor() {
        const requestPath = "/api/inventory";

        super(requestPath)
    }

    getAll() {
        return new Promise((resolve, reject) => {
            this.get("list").then((response) => {
                let body = response.json();
                resolve(body);
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
                let body = response.json();
                resolve(body);
            });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            this.post(`${id}/delete`).then((response) => {
                let body = response.json();
                resolve(body);
            });
        });
    }

    addOneStock(id) {
        return new Promise((resolve, reject) => {
            this.post(`${id}/addStock`).then((response) => {
                let body = response.json();
                resolve(body);
            });
        });
    }

    removeOneStock(id) {
        return new Promise((resolve, reject) => {
            this.post(`${id}/removeStock`).then((response) => {
                let body = response.json();
                resolve(body);
            });
        });
    }
}

export default inventoriesRequest;