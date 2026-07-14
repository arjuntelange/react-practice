import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import ProductList from "./redux-practice/shopping-cart/components/ProductList";
import Cart from "./redux-practice/shopping-cart/components/Cart";

function App() {
  return (
    <>
      <div className="w-full h-screen flex bg-orange-100 justify-center items-center gap-8">
        <div className="shopping-container">
          <ProductList />
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;
