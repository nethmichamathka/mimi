import React, { useState } from "react";
import { useParams } from "react-router-dom";
import foundation from "../images/Face/foundation.webp";
import concealer from "../images/Face/concealer.webp";
import blush from "../images/Face/blush.webp";
import facePrimer from "../images/Face/faceprimer.webp";
import highlighter from "../images/Face/highlighter.webp";
import settingPowder from "../images/Face/settingpowder.webp";

const SingleProductPage = () => {
  const { productName } = useParams();
  const [likes, setLikes] = useState(0);
  const [cart, setCart] = useState(0);

  const products = {
    Foundation: {
      name: "Foundation",
      price: "$30.00",
      img: foundation,
      description: "Achieve a flawless complexion with our lightweight foundation.",
      rating: 4.5,
      reviews: [
        { name: "Alice", comment: "This foundation is amazing!", rating: 5 },
        { name: "Sophia", comment: "Blends perfectly with my skin tone.", rating: 4 },
      ],
    },
    Concealer: {
      name: "Concealer",
      price: "$25.00",
      img: concealer,
      description: "Hide blemishes and dark circles with our creamy concealer.",
      rating: 4.3,
      reviews: [
        { name: "Emily", comment: "Great coverage and long-lasting!", rating: 4 },
        { name: "Chloe", comment: "Perfect for everyday use.", rating: 5 },
      ],
    },
    Blush: {
      name: "Blush",
      price: "$20.00",
      img: blush,
      description: "Add a touch of natural color to your cheeks with our blush.",
      rating: 4.6,
      reviews: [
        { name: "Lily", comment: "The perfect shade for my skin!", rating: 5 },
        { name: "Mia", comment: "Soft and subtle, love it!", rating: 4 },
      ],
    },
    "Face Primer": {
      name: "Face Primer",
      price: "$18.00",
      img: facePrimer,
      description: "Prep your skin with our hydrating face primer.",
      rating: 4.4,
      reviews: [
        { name: "Olivia", comment: "Keeps my makeup flawless all day.", rating: 4 },
        { name: "Grace", comment: "My skin feels so smooth after applying.", rating: 5 },
      ],
    },
    Highlighter: {
      name: "Highlighter",
      price: "$22.00",
      img: highlighter,
      description: "Illuminate your best features with our shimmering highlighter.",
      rating: 4.8,
      reviews: [
        { name: "Ella", comment: "Gives the perfect glow!", rating: 5 },
        { name: "Ava", comment: "Easy to apply and lasts long.", rating: 4 },
      ],
    },
    "Setting Powder": {
      name: "Setting Powder",
      price: "$15.00",
      img: settingPowder,
      description: "Set your makeup and control shine with our setting powder.",
      rating: 4.2,
      reviews: [
        { name: "Zoe", comment: "Great for oily skin!", rating: 4 },
        { name: "Amelia", comment: "A must-have in my routine.", rating: 5 },
      ],
    },
  };

  const product = products[productName];

  if (!product) return <div className="text-center p-10">Product not found.</div>;

  return (
    <div className="bg-lightBeige text-deepTaupe min-h-screen p-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-[400px] object-contain bg-white rounded-lg shadow-md"
        />
        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-xl mt-4">{product.price}</p>
          <p className="mt-4 text-mutedMauve">{product.description}</p>
          <p className="text-yellow-500 mt-4">Rating: {product.rating} ⭐</p>
          <div className="mt-6 flex space-x-4">
            <button
              onClick={() => setLikes(likes + 1)}
              className="flex items-center space-x-2 px-4 py-2 bg-softPink text-lightBeige rounded hover:bg-mediumTaupe transition"
            >
              ❤️ <span>{likes}</span>
            </button>
            <button
              onClick={() => setCart(cart + 1)}
              className="flex items-center space-x-2 px-4 py-2 bg-deepTaupe text-lightBeige rounded hover:bg-mutedMauve transition"
            >
              🛒 <span>{cart}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-10 max-w-[1200px] mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
        {product.reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="text-xl font-semibold">{review.name}</h3>
            <p className="text-yellow-500">Rating: {review.rating} ⭐</p>
            <p className="mt-2 text-mutedMauve">{review.comment}</p>
          </div>
        ))}
        {product.reviews.length === 0 && <p>No reviews yet. Be the first to review this product!</p>}
      </div>
    </div>
  );
};

export default SingleProductPage;
