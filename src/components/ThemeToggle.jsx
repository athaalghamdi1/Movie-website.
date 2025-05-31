import React from "react"

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle