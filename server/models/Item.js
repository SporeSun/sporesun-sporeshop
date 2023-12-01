const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const itemSchema = new Schema(
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

const Item = model('Item', itemSchema);

module.exports = Item;
