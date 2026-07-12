import { Routes, Route } from "react-router-dom";
import "./App.css";
import Counter from "./redux-practice/counter-app/components/Counter";

function App() {
  return (
    <>
      <div className="main-container">
        <Counter />
      </div>
    </>
  );
}

export default App;
