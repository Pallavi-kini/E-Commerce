import React, { useState } from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  const [input, setinput] = useState("");

  const handleChange = (e) => {
    setinput(e.target.value);
  };
  return (
    <div className="ad-container">
      <div className="newsletter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p style={{ marginTop: "20px" }}>
          Subscribe to our NewsLetter and stay Updated
        </p>
        <form>
          <input
            type="email"
            name="email"
            value={input}
            placeholder="Enter Email Id"
            className="input-newsletter"
            onChange={handleChange}
          />
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
