import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import SingleUser from "./SingleUser";
import "./UserList.css";

const Card = () => {
  const { id } = useParams();

  const singleData2 = data.filter((item) => item.id == id);

  return (
    <div className="subWrapper">
      {" "}
      {console.log(singleData2, "singleData2")}
      <SingleUser {...singleData2[0]} />
    </div>
  );
};
export default Card;
