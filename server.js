const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8000;
const db = require('./src/db/mongoose');
const productRouter = require('./src/features/product/product_routes');
const userRouter = require('./src/features/user/user_routes');
const ratingRouter = require('./src/features/rating/rating_routes');
const jwtAuth = require('./src/middleware/auth_middleware');
const loggerMiddleware = require('./src/middleware/logger_middleware');

const app = express();

// CORS POLICY Confrigration
// app.use((req, res,next) => {
//     res.header('Access-Control-Allow-Orgin', '*');
//     res.header('Access-Control-Allow-Headers', '*');
//     res.header('Access-Control-Allow-Methods', '*');
//     // return ok for preflight request
//     if(req.method == 'OPTIONS') {
//         res.sendStatus(200);
//     }

// })

app.use(cors());

// parsing post data
app.use(bodyParser.json());
app.use(loggerMiddleware);

app.use('/api/products', jwtAuth, productRouter);
app.use('/api/users', userRouter);
app.use('/api/products/rating', ratingRouter);

app.get('/', (req, res) => {
    res.send('Welcome to ecommerce api');
})

app.use((req, res)=> {
    res.status(404).send('<h1>API NOT FOUND</h1>');
})


app.listen(port, ()=> {
    console.log(`Server is running on port:${port}`);
})