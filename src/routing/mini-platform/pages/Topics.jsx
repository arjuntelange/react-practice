import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Topics() {
  return (
    <>
      <h3>Topics🎓</h3>

      <nav>
        <NavLink to="/topics/html">HTML</NavLink>
        {" | "}
        <NavLink to="/topics/css">CSS</NavLink>
        {" | "}
        <NavLink to="/topics/javascript">JavaScript</NavLink>
      </nav>

      <Outlet />
    </>
  );
}

export default Topics;
