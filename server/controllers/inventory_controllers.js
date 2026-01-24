const Joi = require('joi');
const controllers_base = require("./controllers_base");

const inventoryService = require('../services/inventory_service');

class inventoryController extends controllers_base {
  constructor(app, tables) {
    const apiUrl = "/api/inventory";
    super(app, tables, inventoryService, apiUrl);
  }

  initRequests() {

    this.app.get(`${this.apiUrl}/list`, async (req, res) => {
      const result = await this.service.getAll();

      res.json(result);
    });

    this.app.get(`${this.apiUrl}/new`, async (req, res) => {
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

    this.app.get(`${this.apiUrl}/:id/update`, async (req, res) => {
      const schema = Joi.object().required();

      if ( this.validateJoi(schema, res, req) ) return;

      try {
        const result = await this.service.update(req.body, req.params.id);
        res.json(result);
      } catch (error) {
        res.status(500).json(error);
      }

    });

    this.app.get(`${this.apiUrl}/:id/delete`, async (req, res) => {
      try {
        const result = await this.service.delete(req.params.id);
        res.json(result);
      } catch (error) {
        res.status(500).json(error);
      }

    });

    this.app.get(`${this.apiUrl}/:id/addStock`, async (req, res) => {
      try {
        const result = await this.service.addOneStock(req.params.id);
        res.json(result);
      } catch (error) {
        res.status(500).json(error);
      }

    });

    this.app.get(`${this.apiUrl}/:id/removeStock`, async (req, res) => {
      try {
        const result = await this.service.removeOneStock(req.params.id);
        res.json(result);
      } catch (error) {
        res.status(500).json(error);
      }

    });

  }

}

module.exports = inventoryController;