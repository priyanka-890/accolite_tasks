import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const PrivateRoutes = ({ children }) => {
  const { isAuth } = React.useContext(AuthContext);
  return isAuth.token ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
