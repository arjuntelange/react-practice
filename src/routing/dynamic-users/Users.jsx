import React from 'react'
import { NavLink } from 'react-router-dom'

function Users() {
  return (
    <div>
      <nav>
        <NavLink to="/users/1">Arjun</NavLink>
        {" | "}
        <NavLink to="/users/2">Karna</NavLink>
        {" | "}
        <NavLink to="/users/3">Bhishma</NavLink>
      </nav>
    </div>
  )
}

export default Users
