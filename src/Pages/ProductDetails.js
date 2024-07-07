import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import axios from "axios";

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [product, setProduct] = useState([]);

  // const star = [1, 2, 3, 4];
  const objct = {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    new_price: 100.0,
    old_price: 150.0,
  };
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const url = process.env.REACT_APP_API_URL;

  const selectSize = (index) => {
    setSelectedSize(index);
  };

  useEffect(() => {
    const id = localStorage.getItem("productId");
    if (id) {
      const resp = axios.get(`${url}/products/${id}`);
      resp.then((res) => setProduct(res.data)).catch((err) => console.log(err));
      console.log(product);
    }
  }, []);
  console.log(product);

  const num = product.rating?.rate || 0;
  const [number, decimal] = num.toString().split(".");
  console.log(number, typeof number, decimal, typeof decimal);
  const no = parseInt(number);
  const dec = parseInt(decimal);
  const star = Array.from({ length: 5 }, (_, i) =>
    i < no ? 1 : i === no && dec >= 5 ? 2 : 3
  );

  console.log(star);

  function mapStar(item) {
    console.log(item);
    switch (item) {
      case 1:
        return (
          <i className="fa-solid fa-star" style={{ color: "#f04747" }}></i>
        );
      case 2:
        return (
          <i
            className="fa-solid fa-star-half-stroke"
            style={{ color: "#f04747" }}
          ></i>
        );
      case 3:
        return (
          <i className="fa-solid fa-star" style={{ color: "#f29797" }}></i>
        );
      default:
        return item;
    }
  }

  return (
    <div className="ProductDetailsPage">
      <div className="detailed-product">
        <div>
          <img src={product.image} alt="product_1" className="prodt-img" />
        </div>
        <div>
          <h2>{product.title}</h2>
          <p></p>
          <p style={{ marginTop: "10px" }}>
            {star.map((item) => mapStar(item))}
            {product.rating?.rate}
            <span style={{ paddingLeft: "10px" }}>
              ({product.rating?.count})
            </span>
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
          <div className="product-desc">{product.description}</div>
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
