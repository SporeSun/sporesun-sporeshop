const jwt = require('jsonwebtoken');
const { User, Cart, Category, Item, PrePurchase, Product, Transaction } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    
    getUsers: async () => {
      return User.find({});
    },
    getUser: async (parent, { id }) => {
      const params = id ? { id } : {};
      return User.find(params);
    },
    getCategories: async () => {
      return Category.find({});
    },
    getCategory: async (parent, { id }) => {
      const params = id ? { id } : {};
      return Category.find(params);
    },
    
    getTransactions: async () => {
      return Transaction.find({});
    },
    getTransaction: async (parent, { id }) => {
      const params = id ? { id } : {};
      return Transaction.find(params);
    },
    
    getProducts: async () => {
      return Product.find({});
    },
    getProduct: async (parent, { id }) => {
      const params = id ? { id } : {};
      return Product.find(params);
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addCategory: async(parent, {name})=>{
      return await Category.create({name});
    },
    removeCategory: async(parent, {id})=>{
      return await Category.findOneAndDelete({
        _id: id
      });
    },
    addToCategory: async(parent, {categoryId, product})=>{
      return await Category.findOneAndUpdate(
        {_id: categoryId},
        {$addToSet: {products: product}},
        {new: true}
        );
    },
    removeFromCategory: async(parent, {categoryId, productId})=>{
      return await Category.findOneAndUpdate(
        {_id: categoryId},
        {$pull: {products: productId}},
        {new: true}
        );
    },
    addProduct: async(parent, {name, description, image, stock, price})=>{
      return await Product.create({name, description, image, stock, price});
    },
    removeProduct: async(parent, {id})=>{
      return await Product.findOneAndDelete({
        _id: id
      });
    },
    createPrePurchase: async(parent, {productId, amount}) =>{
      return await PrePurchase.create({productId, amount})
    }
  },
};

module.exports = resolvers;
