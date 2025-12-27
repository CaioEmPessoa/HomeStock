const express = require('express');
const path = require('path')

const { debug } = require('./logs')

const PORT = 2469;
const ROOT = path.join(__dirname, "..");

debug("ROOT PATH : " + ROOT);

const app = express();
app.listen(PORT);

debug(`RUNNING AT: http://localhost:${PORT}`)

app.get('/', (req, res) => {
  res.sendFile('/public/index.html', { root: ROOT });
});

// 404 page
app.use((req, res) => {
  res.status(404).send('<h1> Erro 404. </h1>', { root: ROOT });
});

/*
  ANOTACOES: (REMOVER DEPOIS)
    res.redirect -> redireciona par outra pagina
    app.use -> redireciona qq url

    Funcoes tem um 'return' no final. No caso o "use" do final
    só roda caso nao encontre nenhuma rota seja executada anteriormente.

*/