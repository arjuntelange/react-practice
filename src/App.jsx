import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <div>
        <ProductCard emoji="💻" product="Laptop" price="64,000" />
        <ProductCard emoji="📱" product="Smartphone" price="24,000" />
        <ProductCard emoji="📷" product="Camera" price="30,000" />
      </div>
    </>
  );
}

export default App;
