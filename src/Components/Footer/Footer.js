import React from "react";
import logo from "../Assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="image-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <div className="footer-list">
        <div>Company</div>
        <div>Products</div>
        <div>Office</div>
        <div>About</div>
        <div>Contact</div>
      </div>
      <div className="footer-list">
        <div>
          <i
            className="fa-brands fa-instagram"
            style={{ fontSize: "20px" }}
          ></i>
        </div>
        <div>
          <i className="fa-brands fa-whatsapp" style={{ fontSize: "20px" }}></i>
        </div>
        <div>
          <i className="fa-brands fa-facebook" style={{ fontSize: "20px" }}></i>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
