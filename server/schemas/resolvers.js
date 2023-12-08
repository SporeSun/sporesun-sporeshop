const jwt = require('jsonwebtoken');
const { User, Cart, Category, PrePurchase, Product, Transaction } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51OKV4YJe2B9hxOfHeBIHPZTBUjFbikeWoEjl0DEbaoB6DMnf1BVEz7aRwNhPu7p7lEZXBiLBnj3UNppWOl5XNTds00057aGp5N');

const resolvers = {
  Query: {
    
    getUsers: async () => {
      return User.find({});
    },
    getUser: async (parent, { id }) => {
      const params = id ? { id } : {};
      return User.findOne(params);
    },
    getCategories: async () => {
      return Category.find({});
    },
    getCategory: async (parent, { id }) => {
      return Category.findOne({_id: id});
    },
    
    getTransactions: async () => {
      return Transaction.find({});
    },
    getTransaction: async (parent, { id }) => {
      const params = id ? { id } : {};
      return Transaction.findOne(params);
    },
    
    getProducts: async () => {
      return Product.find({});
    },
    getProduct: async (parent, { id }) => {
      const params = id ? { id } : {};
      return Product.findOne(params);
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      await Order.create({ products: args.products.map(({ _id }) => _id) });
      // eslint-disable-next-line camelcase
      const line_items = [];

      // eslint-disable-next-line no-restricted-syntax
      for (const product of args.products) {
        line_items.push({
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
              description: product.description,
              images: [`${url}/images/${product.image}`]
            },
            unit_amount: product.price * 100,
          },
          quantity: product.purchaseQuantity,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
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
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addCategory: async(parent, {displayName})=>{
      return await Category.create({displayName});
    },
    removeCategory: async(parent, {id})=>{
      return await Category.findOneAndDelete({
        _id: id
      });
    },
    addToCategory: async(parent, {category, product})=>{
      return await Category.findOneAndUpdate(
        {_id: category},
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
    updateProduct: async(parent, {id, data}) => {
      return await Product.findOneAndUpdate(
        {_id: id},
        data,
      {new: true}
      )
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
