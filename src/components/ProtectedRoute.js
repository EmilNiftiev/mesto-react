import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element: Component, ...props }) {
  return props.length ? (
    <Component {...props} />
  ) : (
    <Navigate to="/sign-in" replace />
  );
}

export default ProtectedRoute;
