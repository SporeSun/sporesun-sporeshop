const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('./User');
const prePurchaseSchema = require('./PrePurchase');

const cartSchema = new Schema(
  {
    owner: {
      type: String,
    },
    contents:[prePurchaseSchema]
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

cartSchema.virtual('totalCost').get(function () {
  var sum = 0;
  this.contents.map((t) => sum += t.cost);
  return sum;
});

module.exports = cartSchema;
