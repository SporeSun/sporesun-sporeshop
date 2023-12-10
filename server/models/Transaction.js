const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./User');
const prePurchaseSchema = require('./PrePurchase');

const transactionSchema = new Schema(
  {
    _id: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    buyer: {
      type: Schema.Types.ObjectId,
      ref:"User",
    },
    items: [prePurchaseSchema],
    cost: {
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

const Transaction = model('Transaction', transactionSchema);

module.exports = Transaction;
