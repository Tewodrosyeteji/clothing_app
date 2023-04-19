import React from "react";
import "./CheckoutItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cartSelector";
import {
  addProductToCart,
  clearItemFromCart,
  removeCartItem,
} from "../../store/cart/cartActions";
const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addProductToCart(cartItems, cartItem));
  const removeItemHandle = () => dispatch(removeCartItem(cartItems, cartItem));
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandle}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <button className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </button>
    </div>
  );
};

export default CheckoutItem;
