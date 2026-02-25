import React from "react";
import { ShoppingBagIcon } from "../icons/Icons";

function ProductCard({ product, onClick }) {

  // format price Indian style
  const formattedPrice =
    Number(product.price).toLocaleString("en-IN");

  return (
    <div
      className="product-card"
      onClick={() => onClick(product)}
    >
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />
        <div className="product-overlay">
          <button className="product-quick-view">
            <ShoppingBagIcon size={20} color="white" />
            Quick View
          </button>
        </div>
      </div>

      <div className="product-body">

        <p className="product-category">
          {product.category}
        </p>

        <h3 className="product-name">
          {product.name}
        </h3>

        {/* ✅ Rupee Symbol - Premium Price Display */}
        <p className="product-price">
          ₹ {formattedPrice}
        </p>

        <button
          className="product-btn"
          onClick={(e) => {
            e.stopPropagation();
            onClick(product);
          }}
        >
          View Details
        </button>

      </div>
    </div>
  );
}

export default ProductCard;