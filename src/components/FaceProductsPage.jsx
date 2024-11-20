import React, { useState } from "react";
import foundation from "../images/Face/foundation.webp";
import concealer from "../images/Face/concealer.webp";
import blush from "../images/Face/blush.webp";
import facePrimer from "../images/Face/faceprimer.webp";
import highlighter from "../images/Face/highlighter.webp";
import settingPowder from "../images/Face/settingpowder.webp";

const FaceProductsPage = () => {
  const [likes, setLikes] = useState({}); // State for like counts
  const [cart, setCart] = useState({}); // State for add-to-cart counts

  const products = [
    {
      name: "Foundation",
      price: "$30.00",
      img: foundation,
      rating: 4.5,
    },
    {
      name: "Concealer",
      price: "$25.00",
      img: concealer,
      rating: 4.0,
    },
    {
      name: "Blush",
      price: "$20.00",
      img: blush,
      rating: 4.7,
    },
    {
      name: "Face Primer",
      price: "$18.00",
      img: facePrimer,
      rating: 4.2,
    },
    {
      name: "Highlighter",
      price: "$22.00",
      img: highlighter,
      rating: 4.8,
    },
    {
      name: "Setting Powder",
      price: "$15.00",
      img: settingPowder,
      rating: 4.3,
    },
  ];

  // Handle Like Button Click
  const handleLike = (productName) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [productName]: (prevLikes[productName] || 0) + 1,
    }));
  };

  // Handle Add to Cart Button Click
  const handleAddToCart = (productName) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productName]: (prevCart[productName] || 0) + 1,
    }));
  };

  return (
    <div className="bg-lightBeige text-deepTaupe min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Face Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-[200px] object-contain mb-4"
            />
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-mutedMauve mt-2">{product.price}</p>
            <p className="text-yellow-500 mt-2">
              Rating: {product.rating} ⭐
            </p>
            <div className="mt-4 flex justify-between items-center">
              {/* Like Button as Heart Icon */}
              <button
                onClick={() => handleLike(product.name)}
                className="flex items-center space-x-2 text-softPink hover:text-mediumTaupe transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
                <span>{likes[product.name] || 0}</span>
              </button>
              {/* Add to Cart Button as Shopping Cart Icon */}
              <button
                onClick={() => handleAddToCart(product.name)}
                className="flex items-center space-x-2 text-deepTaupe hover:text-mutedMauve transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 4V6H3V8H4L7.68 16.39C7.89 16.82 8.32 17.11 8.8 17.11H19C19.55 17.11 20 16.66 20 16.11V8H6.42L5.72 6H3V4H7M5 19C4.45 19 4 19.45 4 20C4 20.55 4.45 21 5 21C5.55 21 6 20.55 6 20C6 19.45 5.55 19 5 19M17 19C16.45 19 16 19.45 16 20C16 20.55 16.45 21 17 21C17.55 21 18 20.55 18 20C18 19.45 17.55 19 17 19Z" />
                </svg>
                <span>{cart[product.name] || 0}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaceProductsPage;
