const express = require('express');
const morgan = require('morgan')
const { join } = require('path')

const { debug } = require('./utilities/logs');
const controllers_index = require('./controllers/controllers_index');

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

controllers_index(
  app, ROOT
);


app.listen(PORT, () => {
  
  debug("Start finished!");
  debug(`RUNNING AT: http://localhost:${PORT}`);
  debug("ROOT PATH : " + ROOT);

});