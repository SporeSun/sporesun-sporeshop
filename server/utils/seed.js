const connection = require('../config/connection');
const { Product, Category } = require('../models');
// Import functions for seed data
const { categories, products, users } = require('../data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  for (let index = 0; index < categories.length; index++) {
    const cat = categories[index];
    const c = await Category.create(cat);
    console.log(`Seeded new category: ${c}`);
  }
  for (let index = 0; index < products.length; index++) {
    const prod = products[index];
    const p = await Product.create(cat);

    console.log(`Seeded new product: ${p}`);
    const c = await Category.collection.findOne({name: p.category})
        if(c){
            c.products.push(p._id);
            console.log(`Pushed product ${o._id} to category ${c.name || 'N/A'}`)
        }
  }


  console.timeEnd('seeding');
  process.exit(0);
});
