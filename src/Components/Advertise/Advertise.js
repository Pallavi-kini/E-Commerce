import React from "react";
import "./Advertise.css";
import heroimage from "../Assets/hero_image.png";
import handicon from "../Assets/hand_icon.png";

const Advertise = () => {
  return (
    <div className="ad-container">
      <div className="hero-text-image">
        <div style={{ width: "250px" }}>
          <h3>NEW ARRIVALS ONLY</h3>
          <h1 style={{ marginTop: "20px" }}>
            new{" "}
            <img src={handicon} style={{ height: "57px" }} className="wave" />
            collections for everyone
          </h1>
          <div className="latest-collection">
            <span>Latest collection</span>
            <span>
              <i
                className="fa-solid fa-arrow-right-long"
                style={{ color: "white" }}
              ></i>
            </span>
          </div>
        </div>
        <div>
          <img className="hero-image" src={heroimage} alt="hero_image" />
        </div>
      </div>
    </div>
  );
};

export default Advertise;
