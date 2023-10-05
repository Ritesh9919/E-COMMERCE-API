const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const db = require('./src/db/mongoose');
const productRouter = require('./src/features/product/product_routes');
const userRouter = require('./src/features/user/user_routes');
const jwtAuth = require('./src/middleware/auth_middleware');

const app = express();

// parsing post data
app.use(bodyParser.json());

app.use('/api/products', jwtAuth, productRouter);
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Welcome to ecommerce api');
})


app.listen(port, ()=> {
    console.log(`Server is running on port:${port}`);
})