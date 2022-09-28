import React from "react";
import { useState } from "react";
import dummydata from "../data.json";
import { Link } from "react-router-dom";
import "./UserList.css";
import SingleUser from "./SingleUser";
const UserList = () => {
 
  
  return (
    <div className="wrapper">
      {dummydata?.map((item) => (
        <div className="subWrapper">
          <Link to={`${item.id}`}>
            <SingleUser {...item} />
          </Link>
        </div>
      ))}
    </div>
  );
};
export default UserList;
