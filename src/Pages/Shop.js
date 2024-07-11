import React, { useEffect, useState } from "react";
import Advertise from "../Components/Advertise/Advertise";
import "./Shop.css";
import PopularItem from "../Components/PopularItem/PopularItem";
import NewCollections from "../Components/NewCollection/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import axios from "axios";
import "./Shop.css";

const Shop = () => {
  const [productlist, setProductlist] = useState([]);

  useEffect(() => {
    getProductList();
  }, []);

  const url = process.env.REACT_APP_API_URL;
  function getProductList() {
    const data = axios.get(`${url}/products`);
    data
      .then((res) => setProductlist(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="shop-container">
      <Advertise topcontent={true} />
      <div className="popular-item-in-shop">
        <PopularItem productlist={productlist} />
      </div>
      <Advertise topcontent={false} />
      <NewCollections productlist={productlist} />
      <NewsLetter />
    </div>
  );
};

export default Shop;
