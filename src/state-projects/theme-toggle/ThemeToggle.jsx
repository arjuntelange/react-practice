import React, {useState} from "react"
import "./ThemeToggle.css"

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  function changeTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <h1>{darkMode? "🌙 Dark Mode": "🌞 Light Mode"}</h1>

      <button onClick={changeTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggle;
