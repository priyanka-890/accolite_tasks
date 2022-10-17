import React from "react";
import { Table } from "react-bootstrap";

const UsersList = () => {
  const [usersData, setUsersData] = React.useState([]);

  React.useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url).then((response) => {
      response.json().then((result) => {
        setUsersData(result);
      });
    });
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>id</th>
            <th> Name</th>
            <th>Username</th>
            <th>email</th>
            <th>address</th>
            <th>Website</th>
            <th>Phone Number</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>
          {usersData?.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.address?.street}</td>
              <td>{item.website}</td>
              <td>{item.phone}</td>
              <td>{item.company?.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default UsersList;
