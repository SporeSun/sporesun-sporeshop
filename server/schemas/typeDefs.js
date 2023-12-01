const typeDefs = `
  type Category {
    _id: ID
    displayName: String!
    products: String

  }

  type PrePurchase {
    item: Item
    product: Product
    amount: Int
  }

  type Product {
    _id: ID
    parent: Item!
    price: Float!
    stock: Int!
  }

  type Item {
    _id: ID
    name: String!
    description: String
    image: String
  }

  type Cart {
    _id: ID
    contents: [PrePurchase]
  }

  type Tag {
    _id: ID
    tag: String!
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    isAdmin: Boolean

  }

  type Store {
    displayName: String
    owner: User
    transactionHistory: [Transaction]
    categories: [Category]
    stock: [Product]
  }

  type Transaction {
    _id: ID!
    date: String!
    store: Store!
    buyer: User!
    seller: User!
    items: Cart!
    cost: Float!
    status: String!
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
