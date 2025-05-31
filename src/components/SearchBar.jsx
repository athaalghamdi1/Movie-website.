import React, { useState } from "react"

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("movie");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      onSearch(query, type);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar