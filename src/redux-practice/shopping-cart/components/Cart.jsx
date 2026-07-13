import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cartItems.cart);

  const dispatch = useDispatch();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart-section">
      <h2>🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>

              <div className="quantity-controls">
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => dispatch(increaseQuantity(item.id))}>
                  +
                </button>
              </div>

              <div className="item-total">₹{item.price * item.quantity}</div>

              <button
                className="remove-btn"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          ))}

          <hr />

          <div className="cart-summary">
            <h3>Total Items: {totalItems}</h3>
            <h3>Total Price: ₹{totalPrice}</h3>

            <button className="clear-btn" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
