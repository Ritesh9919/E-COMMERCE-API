const Product = require('../../../src/models/Product');

const getAllProducts = async(req, res) => {
  const products = await Product.find({});
  res.status(200).send(products);

}


const addProduct = async(req, res) => {
    
    const {name, price, size} = req.body;
    await Product.create({
        name,
        price,
        size,
        imageUrl:req.file.filename
    });

    res.status(201).send("Product added");
}

module.exports = {
    getAllProducts,
    addProduct
}