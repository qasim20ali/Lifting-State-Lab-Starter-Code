import { useState } from "react";
import "./App.css";

import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";

import CartSummary from "./components/CartSummary";
import ProductList from "./components/ProductList";

function App() {
  const [count, setCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const handleIncrement = () => setCount((prevCount) => prevCount + 1);
  const handleDecrement = () => setCount((prevCount) => prevCount - 1);
  const handleAddToCart = () => setCartCount((prevCount) => prevCount + 1);

  return (
    <div className="app">
      <h1>Latabat</h1>
      {/* Exercise 1 */}
      <section className="section">
        <h1 className="title">Exercise 1: Lifted Counter State</h1>
        <CounterDisplay count={count} />
        <CounterControls
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </section>

      {/* BONUS: Exercise 2 */}
      <section className="section">
        <h1 className="title">Exercise 2: Shopping Cart</h1>
        <CartSummary cartCount={cartCount} />
        <ProductList onAddToCart={handleAddToCart} />
      </section>
    </div>
  );
}

export default App;
