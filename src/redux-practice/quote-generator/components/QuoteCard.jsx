import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../features/quote/quoteSlice";

function QuoteCard() {
  const { quote, loading, error } = useSelector((state) => state.quote);

  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-2xl bg-indigo-50 p-8 rounded-3xl shadow-lg border border-indigo-100 flex flex-col gap-6 items-center">
      <h2 className="text-4xl font-bold text-indigo-700">✨ Quote Generator</h2>

      <button
        onClick={() => dispatch(fetchQuote())}
        className="
          px-6 py-3
          bg-indigo-500
          hover:bg-indigo-600
          text-white
          font-semibold
          rounded-xl
          cursor-pointer
          transition-all
          duration-200
          hover:scale-105
        "
      >
        New Quote
      </button>

      {loading && (
        <p className="text-indigo-500 font-medium">Loading quote...</p>
      )}

      {error && <p className="text-red-500 font-medium">{error}</p>}

      {!quote && !loading && (
        <p className="text-slate-500 text-center">
          Click "New Quote" to get inspired ✨
        </p>
      )}

      {quote && !loading && (
        <div className="w-full bg-white p-8 rounded-2xl border border-indigo-100 shadow-sm">
          <p className="text-2xl italic text-slate-700 leading-relaxed">
            "{quote.quote}"
          </p>

          <p className="mt-6 text-right text-indigo-600 font-semibold">
            — {quote.author}
          </p>
        </div>
      )}
    </div>
  );
}

export default QuoteCard;
