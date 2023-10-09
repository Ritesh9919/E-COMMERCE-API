const Rating = require('./rating_model');

const addRatingOnProduct = async(req, res) => {
    console.log(req.body);
    const {rating, productId} = req.body;
    await Rating.create({
        rating,
        user:req.user._id,
        product:productId
    });
    res.json({msg:'rating added'});

}



const getAllRatings = async(req, res) => {
    const ratings = await Rating.find({}).
    populate({
        path:'Product'
    });

    res.json({ratings});

}


module.exports = {
    addRatingOnProduct,
    getAllRatings
}