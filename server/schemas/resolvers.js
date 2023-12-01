const jwt = require('jsonwebtoken');
const { Book, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    
  },

  Mutation: {
    
  },
};

module.exports = resolvers;
