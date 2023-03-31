import React from "react";
import "./catagoryItem.scss";

const CatagoryItems = ({ catagory }) => {
  const { title, imageUrl } = catagory;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Buy now</p>
      </div>
    </div>
  );
};

export default CatagoryItems;
