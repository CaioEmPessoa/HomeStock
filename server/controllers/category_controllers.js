
const categoryService = require('../services/category_service');

function categoryControllers(app, tables) {

  const category_service = new categoryService(tables);

  app.get("/api/category/list", async (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const result = await category_service.getAll();

    res.end(JSON.stringify(result));
  });

}

module.exports = categoryControllers;