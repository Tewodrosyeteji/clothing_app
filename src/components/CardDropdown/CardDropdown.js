import React from "react";
import Button from "../Button/Button";
import "./CardDropdown.scss";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
const CardDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container ">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button> Go To Checkout </Button>
    </div>
  );
};

export default CardDropdown;
