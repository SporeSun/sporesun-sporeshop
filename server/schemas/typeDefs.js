const typeDefs = `
  type Category {
    _id: ID
    displayName: String!
    products: [Product]

  }

  type PrePurchase {
    product: Product
    cost: Float
    amount: Int
  }

  type Product {
    _id: ID
    parent: Item!
    price: Float!
    stock: Int!
    name: String!
    description: String
    image: String
  }

  type Cart {
    _id: ID
    owner: User
    contents: [PrePurchase]
  }

  
  type Tag {
    _id: ID
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
  type Transaction {
    _id: ID!
    date: String!
    store: Store!
    buyer: User!
    items: Cart!
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
    updateCategory(): Category
    addToCategory(category: Category!, product: Product!): Category
    removeCategory(catId: String!): Category
    addTransaction(buyer: User!, seller: User!, cart: Cart!): Transaction
    addProduct(item: Item!, stock: Int, price: Float): Product
    updateProduct(): Product
    removeProduct(productId: String!): Item
    createPrePurchase(productId: Product!, amount: Int!): PrePurchase
  }
`;

module.exports = typeDefs;
