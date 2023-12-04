const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Item = require('./Item');

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
      type: Float,
      required: true,
    },
    
    stock: {
      type: int,
      required: true,
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

module.exports = productSchema;
