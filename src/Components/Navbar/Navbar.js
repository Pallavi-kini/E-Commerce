import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
  };

  const HandleLoginClick = () => {
    navigate("login");
  };

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
        <div className="cart-logo">
          <img src={cart} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
