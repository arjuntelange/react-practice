import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h2>DashBoard</h2>
      <nav>
        <NavLink to="profile">Profile</NavLink>
        {" | "}
        <NavLink to="courses">Courses</NavLink>
        {" | "}
        <NavLink to="settings">Settings</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Dashboard;
