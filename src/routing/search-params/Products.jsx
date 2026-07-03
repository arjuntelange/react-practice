import React from "react";
import { useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams({
    category: "None",
  });

  return (
    <div>
      <button onClick={() => setSearchParams({ category: "Laptop" })}>
        Laptop
      </button>
      <button onClick={() => setSearchParams({ category: "Mobile" })}>
        Mobile
      </button>
      <button onClick={() => setSearchParams({ category: "Watch" })}>
        Watch
      </button>

      <p>Selected Category: {searchParams.get("category")}</p>
    </div>
  );
}

export default Products;
