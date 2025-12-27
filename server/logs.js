
const debug = (msg) => {
    const now = new Date();
    const hour = now.toLocaleTimeString('pt-BR', {
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    console.log(`LOG ${hour} - ${msg}`);
}

module.exports = {
    debug
}