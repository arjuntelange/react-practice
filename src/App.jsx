import { Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./routing/search-params/Products";

function App() {
  return (
    <>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Products/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
