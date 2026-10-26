import React from 'react';

export default function ProductCard({ title, price, category, image, onAddCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-category">{category}</p>
      <p className="product-price">${price}</p>
      <button onClick={onAddCart} className="add-to-cart-button">
        Add to Cart
      </button>
    </div>
  );
}