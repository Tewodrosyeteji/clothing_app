import React from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import "./ProductCard.scss";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../store/cart/cartActions";
import { selectCartItems } from "../../store/cart/cartSelector";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  // const addProductToCart = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const addToCartHandler = () => dispatch(addProductToCart(cartItems, product));
  const { name, imageUrl, price } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} />
      <div className="fotter">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addToCartHandler}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
