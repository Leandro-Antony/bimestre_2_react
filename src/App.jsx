import { ProductList } from "./components/ProductList";
import { useState } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router";

export default function App() {

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  return (
    <>
    <Header cart={cart} />
    <Routes>
      <Route path="/" element={<ProductList addToCart={addToCart} />} />
      <Route path="/Cart" element={<Cart cart={cart} />} />
    </Routes>
    </>
  );
}
