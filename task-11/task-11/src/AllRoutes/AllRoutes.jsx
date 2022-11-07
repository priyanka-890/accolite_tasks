import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "../Pages/Admin";
import Features from "../Pages/Features";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Pricing from "../Pages/Pricing";
import PrivateRoutes from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<Admin />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
export default AllRoutes;
