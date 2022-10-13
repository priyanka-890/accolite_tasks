import React from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_SHIPS } from "../querries/query";
import { Card, ListGroup } from "react-bootstrap";
import "../Styles/Ships.css";

const Ships = () => {
  const { loading, error, data } = useQuery(gql`
    ${GET_SHIPS}
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="ship-wrapper">
      {data?.ships.map(({ abs, home_port, id, image, imo, mmsi, name }) => (
        <Card className="card">
          <Card.Img className="card-img" variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{abs ? abs : "-"}</ListGroup.Item>
            <ListGroup.Item>{home_port ? home_port : "-"}</ListGroup.Item>
            <ListGroup.Item>{mmsi ? mmsi : "-"}</ListGroup.Item>
            <ListGroup.Item>{imo ? imo : "-"}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
export default Ships;
