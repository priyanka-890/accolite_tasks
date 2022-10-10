import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const User = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => {
        res.json().then((result) => {
          setList(result);
          localStorage.setItem("user", JSON.stringify(result));
        });
      })
      .catch((err) => {
        let collection = localStorage.getItem("user");
        setList(JSON.parse(collection));
      });
  }, []);
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th> NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>ADDRESS</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item?.address?.city}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default User;
