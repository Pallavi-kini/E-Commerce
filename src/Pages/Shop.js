import React from "react";
import Advertise from "../Components/Advertise/Advertise";
import "./Shop.css";
import PopularItem from "../Components/PopularItem/PopularItem";
import NewCollections from "../Components/NewCollection/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Footer from "../Components/Footer/Footer";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop-container">
      <Advertise topcontent={true} />
      <div className="popular-item-in-shop">
        <PopularItem />
      </div>
      <Advertise topcontent={false} />
      <NewCollections />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Shop;
