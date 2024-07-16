import React, { useEffect, useState } from "react";
import Advertise from "../Components/Advertise/Advertise";
import "./Shop.css";
import PopularItem from "../Components/PopularItem/PopularItem";
import NewCollections from "../Components/NewCollection/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import axios from "axios";
import prodFromAsset from "../Components/Assets/all_product";
import "./Shop.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchItem } from "../store/ApiSlice";

const Shop = () => {
  const dispatch = useDispatch();
  // const [productlist, setProductlist] = useState([]);
  const { data: productlist, status } = useSelector((state) => state.api);
  // const data = useSelector(state = > )

  useEffect(() => {
    dispatch(fetchItem());
  }, [dispatch]);

  // const url = process.env.REACT_APP_API_URL;
  // function getProductList() {
  //   const data = axios.get(`${url}/products`);
  //   data
  //     .then((res) => setProductlist([...res.data, ...prodFromAsset]))
  //     .catch((err) => console.log(err));
  // }

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
