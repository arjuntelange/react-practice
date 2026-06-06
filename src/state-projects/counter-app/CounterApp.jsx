import React, { useState } from "react"
import "./CounterApp.css"

function CounterApp() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count-1);
  }

  return (
    <div className="counter-container">
      <h2>{count}</h2>
      <button onClick={increase} className="increase-btn">+</button>
      <button onClick={decrease} className="decrease-btn">-</button>
    </div>
  );
}

export default CounterApp;
