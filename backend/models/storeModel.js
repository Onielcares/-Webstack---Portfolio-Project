const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  link: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Store',
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Store = mongoose.model('Store', StoreSchema);
module.exports = Store;
