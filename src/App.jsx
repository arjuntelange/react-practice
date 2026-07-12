import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./redux-practice/theme-toggle/ThemeToggle.css"
import Navbar from "./redux-practice/theme-toggle/components/Navbar";
import ThemeSwitcher from "./redux-practice/theme-toggle/components/ThemeSwitcher";
import { useSelector } from "react-redux";

function App() {
  const isDark = useSelector((state) => state.theme.isDark);
  return (
    <>
      <div
        className="main-container"
        style={{
          backgroundColor: isDark ? "#121212" : "#f4f7fb",
          color: isDark ? "#ffffff" : "#222222",
        }}
      >
        <div className="theme-card">
          <Navbar />
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
}

export default App;
