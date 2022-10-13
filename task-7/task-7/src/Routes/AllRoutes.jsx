import React from "react";
import { Routes, Route } from "react-router-dom";
import Capsule from "../Pages/Capsule";
import Home from "../Pages/Home";
import Ships from "../Pages/Ships";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/capsules" element={<Capsule />} />
      <Route path="/Ships" element={<Ships />} />
    </Routes>
  );
};
export default AllRoutes;
