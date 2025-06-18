// src/pages/Home.jsx

import React from "react";

const Home = () => {
  const flowers = [
    {
      name: "Rose",
      price: 100,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
    {
      name: "Tulip",
      price: 120,
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    },
    {
      name: "Lily",
      price: 150,
      image: "https://images.unsplash.com/photo-1598387992379-86f7f97d31d4",
    },
    {
      name: "Sunflower",
      price: 90,
      image: "https://images.unsplash.com/photo-1508747703725-719777637510",
    },
    {
      name: "Orchid",
      price: 180,
      image: "https://images.unsplash.com/photo-1578216516097-f54d9e3f4fcf",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-10">
        Flower Shop
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {flowers.map((flower, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={flower.image}
              alt={flower.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {flower.name}
              </h2>
              <p className="text-gray-600 mt-1">₹{flower.price}</p>
              <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
