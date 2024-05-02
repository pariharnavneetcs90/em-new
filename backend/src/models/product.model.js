// productModel.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountedPrice: {
    type: Number,
  },
  discountPersent: {
    type: Number,
  },
  brand: {
    type: String,
  },
  color: {
    type: String,
  },
  sizes: [{
    name:{type:String},
    quantity:{type:Number}
  }], 
  imageUrl: {
    type: String,
  },
  category: 
  {
    type: String,

  },
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ratings',
    },
  ], 
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'reviews',
    },
  ], 
  numRatings: {
    type: Number,
    default: 0,
  }
},
{
  timestamps: true,
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;
