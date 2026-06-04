import React from "react";

function ProductCard({emoji, product, price }) {
  function buyNow() {
    alert(`Buying ${product}`);
  }

  return (
    <div className="product-container">
      <h1>{emoji}</h1>
      <h2>{product}</h2>
      <p>Price: ₹{price}</p>
      <button onClick={buyNow}>Buy Now</button>
    </div>
  );
}

export default ProductCard;
