const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  rating: { type: Number, min: 1, max: 5 },
  comment: String
}, { timestamps: true });

const review = mongoose.model("Review", reviewSchema);
module.exports = review;