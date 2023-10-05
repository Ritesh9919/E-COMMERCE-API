const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    imageUrl:{
        type:String
    },
    
    price:{
        type:Number
    },
    size:{
        type:String
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports =  Product;