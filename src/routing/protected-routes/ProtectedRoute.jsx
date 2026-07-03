import React from "react";

function ProtectedRoute({children}) {
  const isLoggedIn = false;

  return isLoggedIn ? children : <h2>Access Denied🚧</h2>;
}

export default ProtectedRoute;
