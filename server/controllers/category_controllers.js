const Joi = require('joi');
const controllers_base = require("./controllers_base");

const categoryService = require('../services/category_service');

class categoryController extends controllers_base {
  constructor(app, tables) {
    super(app, tables, categoryService);
  }

  initRequests() {

    this.app.get("/api/category/list", async (req, res) => {
      const result = await this.service.getAll();

      res.json(result);
    });

    this.app.get("/api/category/new", async (req, res) => {
      const schema = Joi.object().required();

      if ( this.validateJoi(schema, res, req) ) return;

      try {
        const result = await this.service.save(req.body);
        res.json(result);
      } catch (error) {
        res.status(500).json(error);
      }

    });

  }

}

module.exports = categoryController;