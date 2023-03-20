const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    }
  ],
  stores: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Store',
      required: true
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
