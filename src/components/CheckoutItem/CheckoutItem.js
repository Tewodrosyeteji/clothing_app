import React from "react";
import "./CheckoutItem.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addProductToCart, removeCartItem } =
    useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addProductToCart(cartItem);
  const removeItemHandle = () => removeCartItem(cartItem);
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
