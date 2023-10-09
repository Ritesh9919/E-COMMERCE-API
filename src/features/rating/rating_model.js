const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    rating:{
        type:Number
    },
    user:{
        type:mongoose.Types.ObjectId,
        path:'User'
    },
    product:{
        type:mongoose.Types.ObjectId,
        path:'Product'
    }
});

const Rating = mongoose.model('Rating', ratingSchema);
module.exports = Rating;