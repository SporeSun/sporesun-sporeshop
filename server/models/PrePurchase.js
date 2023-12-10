const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Product = require('./Product');

const prePurchaseSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    
    amount: {
      type: Number,
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
