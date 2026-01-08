
const { join } = require('path')

class Debug {

    /**
     * Debug logging. Prints only when running on debug mode.
     * @param {msg} msg - The message to print
     * @param {'ERROR'|'MSG'|'RAW'} type - Message type. Defaults to 'MSG'
     */
    log (msg, type) {
        const now = new Date();
        const hour = now.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        switch (type) {
            case "ERROR":
                console.log(`*ERROR* ${hour} - ${msg}`);
                break
            case "RAW":
                console.log(msg);
                break

            default:
                console.log(`LOG ${hour} - ${msg}`);
        }

    }

    logMsg(msg) {
        this.log(msg, "MSG")
    }

    logError(msg) {
        this.log(msg, "ERROR")
    }

    logRaw(msg) {
        this.log(msg, "RAW")
    }

    /**
     * Returns project root path.
     */
    getRoot() {
        return join(__dirname, "../..");
    }
}



module.exports = new Debug;