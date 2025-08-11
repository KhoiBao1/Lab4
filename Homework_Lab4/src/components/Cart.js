// src/components/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } =
    useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          {item.name} - ${item.price} x {item.quantity}
          <div>
            <button onClick={() => decrementQuantity(item.id)}>-</button>
            <button onClick={() => incrementQuantity(item.id)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={clearCart}>Clear Cart</button>
      <br />
      <Link to="/checkout">Go to Checkout</Link>
    </div>
  );
}

export default Cart;
