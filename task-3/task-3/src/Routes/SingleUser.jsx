import React from "react";
import "./UserList.css";

const SingleUser = ({ first_name, last_name, email, gender, ip_address }) => {
  // console.log("item");
  return (
    <div>
      <div>
        <span></span>
        {first_name} {last_name}
      </div>
      <div>
        <sapn className="heading">Email:</sapn>
        {email}
      </div>
      <div>
        {" "}
        <sapn className="heading">Gender:</sapn>
        {gender}
      </div>
      <div>
        {" "}
        <sapn className="heading">IP:</sapn>
        {ip_address}
      </div>
      hhhhhh
    </div>
  );
};

export default SingleUser;
