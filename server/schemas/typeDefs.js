const typeDefs = `
  type Category {
    _id: ID
    name: String!
    image: String
    description: String
    products: [Product]
  }
  input CategoryInput {
    name: String!
    products: [ProductInput]
  }

  type PrePurchase {
    product: Product
    cost: Float
    amount: Int
  }
  input PrePurchaseInput {
    product: ProductInput
    cost: Float
    amount: Int
  }

  type Product {
    _id: ID
    price: Float!
    stock: Int!
    brand: String
    name: String!
    discount: Float
    description: String
    image: String
    category: String
  }
  input ProductInput {
    _id: ID
    price: Float
    stock: Int
    name: String
    discount: Float
    countInStock: Int
    category: String
    numReviews: Int
    brand: String
    rating: Float
    description: String
    image: String
    qty: Int
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
    items: [PrePurchaseInput]!
    cost: Float!
    status: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Checkout {
    session: ID
  }

  type Query {
    getUser(id: String!): User
    getUsers: [User]
    getCategory(id: ID!): Category
    getCategoryByName(name: String!): Category
    getCategories: [Category]
    getTransaction(id: String!): Transaction
    getTransactions: [Transaction]
    getProduct(id: String!): Product
    getProducts: [Product]
    checkout(products: [ProductInput]!): Checkout
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addCategory(name: String!): Category
    updateCategory: Category
    addToCategory(category: ID!, product: ID!): Category
    removeCategory(catId: String!): Category
    removeFromCategory(categoryID: String!, productId: String!): Category
    addTransaction(buyer: UserInput, cart: [PrePurchaseInput]!): Transaction
    addProduct(name: String, stock: Int, price: Float, description: String, image: String): Product
    updateProduct(data: ProductInput): Product
    removeProduct(productId: String!): Product
    createPrePurchase(product: ProductInput!, amount: Int!): PrePurchase
  }
`;

module.exports = typeDefs;
