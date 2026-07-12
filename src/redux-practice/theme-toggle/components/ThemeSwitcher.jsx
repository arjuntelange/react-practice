import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";

function ThemeSwitcher() {
  const isDark = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();

  return (
    <>
      <h2>{isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h2>

      <button onClick={() => dispatch(toggleTheme())}>
        {isDark ? "☀️ Switch to Light" : "🌙 Switch to Dark"}
      </button>
    </>
  );
}

export default ThemeSwitcher;
