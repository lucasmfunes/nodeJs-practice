const express = require ('express');
const app = express();

const productRoutes = require('./api/routes/products');
const clientsRoutes = require('./api/routes/clients')

app.use('/products', productRoutes);

app.use('/clients', clientsRoutes);

module.exports = app;