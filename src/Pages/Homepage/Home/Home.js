import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Cars from "../Cars/Cars";
import Reviews from "../ReviewsPage/Reviews";
import TopBanner from "../TopBanner/TopBanner";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <TopBanner></TopBanner>
      <Cars></Cars>
      <Reviews />
      <Footer></Footer>
    </div>
  );
};

export default Home;
