import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import Filter from "./Filter";

function ProductList() {
  const [filter, setFilter] = useState("");

  const filteredProducts = filter
    ? products.filter((p) => p.category === filter)
    : products;

  return (
    <div>
      <h2>Products</h2>
      <Filter setFilter={setFilter} />
      <div style={{ display: "flex", gap: "20px" }}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
