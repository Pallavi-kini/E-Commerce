import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import product_1 from "../Components/Assets/product_1.png";
import star_icom from "../Components/Assets/star_icon.png";
import star_dullicon from "../Components/Assets/star_dull_icon.png";
import { cleanup } from "@testing-library/react";

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [button, setButton] = useState("Product");

  const star = [1, 2, 3, 4];
  const objct = {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    new_price: 100.0,
    old_price: 150.0,
  };
  const sizes = ["S", "M", "L", "XL", "XXL"];

  const selectSize = (index) => {
    setSelectedSize(index);
  };

  // const changeButton = (e) => {
  //   setButton(e.target.value);
  //   // console.log(button);
  // };

  useEffect(() => {
    // checkobj();
    return () => {
      cleanup();
    };
  }, [button]);

  return (
    <div className="ProductDetailsPage">
      <div className="detailed-product">
        <div>
          <img src={product_1} alt="product_1" />
        </div>
        <div>
          <h2>{objct.name}</h2>
          <p></p>
          <p style={{ marginTop: "10px" }}>
            {star.map((item) => (
              <img src={star_icom} alt="star-icn" key={item} />
            ))}
            <img src={star_dullicon} alt="star-dull" />
            <span>(221)</span>
          </p>
          <div
            className="old-new-price
          "
          >
            <span>
              <del>
                {objct.old_price}
                <span>&#36;</span>
              </del>
            </span>
            <span style={{ color: "red" }}>
              {objct.new_price}
              <span>&#36;</span>
            </span>
          </div>
          <div className="product-desc">
            A lighweiht usually knitted pullover close fitting with a round
            neckline and short sleves worn as an under shirt or outer garment
          </div>
          <p style={{ marginTop: "30px" }}>Select Size</p>
          <div className="select-size">
            {sizes.map((data, i) => (
              <div
                onClick={() => selectSize(i)}
                key={i}
                className={selectedSize === i ? "selected-size" : "size-box"}
              >
                {data}
              </div>
            ))}
          </div>
          {/*ffhhfh  */}
          <div>
            <button type="" className="cart-button">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
