import React, { useEffect, useState } from "react";
import banner_women from "../Components/Assets/banner_women.png";
import all_product from "../Components/Assets/all_product";
import ReusableCard from "../Components/ReusableCard/ReusableCard";
import prodFromAsset from "../Components/Assets/all_product";
import axios from "axios";

const Women = () => {
  const [productlist, setProductlist] = useState([]);

  useEffect(() => {
    getProductList();
  }, []);

  const url = process.env.REACT_APP_API_URL;
  function getProductList() {
    const data = axios.get(`${url}/products`);
    data
      .then((res) => setProductlist([...res.data, ...prodFromAsset]))
      .catch((err) => console.log(err));
  }

  const womenData = productlist.filter(
    (item) => item.category === "women's clothing"
  );
  return (
    <div className="men-zone">
      <img src={banner_women} alt="banner_men" className="dicount-banner" />
      <div className="total-item">
        <div>Showing 1 to 15 out of 54 Products</div>
        <div>Sort By</div>
      </div>
      <div className="popular-item-container">
        {womenData.map((item) => (
          <ReusableCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Women;
