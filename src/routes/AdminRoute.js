import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const AdminRoute = ({ children }) => {
  const { getAdminAuth, user } = useContext(UserContext);

  useEffect(() => {
    getAdminAuth();
  }, []);

  return /*user ? (user.role === 'ADMIN' ? children : <Navigate to="/" />) : <Navigate to="/" />;*/ children
};

export default AdminRoute;
