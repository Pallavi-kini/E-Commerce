import React from "react";
import "./ReusableCard.css";

const ReusableCard = (props) => {
  return (
    <div key={props.item.id} className="card-outer-container">
      <img src={props.item.image} alt={props.item.name} />
      <p>{props.item.name}</p>
      <p>
        {props.item.new_price}
        <span>&#36;</span> - {props.item.new_price}
        <span>&#36;</span>
      </p>
    </div>
  );
};

export default ReusableCard;
