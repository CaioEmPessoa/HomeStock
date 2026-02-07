
class requestsBase {
    constructor (requestPath) {
        const api_path = "localhost:2469"
        this.url = `http://${api_path}${requestPath}/`
    }

    sendNotf(message, error) {
        const notificationElmnt = document.querySelector(".notification");
        notificationElmnt.innerHTML = `<p class="notification-message">${error ? "Error:" : ""} ${message}</p>`;
        notificationElmnt.style.animation = "show-notification 0.5s forwards";
        notificationElmnt.style.background = error ? "red" : "lime";

        setTimeout(() => {
            notificationElmnt.style.animation = "hide-notification 0.7s";
        }, 2500)
    }

    async get(path) {
        const response = await fetch(`${this.url}${path}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        let decodedResponse = await response.json()
        if (decodedResponse.statusCode !== 200) {
            this.sendNotf(decodedResponse.message, true);
        }
        return decodedResponse;
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

        let decodedResponse = await response.json()
        if (decodedResponse.statusCode !== 200) {
            this.sendNotf(decodedResponse.message, true);
        }
        return decodedResponse;

    }
}

export default requestsBase;