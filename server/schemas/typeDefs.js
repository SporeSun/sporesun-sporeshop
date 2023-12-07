const typeDefs = `
  type Category {
    _id: ID
    displayName: String!
    products: [Product]
  }
  input CategoryInput {
    displayName: String!
    products: [Product]
  }

  type PrePurchase {
    product: Product
    cost: Float
    amount: Int
  }
  input PrePurchaseInput {
    product: Product
    cost: Float
    amount: Int
  }

  type Product {
    _id: ID
    price: Float!
    stock: Int!
    name: String!
    description: String
    image: String
  }
  input ProductInput {
    price: Float!
    stock: Int!
    name: String!
    description: String
    image: String
  }

  
  type Tag {
    _id: ID
    tag: String!
  }
  input TagInput {
    tag: String!
  }

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    isAdmin: Boolean
  }
  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    isAdmin: Boolean
  }

  type Transaction {
    _id: ID!
    date: String!
    buyer: ID!
    items: [PrePurchase]!
    cost: Float!
    status: String!
  }
  input TransactionInput {
    date: String!
    buyer: ID!
    items: [PrePurchase]!
    cost: Float!
    status: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getUser(id: String!): User
    getUsers: [User]
    getCategory(id: String!): Category
    getCategories: [Category]
    getTransaction(id: String!): Transaction
    getTransactions: [Transaction]
    getProduct(id: String!): Product
    getProducts: [Product]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addCategory(name: String!): Category
    updateCategory: Category
    addToCategory(category: Category!, product: Product!): Category
    removeCategory(catId: String!): Category
    removeFromCategory(categoryID: String!, productId: String!): Category
    addTransaction(buyer: User, cart: [PrePurchase]!): Transaction
    addProduct(name: String, stock: Int, price: Float, description: String, image: String): Product
    updateProduct: Product
    removeProduct(productId: String!): Product
    createPrePurchase(productId: Product!, amount: Int!): PrePurchase
  }
`;

module.exports = typeDefs;
