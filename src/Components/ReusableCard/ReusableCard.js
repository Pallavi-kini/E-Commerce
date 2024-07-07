import React from "react";
import "./ReusableCard.css";
import { useNavigate } from "react-router-dom";

const ReusableCard = (props) => {
  const navigate = useNavigate();

  const navigateToProduct = (id) => {
    localStorage.setItem("productId", id);
    navigate("product");
  };

  return (
    <div
      key={props.item.id}
      className="card-outer-container"
      onClick={() => navigateToProduct(props.item.id)}
    >
      <div className="image-div">
        <img src={props.item.image} alt={props.item.name} />
      </div>
      <p className="product-details">{props.item.title}</p>
      <p>
        Price: {props.item.price}
        <span>&#36;</span>
      </p>
      <p>{props.item.rating?.rate}</p>
    </div>
  );
};

export default ReusableCard;
