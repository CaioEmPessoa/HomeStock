
import requestBase from "/src/scripts/requests/requestsBase.js";

class inventoriesRequest extends requestBase {
    constructor() {
        const requestPath = "/api/inventory";

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

    addOneStock(id) {
        return new Promise((resolve, reject) => {
            this.get(`${id}/addStock`).then((response) => {
                let body = response.json()
                resolve(body)
            });
        });
    }

    removeOneStock(id) {
        return new Promise((resolve, reject) => {
            this.get(`${id}/removeStock`).then((response) => {
                let body = response.json()
                resolve(body)
            });
        });
    }
}

export default inventoriesRequest;