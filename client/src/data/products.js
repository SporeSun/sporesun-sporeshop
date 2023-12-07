const productData = [
  {
    _id: 1,
    name: "Airpods Wireless Bluetooth Headphones",
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category:"Category 1",
    price: 89.99,
    discount:5,
    rating: 4.5,
    numReviews: 12,
    countInStock:10
    

  },
  {
      _id: 2,
      name: "Airpods Wireless Bluetooth Headphones",
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      description:
        "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
      brand: "Apple",
      category:"Category 2",
      price: 89.99,
      discount:5,
      rating: 4.5,
      numReviews: 12,
      countInStock:10
      

    },
    {
      _id: 3,
      name: "iPhone 11 Pro 256GB Memory",
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      description:
        "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
      brand: "Apple",
      category:"Category 3",
      price: 599.99,
      discount:5,
      rating: 4.5,
      numReviews: 12,
      countInStock:3

    },
    {
      _id: 4,
      name: "Cannon EOS 80D DSLR Camera",
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      description:
        "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
      brand: "Cannon",
      category:"Category 4",
      price: 929.99,
      discount:5,
      rating: 4.5,
      numReviews: 12,
      countInStock:8

    },
    {
      _id: 5,
      name: "Sony Playstation 4 Pro White Version",
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      description:
        "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
      brand: "Sony",
      category:"Category 2",
      price: 399.99,
      discount:5,
      rating: 4.5,
      numReviews: 12,
      countInStock:1


    },
    {
      _id: 6,
      name: "Logitech G-Series Gaming Mouse",
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      description:
        "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
      brand: "Logitech",
      category:"Category 3",
      price: 49.99,
      discount:5,
      rating: 4.5,
      numReviews: 12,
      countInStock:1

    },
    {
      _id: 7,
      name: "Amazon Echo Dot 3rd Generation",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      description:
        "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
      brand: "Amazon",
      category:"Category 2",
      price: 29.99,
      discount:5,
      rating: 4.5,
      numReviews: 12,
      countInStock:13

    },
    ,
    {
      _id: 8,
      name: "Cannon EOS 80D DSLR Camera",
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      description:
        "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
      brand: "Cannon",
      category:"Category 2",
      price: 929.99,
      discount:5,
      rating: 4.5,
      numReviews: 12,
      countInStock:8

    },
    {
      _id: 9,
      name: "Sony Playstation 4 Pro White Version",
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      description:
        "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
      brand: "Sony",
      category:"Category 3",
      price: 399.99,
      discount:5,
      rating: 4.5,
      numReviews: 12,
      countInStock:1
    },
    
];

  export default productData;