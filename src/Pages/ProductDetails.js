import React, { useEffect, useRef, useState } from "react";
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { modify } from "../store/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState();
  const [product, setProduct] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const prodId = useRef("");
  const dispatch = useDispatch();

  const url = process.env.REACT_APP_API_URL;

  const selectSize = (index) => {
    setSelectedSize(index);
  };

  const cartData = useSelector((state) => state.cart.cart);

  useEffect(() => {
    prodId.current = localStorage.getItem("productId");
    getdataFromRedux();
    if (prodId.current) {
      const resp = axios.get(`${url}/products/${prodId.current}`);
      resp.then((res) => setProduct(res.data)).catch((err) => console.log(err));
    }
    localStorage.removeItem("productId");
  }, []);

  function getdataFromRedux() {
    if (cartData.length > 0) {
      const filteredData = cartData.filter(
        (cartItem) => cartItem.id === Number(prodId.current)
      );
      filteredData.length > 0 ? setIsInCart(true) : setIsInCart(false);
      const selectedSizeIndex = sizes.findIndex(
        (data) => data === filteredData[0]?.size
      );
      setSelectedSize(selectedSizeIndex);
    }
  }

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const num = product.rating?.rate || 0;
  const [number, decimal] = num.toString().split(".");
  const no = parseInt(number);
  const dec = parseInt(decimal);
  const star = Array.from({ length: 5 }, (_, i) =>
    i < no ? 1 : i === no && dec >= 5 ? 2 : 3
  );

  const mapStar = (item, index) => (
    <i
      key={index}
      className={`fa-solid ${
        item === 1 ? "fa-star" : item === 2 ? "fa-star-half-stroke" : "fa-star"
      }`}
      style={{ color: item === 3 ? "#f29797" : "#f04747" }}
    ></i>
  );

  const addtoCart = (item) => {
    selectedSize === undefined ? setShowToast(false) : setShowToast(true);
    const size = sizes.at(selectedSize);
    const obj = {
      ...item,
      size: size,
      type: isInCart ? "remove" : "add",
    };
    dispatch(modify(obj));
    notify();
    obj.type === "add" ? setIsInCart(true) : setIsInCart(false);
  };

  const notify = () => {
    toast.success(
      isInCart ? "Removed From Cart" : "Added to cart Successfully",
      {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "toast",
      }
    );
  };

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
            {star.map((item, index) => mapStar(item, index))}
            {product.rating?.rate}
            <span style={{ paddingLeft: "10px" }}>
              ({product.rating?.count})
            </span>
          </p>
          <div
            className="old-new-price
          "
          >
            <span style={{ fontWeight: 500 }}>
              Price : {product.price}
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
          <div style={{ display: "flex", height: "70px" }}>
            <button
              type=""
              className={
                selectedSize !== undefined ? "cart-button" : "active-btn"
              }
              onClick={() => addtoCart(product)}
              disabled={selectedSize !== undefined ? false : true}
            >
              {isInCart ? "REMOVE FROM CART" : "ADD TO CART"}
            </button>
            {showToast !== 0 ? (
              <ToastContainer style={{ position: "relative" }} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
