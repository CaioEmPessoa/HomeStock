
const publishPages = require('./public_pages');

function init(app, ROOT) {

  // Adding public pages into app, with their paths.
  publishPages(app, ROOT);

  // adding API controllers

  // 404 page
  app.use((req, res) => {
    res.status(404).send('<h1> Erro 404. </h1>');
  });

}

module.exports = init;
