import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <h2>Dashboard📺</h2>
      <nav style={{display: 'flex', gap: '20px'}}>
        <NavLink to="courses">Courses</NavLink>
        <NavLink to="settings">Settings</NavLink>
        <NavLink to="profiles">Profile</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Dashboard;
