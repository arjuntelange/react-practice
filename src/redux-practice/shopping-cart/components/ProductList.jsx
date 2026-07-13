import React from "react";
import "./Cart.css";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

function ProductList() {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Phone",
      price: 20000,
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
    },
  ];

  return (
    <div className="products-section">
      <h2>🛍️ Products</h2>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
            </div>

            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                  }),
                )
              }
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
