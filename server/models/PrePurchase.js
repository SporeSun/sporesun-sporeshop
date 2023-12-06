const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Item = require('./Item');
const productSchema = require('./Product');

const prePurchaseSchema = new Schema(
  {
    product: {
      type: productSchema,
      required: true,
    },
    
    amount: {
      type: Int,
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

module.exports = prePurchaseSchema;
