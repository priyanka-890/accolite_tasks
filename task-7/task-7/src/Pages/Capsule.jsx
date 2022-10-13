import React from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_CAPSULES } from "../querries/query";
import { Table } from "react-bootstrap";

const Capsule = () => {
  const { loading, error, data } = useQuery(gql`
    ${GET_CAPSULES}
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Landings</th>
            <th>Original launch</th>
            <th>Reuse count</th>
            <th>Type</th>
          </tr>
        </thead>

        {data.capsules.map(
          ({ id, landings, original_launch, reuse_count, type }, i) => (
            <tbody>
              <tr>
                <td>{i + 1}</td>
                <td>{id}</td>
                <td>{landings}</td>
                <td>{original_launch ? original_launch : "-"}</td>
                <td>{reuse_count}</td>
                <td>{type}</td>
              </tr>
            </tbody>
          )
        )}
      </Table>
    </div>
  );
};
export default Capsule;
