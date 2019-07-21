import React from "react";
import "./App.css";
import Posts from "./pages/Posts";
import useDarkMode from "./hooks/useDarkMode ";
function App() {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <div
      className="App"
      style={{
        background: theme === "dark" ? "#000" : "#fff",
        color: theme === "dark" ? "#fff" : "#000"
      }}
    >
      <main>
        <button type="button" onClick={toggleTheme}>
          Switch theme
        </button>
        <Posts />
      </main>
    </div>
  );
}

export default App;
