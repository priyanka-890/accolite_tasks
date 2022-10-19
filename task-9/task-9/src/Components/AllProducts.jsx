import React from "react";
import { Row } from "react-bootstrap";
import CardItem from "./Card";

const AllProducts = () => {
  const [allProducts, setAllProducts] = React.useState([]);

  React.useEffect(() => {
    const url = "https://dummyjson.com/products";
    fetch(url).then((resp) => {
      resp.json().then((result) => {
        setAllProducts(result.products);
      });
    });
  }, []);
  return (
    <div style={{ margin: "60px" }}>
      <Row xs={1} md={3} className="g-4">
        {allProducts?.map((item) => (
          <CardItem {...item} key={item.id} />
        ))}
      </Row>
    </div>
  );
};
export default AllProducts;
