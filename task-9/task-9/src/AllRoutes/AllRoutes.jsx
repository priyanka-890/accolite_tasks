import React from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("../Pages/Home/Home"));
const About = React.lazy(() => import("../Pages/About/About"));
const NoPage = React.lazy(() => import("../Pages/NoPage"));
const Users = React.lazy(() => import("../Pages/Users/Users"));

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/about" element={<About />} />

      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};
export default AllRoutes;
