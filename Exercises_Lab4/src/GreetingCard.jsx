function GreetingCard({ name }) {
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    color: "#333",
    fontFamily: "Arial",
  };

  return (
    <div style={cardStyle}>
      <h2>Hello, {name}! Welcome to React.</h2>
    </div>
  );
}

export default GreetingCard;
