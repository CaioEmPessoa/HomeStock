
const debug = require('../utilities/debug');
const publishPages = require('./public_pages');

function init(app, ROOT, tables) {

  debug.log("Publishing pages ...");
  // Adding public pages into app, with their paths.
  publishPages(app, ROOT);

  debug.log("Publishing APIs ...");
  // adding API controllers

  // 404 page
  app.use((req, res) => {
    res.status(404).send('<h1> Erro 404. </h1>');
  });

}

module.exports = init;
