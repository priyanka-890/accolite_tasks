import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Card from "./Card";
import UserList from "./UserList";
import NoPage from "./NoPage";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/students" element={<UserList />} />
        <Route exact path="/students/:id" element={<Card />} />
        <Route exact path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
