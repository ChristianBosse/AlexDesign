import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ element: Element }) {
    // Check if user is authenticated (e.g., token stored in local storage)
    const isAuthenticated = !!localStorage.getItem("token");

    // If authenticated, render the element (e.g., AdminPanel)
    // Otherwise, redirect to the login page
    return isAuthenticated ? <Element /> : <Navigate to="/login" />;
}

export default PrivateRoute;
