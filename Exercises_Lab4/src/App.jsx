import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import ThemedContent from "./components/ThemedContent";

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <ThemedContent />
    </ThemeProvider>
  );
}

export default App;
