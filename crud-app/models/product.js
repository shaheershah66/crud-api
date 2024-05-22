const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title value is required"],
    unique: true
  },
  description: String,
  price: {
    type: Number,
    required: [true, "Price value is required"],
    min: [1, "Wrong price value"]
},
  discountPercentage: {
    type: Number,
    min: [0, "Wrong min discount"],
    max: [50, "Wrong max discount"]
  },
  rating: {
    type: Number,
    default: 0,
    min: [0, "Wrong min rating"],
    max: [5, "Wrong max rating"]
},
  stock: {
    type: Number,
    required: [true, "Stock value is required"],
    min: [0, "Wrong stock value"]
},
  brand: {
    type: String,
    required: [true, "Brand value is required"],
},
  category: {
   type: String,
   required: [true, "Category value is required"],
  },
  images: [String]
});

const Product = mongoose.model("Product", productSchema);

module.exports = { Product }