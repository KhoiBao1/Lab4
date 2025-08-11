import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={cardStyle}>
      <img src={product.image} alt={product.name} style={{ width: "100%" }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
      <br />
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  width: "200px",
  textAlign: "center",
};

export default ProductCard;
