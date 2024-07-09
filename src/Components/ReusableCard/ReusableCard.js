import React from "react";
import "./ReusableCard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { modify } from "../../store/CartSlice";

const ReusableCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToProduct = (id) => {
    localStorage.setItem("productId", id);
    if (props.cart) {
      navigate("/cart/product");
    } else {
      navigate("product");
    }
  };

  const removeFromCart = (e, item) => {
    e.stopPropagation();
    const obj = {
      ...item,
      id: item.id,
      type: "remove",
    };
    dispatch(modify(obj));
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
      <p style={{ fontWeight: 500, color: "orangered" }}>
        Price: {props.item.price}
        <span>&#36;</span>
      </p>
      {props.cart ? (
        <>
          <p>Selected Size : {props.item.size} </p>
          <button
            type=""
            className="remove-from-cart"
            onClick={(e) => removeFromCart(e, props.item)}
          >
            REMOVE FROM CART
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ReusableCard;
