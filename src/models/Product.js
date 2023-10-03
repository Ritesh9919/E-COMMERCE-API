const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    imageUrl:{
        type:String
    },
    category:{
        type:String
    },
    price:{
        type:Number
    },
    size:{
        type:Number
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports =  Product;