const Product = require('./product_model');

const getAllProducts = async(req, res) => {
    const {name} = req.query;
    const queryObj = {};
    if(name) {
        queryObj.name = name;
    }
  const products = await Product.find(queryObj);
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

const getOneProduct = async(req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    if(!product) {
        res.status(404).send("Product not found");
    }
    res.status(200).send(product);
}




module.exports = {
    getAllProducts,
    addProduct,
    getOneProduct,
    
}