import React from "react";
import { Link } from "react-router-dom";
import "../Routes/UserList.css";

const links = [
  { to: "/", title: "Home" },
  { to: "/students", title: "students" },
];

const NavBar = () => {
  return (
    <div className="nav">
      {links?.map(({ to, title }) => (
        <Link className="link" to={to} title={title}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
