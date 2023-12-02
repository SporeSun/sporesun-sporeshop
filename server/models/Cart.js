const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('./User');
const prePurchaseSchema = require('./PrePurchase');

const cartSchema = new Schema(
  {
    owner: {
      type: User,
    },
    contents:{
      type: [prePurchaseSchema],
    }
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

module.exports = cartSchema;
