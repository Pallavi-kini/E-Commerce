import React from "react";
import data_product from "../Assets/data";
import ReusableCard from "../ReusableCard/ReusableCard";
import "./PopularItem.css";

const PopularItem = () => {
  console.log(data_product);
  return (
    <div>
      <div className="heading">
        <h1>POPULAR IN WOMEN</h1>
        <hr className="straight-line"></hr>
      </div>
      <div className="popular-item-container">
        {data_product.map((item) => (
          <ReusableCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularItem;
