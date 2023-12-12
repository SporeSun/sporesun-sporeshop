const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require("uuid")

const productSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuidv4
    },
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
    qty: {
      type: Number
    }
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
