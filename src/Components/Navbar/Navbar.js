import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
  };

  const HandleLoginClick = () => {
    navigate("login");
  };

  const navigateToCart = () => {
    navigate("cart");
  };

  const countFromRedux = useSelector((state) => state.cart);
  const count = countFromRedux.noOfItem;

  return (
    <div className="navbar">
      <div className="image-logo" onClick={handleClickLogo}>
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <div className="nav-menu">
        <div>
          <NavLink to={"/"}>Shop</NavLink>
        </div>
        <div>
          <NavLink to={"men"}>Men</NavLink>
        </div>
        <div>
          <NavLink to={"women"}>Women</NavLink>
        </div>
        <div>
          <NavLink to={"kids"}>Kids</NavLink>
        </div>
      </div>
      <div className="cart-login">
        <div className="login-btn">
          <button className="btn-login" onClick={HandleLoginClick}>
            Login
          </button>
        </div>
        <div className="cart-logo" onClick={navigateToCart}>
          <img src={cart} alt="logo" />
          {count > 0 ? <div className="cart-count">{count}</div> : ""}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
