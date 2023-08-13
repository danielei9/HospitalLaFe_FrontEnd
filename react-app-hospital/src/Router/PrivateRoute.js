import React from 'react'
import { Navigate } from 'react-router-dom';
import {  useAuth } from "../Hooks";

export const PrivateRoute = ({  children }) => {
  const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        console.log("AUTH NO")
        return <Navigate to="/sign-in" replace />;
    }
    console.log("AUTH OK")

    return children;
};