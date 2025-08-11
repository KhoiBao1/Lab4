import React from "react";

function Filter({ setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter("")}>All</button>
      <button onClick={() => setFilter("Electronics")}>Electronics</button>
      <button onClick={() => setFilter("Fashion")}>Fashion</button>
    </div>
  );
}

export default Filter;
