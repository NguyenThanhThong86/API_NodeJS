process.env.NODE_ENV !== 'test'
let express = require('express');
let app = express();
let morgan = require('morgan');
let bodyParser = require('body-parser');
let port = process.env.PORT || 8001;
let product = require('../controllers/category/products');

 //if(process.env.NODE_ENV !== 'test') {
    app.use(morgan('combined')); 
 //}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.route("/v1/products")
    .get(product.getProduct)
    .post(product.addProduct)
    .put(product.updateProduct)
    .delete(product.deleteProduct);

app.listen(port);
console.log("Listening on port " + port);

module.exports = app;
