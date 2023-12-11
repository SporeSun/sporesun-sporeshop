const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Psilocybe Cubensis Spores', image: 'https://i.imgur.com/oEC8pLk_d.webp?maxwidth=760&fidelity=grand', description: "Discover the popular Psilocybe Cubensis Spores collection, boasting strains like Avery's Albino and Golden Teacher. Ideal for those seeking to explore the fascinating world of Psilocybe mushrooms. For microscopy purposes only." },
    { name: 'Exotic Psilocybe Spores', image: 'https://i.imgur.com/PILVuRL_d.webp?maxwidth=760&fidelity=grand', description: "Explore our unique collection of Exotic Psilocybe Spores, featuring rare and potent varieties like Psilocybe Natalensis, Psilocybe Caerulipes, and more. Perfect for mycologists and enthusiasts seeking distinctive psychedelic experiences. For microscopy purposes only." },
    { name: 'Gourmet and Medicinal Cultures', image: 'https://i.imgur.com/g3UJKhF_d.webp?maxwidth=760&fidelity=grand', description: "Dive into the world of culinary delights with our Gourmet and Medicinal Cultures. From Brown Beech Mushrooms to Lion's Mane, these varieties offer both exquisite flavors and health benefits." },
    { name: 'Live Plants', image: 'https://i.imgur.com/PXqtcfv.jpg', description: "Our Live Plants category offers a selection of vibrant and healthy plants like Sweet Basil, Curry Tree, and more. Perfect for adding a touch of greenery to your space or garden." },
    { name: 'Seeds', image: 'https://i.imgur.com/yLnWwsR.jpg', description: "Our Seeds category offers a diverse selection of plant seeds, including the rare Lophophora Williamsii. Perfect for enthusiasts and gardeners looking to cultivate unique plants." },
    { name: 'Lab Supplies', image: 'https://i.imgur.com/nJShOaS.jpg', description: "Equipped for success! Our Lab Supplies range, featuring high-quality items like Prepared Malt-Yeast Agar, caters to both professional and amateur mycologists' laboratory needs." }
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: "Averys Albino",
      description:
        "A visually striking variety, Avery's Albino is known for its pure white appearance. Pack of 2 swabs. For microscopy purposes only.",
      image: 'https://i.imgur.com/oEC8pLk_d.webp?maxwidth=760&fidelity=grand',
      category: categories[0].name,
      price: 15.00,
      stock: 50
    },
    {
      name: 'Choda Melmak',
      description:
        "A unique and potent variety, Choda MelMak is a favorite among cultivators.Pack of 2 swabs. For microscopy purposes only.",
      image: 'https://i.imgur.com/yirURMn_d.webp?maxwidth=760&fidelity=grand',
      category: categories[0].name,
      price: 15.00,
      stock: 20
    },
    {
      name: 'Golden Teacher',
      category: categories[0].name,
      description:
        "Famed for its insightful experiences, Golden Teacher is a top choice for enthusiasts. One spore print included. For microscopy purposes only.",
      image: 'https://i.imgur.com/CjRBXoX_d.webp?maxwidth=1520&fidelity=grand',
      price: 15.00,
      stock: 20
    },
    {
      name: 'Hydra',
      category: categories[0].name,
      description:
        "A robust and resilient variety, Hydra is known for its vigorous growth. For microscopy purposes only",
      image: 'https://i.imgur.com/NcZMM4T_d.webp?maxwidth=1520&fidelity=grand',
      price: 20.00,
      stock: 10
    },
    {
      name: 'Psilocybe Natalensis',
      category: categories[1].name,
      description:
        'A rare and potent variety of Psilocybe mushroom, known for its distinctive properties. Pack of 2 swabs. For microscopy purposes only.',
      image: 'https://i.imgur.com/PILVuRL_d.webp?maxwidth=760&fidelity=grand',
      price: 15.00,
      stock: 100
    },
    {
      name: "Psilocybe Caerulipes",
      category: categories[1].name,
      description:
        "A unique species of Psilocybe mushroom, valued for its blue-stemmed appearance. One spore print included. For microscopy purposes only",
      image: 'https://i.imgur.com/2VaQUSS_d.webp?maxwidth=760&fidelity=grand',
      price: 20.00,
      stock: 30
    },
    {
      name: "Psilocybe Subaeruginosa",
      category: categories[1].name,
      description:
        "Known for its robust growth and potent effects, a favorite among mycologists. One spore print included. For microscopy purposes only",
      image: 'https://i.imgur.com/tXpKMMz_d.webp?maxwidth=760&fidelity=grand',
      price: 20.00,
      stock: 30
    },
    {
      name: "APE x Natalensis",
      category: categories[1].name,
      description:
        "A hybrid variety combining the best traits of APE and Natalensis mushrooms. Pack of 2 swabs. For microscopy purposes only.",
      image: 'https://i.imgur.com/e1xTT8A_d.webp?maxwidth=760&fidelity=grand',
      price: 15.00,
      stock: 100
    },
    {
      name: "Brown Beech Mushrooms",
      category: categories[2].name,
      description: "Delicious and nutritious, these mushrooms are a favorite in gourmet cooking. One syringe of live liquid culture included",
      image: 'https://i.imgur.com/Izp4vM2_d.webp?maxwidth=760&fidelity=grand',
      price: 20.00,
      stock: 1000
    },
    {
      name: "Lion's Mane",
      category: categories[2].name,
      description:
        "Renowned for its cognitive and neurological health benefits, a must for health enthusiasts. One syringe of live liquid culture included",
      image: 'https://i.imgur.com/WXBElSJ_d.webp?maxwidth=760&fidelity=grand',
      price: 20.00,
      stock: 1000
    },
    {
      name: 'Antler Reishi',
      category: categories[2].name,
      description:
        "A unique medicinal mushroom, prized for its therapeutic properties. One syringe of live liquid culture included",
      image: 'https://i.imgur.com/g3UJKhF_d.webp?maxwidth=760&fidelity=grand',
      price: 20.00,
      stock: 100
    },
    {
      name: 'King Oyster Mushroom',
      category: categories[2].name,
      description:
        "A popular choice for culinary use, known for its meaty texture and rich flavor. One syringe of live liquid culture included",
      image: 'https://i.imgur.com/TZjZVTw_d.webp?maxwidth=760&fidelity=grand',
      price: 20.00,
      stock: 600
    },
    {
      name: 'Sweet Basil',
      category: categories[3].name,
      description:
        "An essential herb for any garden, known for its aromatic leaves and culinary versatility. One rooted cutting included",
      image: 'https://i.imgur.com/phK66nM.jpg',
      price: 10.00,
      stock: 600
    },
    {
      name: 'Curry Tree',
      category: categories[3].name,
      description:
        "A tropical to sub-tropical tree, its leaves are used in many dishes for added flavor. One rooted cutting included",
      image: 'https://i.imgur.com/m7jscmZ.jpg',
      price: 30.00,
      stock: 600
    },
    {
      name: 'Trichocereus Terscheckii',
      category: categories[3].name,
      description:
        "A towering cactus species, known for its impressive size and ornamental value. One calloused cutting ready for planting included",
      image: 'https://i.imgur.com/PXqtcfv.jpg',
      price: 30.00,
      stock: 600
    },
    {
      name: 'Lopophora Williamsii',
      category: categories[4].name,
      description:
        "Rare cactus seeds, known for their unique properties and historical significance. Pack of 10 seeds",
      image: 'https://i.imgur.com/m7jscmZ.jpg',
      price: 30.00,
      stock: 600
    },
    {
      name: 'Prepared Malt-Yeast Agar',
      category: categories[5].name,
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
