
class Debug {

    /**
     * Debug logging. Prints only when running on debug mode.
     * @param {msg} msg - The message to print
     * @param {'ERROR'|'MSG'} type - Message type. Defaults to 'MSG'
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

            default:
                console.log(`LOG ${hour} - ${msg}`);
        }

    }
}



module.exports = new Debug;