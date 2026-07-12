import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <nav>
      <h2>Theme Toggle App</h2>

      <h3>
        Current Theme:
        <span>{isDark ? " Dark 🌙" : " Light ☀️"}</span>
      </h3>
    </nav>
  );
}

export default Navbar;
