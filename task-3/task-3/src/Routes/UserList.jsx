import React from "react";
import { useState } from "react";
import dummydata from "../data.json";
import { Link } from "react-router-dom";
import "./UserList.css";
import SingleUser from "./SingleUser";
const UserList = () => {
  const [data, setData] = useState(dummydata);
  console.log(dummydata, "dummydata");
  return (
    <div className="wrapper">
      {data?.map((item) => (
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
