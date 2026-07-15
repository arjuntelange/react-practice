import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import QuoteCard from "./redux-practice/quote-generator/components/QuoteCard";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-100 flex justify-center py-10">
        <QuoteCard />
      </div>
    </>
  );
}

export default App;
