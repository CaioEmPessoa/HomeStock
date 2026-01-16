
import requestBase from "./requestsBase.js";

class ProductsRequest extends requestBase {
    constructor() {
        this.requestPath = "/api/product"
        super(this.requestPath)
    }

    getAll() {
        return new Promise((resolve, reject) => {
            resolve(this.get("list"));
        });
    }
}

export default ProductsRequest;