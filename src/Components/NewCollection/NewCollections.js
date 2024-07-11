import React from "react";
import new_collections from "../Assets/new_collections";
import ReusableCard from "../ReusableCard/ReusableCard";

const NewCollections = (props) => {
  // console.log(props);
  return (
    <div>
      <div className="heading">
        <h1>NEW COLLECTIONS</h1>
        <hr className="straight-line"></hr>
      </div>
      <div className="popular-item-container">
        {new_collections.map((item) => (
          <ReusableCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
