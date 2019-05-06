const product = require('../controllers/category/products');
const express = require('express');

const routers = new express.Router();

routers.route('/products').get(product.getProduct);
routers.route('/products').post(product.addProduct);
routers.route('/products').put(product.updateProduct);
routers.route('/products').delete(product.deleteProduct);

module.exports.router_porduct = routers;