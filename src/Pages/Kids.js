import React from "react";
import banner_kids from "../Components/Assets/banner_kids.png";
import all_product from "../Components/Assets/all_product";
import ReusableCard from "../Components/ReusableCard/ReusableCard";

const Kids = () => {
  const kidData = all_product.filter((item) => item.category === "kid");
  console.log(kidData);
  return (
    <div className="men-zone">
      <img src={banner_kids} alt="banner_men" className="dicount-banner" />
      <div className="total-item">
        <div>Showing 1 to 15 out of 54 Products</div>
        <div>Sort By</div>
      </div>
      <div className="popular-item-container">
        {kidData.map((item) => (
          <ReusableCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Kids;
