const express = require('express');

const router = express.Router();
const ratingController = require('./rating_controller');
const jwtAuth = require('../../middleware/auth_middleware');
router.get('/', jwtAuth, ratingController.getAllRatings);
router.post('/', jwtAuth,ratingController.addRatingOnProduct);


module.exports = router;