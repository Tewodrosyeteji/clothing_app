import React from "react";
import Button from "../Button/Button";
import "./ProductCard.scss";
const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} />
      <div className="fotter">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted"> Add to cart</Button>
    </div>
  );
};

export default ProductCard;
