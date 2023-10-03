const Product = require('../../../src/models/Product');

const getAllProducts = async(req, res) => {
  const products = await Product.find({});
  res.status(200).send(products);

}


const addProduct = async(req, res) => {
   
}

module.exports = {
    getAllProducts,
    addProduct
}