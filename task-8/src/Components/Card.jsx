import React from "react";
import { Col, Card } from "react-bootstrap";

const CardItem = ({
  id,
  title,
  description,
  price,
  discountPercentage,
  category,
  brand,
  images,
}) => {
  return (
    <Col>
      <Card style={{ minHeight: "450px" }}>
        <Card.Img variant="top" src={images[0]} height={"200px"} />
        <Card.Body>
          <Card.Title>
            {brand} {category}
          </Card.Title>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ maxHeight: "100px" }}>{description}</Card.Text>
          <Card.Title>
            Actual price is {price}$ you will be getting off of{" "}
            {discountPercentage}$
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default CardItem;
