const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const db = require('./src/db/mongoose');
const productRouter = require('./src/features/product/product_routes');

const app = express();

// parsing post data
app.use(bodyParser.json());

app.use('/api/products', productRouter);

app.get('/', (req, res) => {
    res.send('Welcome to ecommerce api');
})


app.listen(port, ()=> {
    console.log(`Server is running on port:${port}`);
})