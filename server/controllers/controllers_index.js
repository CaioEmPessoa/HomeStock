
const debug = require('../utilities/debug');
const publishPages = require('./public_pages');

function init(app, ROOT, tables) {

  debug.log("Publishing pages ...");
  // Adding public pages into app, with their paths.
  publishPages(app, ROOT);

  debug.log("Publishing APIs ...");
  // adding API controllers

  let test = [
    {
      columnName: "category_name",
      columnValue: "Categoria legal!"
    },
    {
      columnName: "category_image",
      columnValue: "https://image.com"
    }
  ]

  tables.category_register.save(test).then((a) => {
    console.log(a)
  })

  // 404 page
  app.use((req, res) => {
    res.status(404).send('<h1> Erro 404. </h1>');
  });

}

module.exports = init;
