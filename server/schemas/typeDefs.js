const typeDefs = `
  type Category {
    _id: ID
    displayName: String!
    products: [Product]

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
    getUser(id: String!): User
    getUsers: [User]
    getItem(id: String!): Item
    getItems: [Item]
    getCategory(id: String!): Category
    getCategories: [Category]
    getTransaction(id: String!): Transaction
    getTransactions: [Transaction]
    getProduct(id: String!): Product
    getProducts: [Product]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    makeAdmin(userId: String!): User
    addItem(name: String!): Item
    updateItem(): Item
    removeItem(itemId: String!): Item
    addCategory(name: String!): Category
    updateCategory(): Category
    addToCategory(category: Category!, product: Product!): Category
    removeCategory(catId: String!): Category
    addTransaction(buyer: User!, seller: User!, cart: Cart!): Transaction
    addProduct(item: Item!, stock: Int, price: Float): Product
    updateProduct(): Product
    removeProduct(productId: String!): Item
    createPrePurchase(): PrePurchase
  }
`;

module.exports = typeDefs;
