import React from "react";
import { Card, Col } from "react-bootstrap";

const Car = ({ car }) => {
  const { name, desc, img, price } = car;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Car;
