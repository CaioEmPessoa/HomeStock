
class Debug {
    // msg = message to be logged in
    // raw = is message printed formatted or raw. Defaults to False
    log (msg, raw) {
        const now = new Date();
        const hour = now.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        raw = raw ? true : false; // Valor padrão para raws

        console.log( raw ? msg : `LOG ${hour} - ${msg}`);
    }
}



module.exports = new Debug;