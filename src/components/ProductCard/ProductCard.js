import React from "react";
import Button from "../Button/Button";
import "./ProductCard.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
const ProductCard = ({ product }) => {
  const { addProductToCart } = useContext(CartContext);
  const addToCartHandler = () => addProductToCart(product);
  const { name, imageUrl, price } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} />
      <div className="fotter">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addToCartHandler}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
