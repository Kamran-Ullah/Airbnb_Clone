const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js")
const Listing = require('../models/listing.js');

const {validateReview, isLoggedIn, isReviewAuther} = require("../middleware.js")

const reviewControllers = require("../controllers/reviews.js")


// Review routes
// Review routes would go here
router.post("/",validateReview,
  isLoggedIn,
   wrapAsync(reviewControllers.createReview));
 
// Delete review route
router.delete("/:reviewId",
  isLoggedIn,
  isReviewAuther,
   wrapAsync(reviewControllers.destroyReview));


module.exports = router;