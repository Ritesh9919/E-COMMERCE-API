const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 8000;

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to ecommerce api');
})


app.listen(port, ()=> {
    console.log(`Server is running on port:${port}`);
})