import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import UserAuthentication from "./components/UserAuthentication";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <UserAuthentication />
          <ProductList />
          <Cart />
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
