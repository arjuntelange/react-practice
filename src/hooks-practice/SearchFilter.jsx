import React, { useState, useTransition } from "react";

function SearchFilter() {
  const [isPending, startTransition] = useTransition();

  const [searchTerm, setSearchTerm] = useState("");

  const items = Array.from({ length: 5 }, (_, i) => `React Course ${i + 1}`);

  const [filteredItems, setFilteredItems] = useState([]);

  function handleSearch(event) {
    const inputValue = event.target.value;

    setSearchTerm(inputValue);

    startTransition(() => {
      const filtered = items.filter((currentItem) =>
        currentItem
          .toLocaleLowerCase()
          .includes(inputValue.toLocaleLowerCase()),
      );

      setFilteredItems(filtered);
    });
  }

  return (
    <div className="container">
      <h2>Smart Search Filter</h2>

      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={handleSearch}
      />

      {isPending && <p>Searching...</p>}

      <ul>
        {filteredItems.map((currentItem, index) => (
          <li key={index}>{currentItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
