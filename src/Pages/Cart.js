import React from "react";
import { useSelector } from "react-redux";
import cartimage from "../Components/Assets/nocart.png";
import ReusableCard from "../Components/ReusableCard/ReusableCard";
import "./Cart.css";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const cartItem = cartData.cart;
  return (
    <div className="the-cart">
      <div className="heading">
        <h1>Cart Items</h1>
        <hr className="straight-line"></hr>
        {cartItem.length === 0 ? (
          <>
            <img src={cartimage} alt="" style={{ height: "248px" }} />
            <h3 style={{ marginTop: "20px" }}>Your Cart is Empty</h3>
            <p className="no-cart-text">
              Looks like you have not added anything to your cart.Go ahead and
              explore top categories
            </p>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="popular-item-container">
        {cartItem.map((item) => (
          <ReusableCard key={item.id} item={item} cart={true} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
