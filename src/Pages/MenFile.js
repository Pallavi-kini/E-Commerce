import React, { createContext } from "react";
import banner_men from "../Components/Assets/banner_mens.png";
import all_product from "../Components/Assets/all_product";
import "./MenFile.css";
import ReusableCard from "../Components/ReusableCard/ReusableCard";
import Footer from "../Components/Footer/Footer";

const MenFile = () => {
  const menData = all_product.filter((item) => item.category === "men");
  console.log(menData);
  return (
    <div className="men-zone">
      <img src={banner_men} alt="banner_men" className="dicount-banner" />
      <div className="total-item">
        <div>Showing 1 to 15 out of 54 Products</div>
        <div>Sort By</div>
      </div>
      <div className="popular-item-container">
        {menData.map((item) => (
          <ReusableCard key={item.id} item={item} />
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MenFile;
