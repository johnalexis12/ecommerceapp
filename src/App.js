import React from "react";
import ProductList from "./components/ProductList";
import UserAuthentication from "./components/UserAuthentication";
import Cart from "./components/Cart";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <UserAuthentication />
        <ProductList />
        <Cart />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
