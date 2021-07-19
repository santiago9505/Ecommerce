import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="Product-item">
      <img src={product.image} alt={product.title} />
      <div className="Product-item-info">
        <h2 className="Product-price">
          {product.title}
          <span className="Product-price">${product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button
        className="Product-button"
        type="button"
        onClick={handleAddToCart(product)}
      >
        Agregar
      </button>
    </div>
  );
};

export default Product;
