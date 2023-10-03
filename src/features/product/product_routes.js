const express = require('express');
const router = express.Router();

const ProductController = require('./product_controller');

router.get('/', ProductController.getAllProducts);
router.post('/', ProductController.addProduct);

module.exports = router;