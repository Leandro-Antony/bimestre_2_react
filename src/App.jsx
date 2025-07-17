import { ProductList } from "./components/ProductList";
import { useState } from "react";
import Header from "./components/Header";

export default function App() {

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  return (
    <>
    <Header cart={cart} />
    <ProductList  addToCart={addToCart}/>
    </>
  );
}
