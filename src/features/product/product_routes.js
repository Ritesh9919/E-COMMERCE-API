const express = require('express');
const router = express.Router();
const upload = require('../../middleware/fileUpload');

const ProductController = require('./product_controller');

router.get('/', ProductController.getAllProducts);
router.post('/', upload.single('imageUrl'),ProductController.addProduct);

module.exports = router;