const typeDefs = `
  type Category {
    _id: ID
    displayName: String!
    products: String

  }

  type Product {
    
  }

  type Cart {

  }

  type Tag {

  }

  type User {
    
  }

  type Transaction {

  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {

  }

  type Mutation {

  }
`;

module.exports = typeDefs;
