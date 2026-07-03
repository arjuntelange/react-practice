import React from "react";
import { Navigate } from "react-router-dom";
import AccessDenied from "./AccessDenied";

function ProtectedRoute({ children }) {
  const isLoggedIn = false;

  return isLoggedIn ? children : <AccessDenied />;
}

export default ProtectedRoute;
