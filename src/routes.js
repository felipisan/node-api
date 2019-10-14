//Antes tava assim:
// const express = ...
// const routes = express.Router();

const routes = require('express').Router();

const ProductController = require('./controllers/ProductController');

//Graças ao express temos essa facilidade em criar caminhos 
//Criando uma rota (url) products
routes.get('/products', ProductController.index);

//CRUD: find by id
routes.get('/products/:id', ProductController.show);

//Método de update
routes.put("/products/:id", ProductController.update);

routes.delete("products/:id", ProductController.destroy);

routes.post('/products', ProductController.store);
//Isso daqui é para ser chamado lá pelo server.js
module.exports = routes;