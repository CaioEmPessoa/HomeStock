const Joi = require('joi');
const controllers_base = require("./controllers_base");

const categoryService = require('../services/category_service');

class categoryController extends controllers_base {
  constructor(app, tables) {
    const apiUrl = "/api/category";
    super(app, tables, categoryService, apiUrl);
  }

  initRequests() {

    this.app.get(`${this.apiUrl}/list`, async (req, res) => {
      const result = await this.service.getAll();

      res.json(result);
    });

    this.app.post(`${this.apiUrl}/new`, async (req, res) => {
      const schema = Joi.object().required();

      if ( this.validateJoi(schema, res, req) ) return;

      try {
        const result = await this.service.save(req.body);
        res.json(result);
      } catch (error) {
        res.status(500).json(error);
      }

    });

    this.app.get(`${this.apiUrl}/:id`, async (req, res) => {
      try {
        const result = await this.service.getById(req.params.id);
        res.json(result);
      } catch (error) {
        res.status(500).json(error);
      }

    });

    this.app.post(`${this.apiUrl}/:id/update`, async (req, res) => {
      const schema = Joi.object().required();

      if ( this.validateJoi(schema, res, req) ) return;

      try {
        const result = await this.service.update(req.body, req.params.id);
        res.json(result);
      } catch (error) {
        res.status(500).json(error);
      }

    });

    this.app.post(`${this.apiUrl}/:id/delete`, async (req, res) => {
      try {
        const result = await this.service.delete(req.params.id);
        res.json(result);
      } catch (error) {
        res.status(500).json(error);
      }

    });

  }

}

module.exports = categoryController;