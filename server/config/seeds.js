const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Psilocybe Cubensis Spores' },
    { name: 'Exotic Psilocybe Spores' },
    { name: 'Gourmet and Medicinal Cultures' },
    { name: 'Live Plants' },
    { name: 'Seeds' },
    { name: 'Lab Supplies' }
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: "Averys Albino",
      description:
        "A visually striking variety, Avery's Albino is known for its pure white appearance.",
      image: 'https://i.imgur.com/oEC8pLk_d.webp?maxwidth=760&fidelity=grand',
      category: categories[0]._id,
      price: 15.00,
      stock: 50
    },
    {
      name: 'Choda Melmak',
      description:
        "A unique and potent variety, Choda MelMak is a favorite among cultivators.",
      image: 'https://i.imgur.com/yirURMn_d.webp?maxwidth=760&fidelity=grand',
      category: categories[0]._id,
      price: 15.00,
      stock: 20
    },
    {
      name: 'Golden Teacher',
      category: categories[0]._id,
      description:
        "Famed for its insightful experiences, Golden Teacher is a top choice for enthusiasts.",
      image: 'https://i.imgur.com/CjRBXoX_d.webp?maxwidth=1520&fidelity=grand',
      price: 15.00,
      stock: 20
    },
    {
      name: 'Hydra',
      category: categories[0]._id,
      description:
        "A robust and resilient variety, Hydra is known for its vigorous growth.",
      image: 'https://i.imgur.com/NcZMM4T_d.webp?maxwidth=1520&fidelity=grand',
      price: 20.00,
      stock: 10
    },
    {
      name: 'Psilocybe Natalensis',
      category: categories[1]._id,
      description:
        'A rare and potent variety of Psilocybe mushroom, known for its distinctive properties.',
      image: 'https://i.imgur.com/PILVuRL_d.webp?maxwidth=760&fidelity=grand',
      price: 15.00,
      stock: 100
    },
    {
      name: "Psilocybe Caerulipes",
      category: categories[1]._id,
      description:
        "A unique species of Psilocybe mushroom, valued for its blue-stemmed appearance.",
      image: 'https://i.imgur.com/2VaQUSS_d.webp?maxwidth=760&fidelity=grand',
      price: 20.00,
      stock: 30
    },
    {
      name: "Psilocybe Subaeruginosa",
      category: categories[1]._id,
      description:
        "Known for its robust growth and potent effects, a favorite among mycologists.",
      image: 'https://i.imgur.com/tXpKMMz_d.webp?maxwidth=760&fidelity=grand',
      price: 20.00,
      stock: 30
    },
    {
      name: "APE x Natalensis",
      category: categories[1]._id,
      description:
        "A hybrid variety combining the best traits of APE and Natalensis mushrooms.",
      image: 'https://i.imgur.com/e1xTT8A_d.webp?maxwidth=760&fidelity=grand',
      price: 15.00,
      stock: 100
    },
    {
      name: "Brown Beech Mushrooms",
      category: categories[2]._id,
      description: "Delicious and nutritious, these mushrooms are a favorite in gourmet cooking.",
      image: 'https://i.imgur.com/Izp4vM2_d.webp?maxwidth=760&fidelity=grand',
      price: 20.00,
      stock: 1000
    },
    {
      name: "Lion's Mane",
      category: categories[2]._id,
      description:
        "Renowned for its cognitive and neurological health benefits, a must for health enthusiasts.",
      image: 'https://i.imgur.com/WXBElSJ_d.webp?maxwidth=760&fidelity=grand',
      price: 20.00,
      stock: 1000
    },
    {
      name: 'Antler Reishi',
      category: categories[2]._id,
      description:
        "A unique medicinal mushroom, prized for its therapeutic properties.",
      image: 'https://i.imgur.com/g3UJKhF_d.webp?maxwidth=760&fidelity=grand',
      price: 20.00,
      stock: 100
    },
    {
      name: 'King Oyster Mushroom',
      category: categories[2]._id,
      description:
        "A popular choice for culinary use, known for its meaty texture and rich flavor.",
      image: 'https://i.imgur.com/TZjZVTw_d.webp?maxwidth=760&fidelity=grand',
      price: 20.00,
      stock: 600
    },
    {
      name: 'Sweet Basil',
      category: categories[3]._id,
      description:
        "An essential herb for any garden, known for its aromatic leaves and culinary versatility.",
      image: 'https://i.imgur.com/phK66nM.jpg',
      price: 10.00,
      stock: 600
    },
    {
      name: 'Curry Tree',
      category: categories[3]._id,
      description:
        "A tropical to sub-tropical tree, its leaves are used in many dishes for added flavor.",
      image: 'https://i.imgur.com/m7jscmZ.jpg',
      price: 30.00,
      stock: 600
    },
    {
      name: 'Trichocereus Terscheckii',
      category: categories[3]._id,
      description:
        "A towering cactus species, known for its impressive size and ornamental value.",
      image: 'https://i.imgur.com/PXqtcfv.jpg',
      price: 30.00,
      stock: 600
    },
    {
      name: 'Lopophora Williamsii',
      category: categories[4]._id,
      description:
        "Rare cactus seeds, known for their unique properties and historical significance. Pack of 10 seeds",
      image: 'https://i.imgur.com/m7jscmZ.jpg',
      price: 30.00,
      stock: 600
    },
    {
      name: 'Prepared Malt-Yeast Agar',
      category: categories[5]._id,
      description:
        "Ideal for mushroom cultivation, this agar is a staple in any mycology lab. Sleeve of 10 plates",
      image: 'https://i.imgur.com/m7jscmZ.jpg',
      price: 30.00,
      stock: 600
    },
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
