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
    getItems: async () => {
      return Item.find({});
    },
    getItem: async (parent, { id }) => {
      const params = id ? { id } : {};
      return Item.find(params);
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
  },
};

module.exports = resolvers;
