const express = require('express');
const morgan = require('morgan')
const { join } = require('path')

const { debug } = require('./logs')

const PORT = 2469;
const ROOT = join(__dirname, "..");

debug("Starting app...");

const app = express();

// Static files
app.use(
  express.static(join(ROOT, "public"))
)

// Middleware 
app.use(
  morgan('dev')
);

// Pages
app.get('/', (req, res) => {
  res.sendFile('/public/index.html', { root: ROOT });
});

// 404 page
app.use((req, res) => {
  res.status(404).send('<h1> Erro 404. </h1>');
});

app.listen(PORT, () => {
  
  debug("Start finished!");
  debug(`RUNNING AT: http://localhost:${PORT}`);
  debug("ROOT PATH : " + ROOT);

});