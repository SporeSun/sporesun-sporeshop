const productData = [
  {
    _id: 1,
    name: "Psilocybe Natalensis",
    image: 'https://i.imgur.com/PILVuRL_d.webp?maxwidth=760&fidelity=grand',
    description: "A rare and potent variety of Psilocybe mushroom, known for its distinctive properties.",
    brand: "Exotic Spores",
    category: "Exotic Psilocybe Spores",
    price: 15.00,
    discount: 10,
    rating: 4.6,
    numReviews: 18,
    countInStock: 20
  },
  {
    _id: 2,
    name: "Psilocybe Caerulipes",
    image: 'https://i.imgur.com/2VaQUSS_d.webp?maxwidth=760&fidelity=grand',
    description: "A unique species of Psilocybe mushroom, valued for its blue-stemmed appearance.",
    brand: "Exotic Spores",
    category: "Exotic Psilocybe Spores",
    price: 20.00,
    discount: 8,
    rating: 4.4,
    numReviews: 15,
    countInStock: 15
  },
  {
    _id: 3,
    name: "Psilocybe Subaeruginosa",
    image: 'https://i.imgur.com/tXpKMMz_d.webp?maxwidth=760&fidelity=grand',
    description: "Known for its robust growth and potent effects, a favorite among mycologists.",
    brand: "Exotic Spores",
    category: "Exotic Psilocybe Spores",
    price: 20.00,
    discount: 12,
    rating: 4.7,
    numReviews: 20,
    countInStock: 10
  },
  {
    _id: 4,
    name: "APE x Natalensis",
    image: 'https://i.imgur.com/e1xTT8A_d.webp?maxwidth=760&fidelity=grand',
    description: "A hybrid variety combining the best traits of APE and Natalensis mushrooms.",
    brand: "Exotic Spores",
    category: "Exotic Psilocybe Spores",
    price: 15.00,
    discount: 5,
    rating: 4.5,
    numReviews: 25,
    countInStock: 8
  },
  
  {
    _id: 5,
    name: "Brown Beech Mushrooms",
    image: 'https://i.imgur.com/Izp4vM2_d.webp?maxwidth=760&fidelity=grand',
    description: "Delicious and nutritious, these mushrooms are a favorite in gourmet cooking.",
    brand: "Gourmet Cultures",
    category: "Gourmet and Medicinal Cultures",
    price: 20.00,
    discount: 7,
    rating: 4.8,
    numReviews: 30,
    countInStock: 50
  },
  {
    _id: 6,
    name: "Lion's Mane",
    image: 'https://i.imgur.com/WXBElSJ_d.webp?maxwidth=760&fidelity=grand',
    description: "Renowned for its cognitive and neurological health benefits, a must for health enthusiasts.",
    brand: "Gourmet Cultures",
    category: "Gourmet and Medicinal Cultures",
    price: 20.00,
    discount: 6,
    rating: 4.9,
    numReviews: 45,
    countInStock: 30
  },
  {
    _id: 7,
    name: "Antler Reishi",
    image: 'https://i.imgur.com/g3UJKhF_d.webp?maxwidth=760&fidelity=grand',
    description: "A unique medicinal mushroom, prized for its therapeutic properties.",
    brand: "Gourmet Cultures",
    category: "Gourmet and Medicinal Cultures",
    price: 20.00,
    discount: 10,
    rating: 4.6,
    numReviews: 40,
    countInStock: 20
  },
  {
    _id: 8,
    name: "King Oyster Mushroom",
    image: 'https://i.imgur.com/TZjZVTw_d.webp?maxwidth=760&fidelity=grand',
    description: "A popular choice for culinary use, known for its meaty texture and rich flavor.",
    brand: "Gourmet Cultures",
    category: "Gourmet and Medicinal Cultures",
    price: 20.00,
    discount: 8,
    rating: 4.7,
    numReviews: 35,
    countInStock: 40
  },
  
  {
    _id: 9,
    name: "Sweet Basil",
    image: 'https://i.imgur.com/phK66nM.jpg',
    description: "An essential herb for any garden, known for its aromatic leaves and culinary versatility.",
    brand: "Green Essence",
    category: "Live Plants",
    price: 10.00,
    discount: 3,
    rating: 4.9,
    numReviews: 50,
    countInStock: 60
  },
  {
    _id: 10,
    name: "Curry Tree",
    image: 'https://i.imgur.com/m7jscmZ.jpg',
    description: "A tropical to sub-tropical tree, its leaves are used in many dishes for added flavor.",
    brand: "Green Essence",
    category: "Live Plants",
    price: 30.00,
    discount: 4,
    rating: 4.8,
    numReviews: 25,
    countInStock: 35
  },
  {
    _id: 11,
    name: "Trichocereus Terscheckii",
    image: 'https://i.imgur.com/PXqtcfv.jpg',
    description: "A towering cactus species, known for its impressive size and ornamental value.",
    brand: "Green Essence",
    category: "Live Plants",
    price: 30.00,
    discount: 5,
    rating: 4.7,
    numReviews: 15,
    countInStock: 20
  },
  
  {
    _id: 12,
    name: "Prepared Malt-Yeast Agar",
    image: 'https://i.imgur.com/nJShOaS.jpg',
    description: "Ideal for mushroom cultivation, this agar is a staple in any mycology lab. Sleeve of 10 plates",
    brand: "Lab Pro",
    category: "Lab Supplies",
    price: 21.99,
    discount: 2,
    rating: 4.5,
    numReviews: 18,
    countInStock: 50
  },
  {
    _id: 13,
    name: "Avery's Albino",
    image: 'https://i.imgur.com/oEC8pLk_d.webp?maxwidth=760&fidelity=grand',
    description: "A visually striking variety, Avery's Albino is known for its pure white appearance.",
    brand: "Spore Masters",
    category: "Psilocybe Cubensis Spores",
    price: 15.00,
    discount: 11,
    rating: 4.3,
    numReviews: 30,
    countInStock: 25
  },
  {
    _id: 14,
    name: "Choda MelMak",
    image: 'https://i.imgur.com/yirURMn_d.webp?maxwidth=760&fidelity=grand',
    description: "A unique and potent variety, Choda MelMak is a favorite among cultivators.",
    brand: "Spore Masters",
    category: "Psilocybe Cubensis Spores",
    price: 15.00,
    discount: 9,
    rating: 4.4,
    numReviews: 20,
    countInStock: 18
  },
  {
    _id: 15,
    name: "Golden Teacher",
    image: 'https://i.imgur.com/CjRBXoX_d.webp?maxwidth=1520&fidelity=grand',
    description: "Famed for its insightful experiences, Golden Teacher is a top choice for enthusiasts.",
    brand: "Spore Masters",
    category: "Psilocybe Cubensis Spores",
    price: 15.00,
    discount: 7,
    rating: 4.8,
    numReviews: 40,
    countInStock: 30
  },
  {
    _id: 16,
    name: "Hydra",
    image: 'https://i.imgur.com/NcZMM4T_d.webp?maxwidth=1520&fidelity=grand',
    description: "A robust and resilient variety, Hydra is known for its vigorous growth.",
    brand: "Spore Masters",
    category: "Psilocybe Cubensis Spores",
    price: 20.00,
    discount: 6,
    rating: 4.6,
    numReviews: 22,
    countInStock: 20
  },

  {
    _id: 17,
    name: "Lophophora Williamsii",
    image: 'https://i.imgur.com/yLnWwsR.jpg',
    description: "Rare cactus seeds, known for their unique properties and historical significance. Pack of 10 seeds",
    brand: "Desert Gems",
    category: "Seeds",
    price: 20.00,
    discount: 4,
    rating: 4.3,
    numReviews: 15,
    countInStock: 25
  }
  
    
];

module.exports = {productData}