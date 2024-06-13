import React from "react";
import banner_women from "../Components/Assets/banner_women.png";
import all_product from "../Components/Assets/all_product";
import ReusableCard from "../Components/ReusableCard/ReusableCard";
import Footer from "../Components/Footer/Footer";

const Women = () => {
  const womenData = all_product.filter((item) => item.category === "women");
  console.log(womenData);
  return (
    <div className="men-zone">
      <img src={banner_women} alt="banner_men" className="dicount-banner" />
      <div className="total-item">
        <div>Showing 1 to 15 out of 54 Products</div>
        <div>Sort By</div>
      </div>
      <div className="popular-item-container">
        {womenData.map((item) => (
          <ReusableCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Women;
