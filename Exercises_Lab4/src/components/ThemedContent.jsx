import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemedContent() {
  const { theme, themeStyles } = useContext(ThemeContext);

  return (
    <div style={{ ...themeStyles[theme], padding: "20px", minHeight: "200px" }}>
      <h2>{theme === "light" ? "☀️ Light Theme" : "🌙 Dark Theme"}</h2>
      <p>This is a sample content with {theme} mode applied.</p>
    </div>
  );
}

export default ThemedContent;
