const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const productSchema = require('./Product');

const categorySchema = new Schema(
  {
    displayName: {
      type: String,
      required: true,
      unique: true,
    },
    // set savedBooks to be an array of data that adheres to the bookSchema
    products: [productSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Category = model('Category', categorySchema);

module.exports = Category;
