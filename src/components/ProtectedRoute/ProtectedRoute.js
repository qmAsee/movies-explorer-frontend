import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedRouteElement = ({ element: Component, ...props }) => {
    return props.isLoggedIn ? (
      <Component {...props} />
    ) : (
      <Navigate to="/signin" replace />
    );
  };

export default ProtectedRouteElement;