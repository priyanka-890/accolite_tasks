import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "../App.css";

const Home = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    fetch(url)
      .then((res) => {
        res.json().then((result) => {
          setCardData(result);
          localStorage.setItem("card", JSON.stringify(result));
        });
      })
      .catch((err) => {
        let collections = localStorage.getItem("card");
        setCardData(JSON.parse(collections));
      });
  }, []);
  return (
    <div className="card-wrapper">
      {cardData?.map((card, i) => (
        <Card className="text-center" key={card.id}>
          <Card.Header>Products</Card.Header>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days left</Card.Footer>
        </Card>
      ))}
    </div>
  );
};
export default Home;
