import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
