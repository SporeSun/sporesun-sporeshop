const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Item = require('./Item');

const productSchema = new Schema(
  {
    parent: {
      type: Item,
      required: true,
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
