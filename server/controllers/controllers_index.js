const express = require('express');

const debug = require('../utilities/debug');
const publishPages = require('./public_pages');

const categoryController = require('./category_controllers');
const rolesController = require('./roles_controller');
const productController = require('./product_controllers');
const inventoryController = require('./inventory_controllers');

function init(app, tables) {

  debug.log("Publishing pages ...");
  // Adding public pages into app, with their paths.
  publishPages(app);

  debug.log("Publishing APIs ...");
  // adding API controllers
  app.use(express.json());
  const category_controllers = new categoryController(app, tables);
  category_controllers.initRequests();

  const roles_controller = new rolesController(app, tables);
  roles_controller.initRequests();

  const product_controller = new productController(app, tables);
  product_controller.initRequests();

  const inventory_controller = new inventoryController(app, tables);
  inventory_controller.initRequests();

  // 404 page
  app.use((req, res) => {
    res.status(404).send('<h1> Erro 404. </h1>');
  });

}

module.exports = init;
