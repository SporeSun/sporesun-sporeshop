const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./User');
const cartSchema = require('./Cart');

const transactionSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    buyer: {
      type: String,
      required: true,
    },
    items: {
      type: cartSchema,
      required: true,
    },
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
