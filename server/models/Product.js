const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const productSchema = new Schema(
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
const Product = model('Product', productSchema);

module.exports = productSchema;
