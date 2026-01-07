const express = require('express');
const morgan = require('morgan')
const { join } = require('path')

const debug = require('./utilities/debug');
const controllers_index = require('./controllers/controllers_index');
const registersIndex = require('./registers/registers_index');

const PORT = process.env.PORT;
const ROOT = join(__dirname, "..");

debug.log("Starting app...");

registersIndex.init();

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

  debug.log(">================================<", "RAW");
  debug.log("Start finished!");
  debug.log(`RUNNING AT: http://localhost:${PORT}`);
  debug.log("ROOT PATH : " + ROOT);

});