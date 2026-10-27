import React from 'react';


export default function ProductCard({ title, price, category, image, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col w-64">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">{title}</h2>
        <p className="text-sm text-gray-500 mb-1">{category}</p>
        <p className="text-xl font-bold text-purple-600 mb-3">${price}</p>
        <button
          onClick={onAddToCart}
          className="mt-auto bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );

}

