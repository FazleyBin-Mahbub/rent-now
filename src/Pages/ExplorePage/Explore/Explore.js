import { React, useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Car from "../../Homepage/Home/Car/Car";
import TopBanner from "../../Homepage/TopBanner/TopBanner";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const Explore = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("./cars.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <TopBanner></TopBanner>
      <div className="cars">
        <h1 className="fw-bolder pt-3">Our Exiting Cars</h1>
        <div className="container mb-5">
          <Row xs={1} md={3} className="g-4 mt-2">
            {cars.map((car) => (
              <Car key={car._id} car={car} />
            ))}
          </Row>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Explore;
