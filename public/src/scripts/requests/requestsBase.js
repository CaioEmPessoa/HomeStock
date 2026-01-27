
class requestsBase {
    constructor (requestPath) {
        const api_path = "localhost:2469"
        this.url = `http://${api_path}${requestPath}/`
    }

    async get(path) {
        const response = await fetch(`${this.url}${path}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response;
    }

    async post(path, body) {
        const reqBody = JSON.stringify(body, (k, v) => v == "" ? null : v);
        const url = `${this.url}${path}`;

        const response = await fetch(url, {
            method: "POST",
            body: reqBody,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response;
    }
}

export default requestsBase;