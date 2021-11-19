import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Car from "../Home/Car/Car";
import "./Cars.css";
const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("./cars.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div>
      <div className="cars">
        <h1 className="fw-bolder pt-3">Our Exiting Cars</h1>
        <div className="container mb-5">
          <Row xs={1} md={3} className="g-4 mt-2">
            {cars.slice(0, 6).map((car) => (
              <Car key={car._id} car={car} />
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Cars;
