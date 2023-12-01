const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const cartSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

module.exports = cartSchema;
