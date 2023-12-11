const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const productSchema = require('./Product');
const { v4: uuidv4 } = require("uuid")

const categorySchema = new Schema(
  {
    _id: {
      type: String,
      default: uuidv4
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description:{
      type: String
    },
    image:{
      type: String,
    },
    // set savedBooks to be an array of data that adheres to the bookSchema
    products: [Schema.Types.ObjectId],
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
