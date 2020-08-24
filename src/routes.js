const express = require('express');
const routes = express.Router();

const ProductsController = require('./controllers/ProductController')

// Rotas
routes.get("/products", ProductsController.index);
routes.get("/products/:id", ProductsController.show);
routes.post("/products", ProductsController.store);

module.exports = routes;


