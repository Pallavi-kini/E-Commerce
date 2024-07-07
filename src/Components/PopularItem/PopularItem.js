import React from "react";
import ReusableCard from "../ReusableCard/ReusableCard";
import "./PopularItem.css";

const PopularItem = (props) => {
  const women = props.productlist.filter(
    (data) => data.category === `women's clothing`
  );

  return (
    <div>
      <div className="heading">
        <h1>POPULAR IN WOMEN</h1>
        <hr className="straight-line"></hr>
      </div>
      <div className="popular-item-container">
        {women.map((item) => (
          <ReusableCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularItem;
