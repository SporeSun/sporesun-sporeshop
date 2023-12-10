const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    
    description: {
      type: String,
    },
    
    image: {
      type: String,
    },
    
    price: {
      type: Number,
      required: true,
    },
    
    stock: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
    },
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);
const Product = model('Product', productSchema);

module.exports = Product;
