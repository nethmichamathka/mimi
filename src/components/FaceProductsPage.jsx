import React from "react";
import foundation from "../images/Face/foundation.webp";
import concealer from "../images/Face/concealer.webp";
import blush from "../images/Face/blush.webp";
import facePrimer from "../images/Face/faceprimer.webp";
import highlighter from "../images/Face/highlighter.webp";
import settingPowder from "../images/Face/settingpowder.webp";

const FaceProductsPage = () => {
  const products = [
    {
      name: "Foundation",
      price: "$30.00",
      img: foundation,
    },
    {
      name: "Concealer",
      price: "$25.00",
      img: concealer,
    },
    {
      name: "Blush",
      price: "$20.00",
      img: blush,
    },
    {
      name: "Face Primer",
      price: "$18.00",
      img: facePrimer,
    },
    {
      name: "Highlighter",
      price: "$22.00",
      img: highlighter,
    },
    {
      name: "Setting Powder",
      price: "$15.00",
      img: settingPowder,
    },
  ];

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaceProductsPage;
