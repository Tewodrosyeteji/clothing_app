import React from "react";
import Button from "../Button/Button";
import "./CardDropdown.scss";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import { useNavigate } from "react-router-dom";
const CardDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckout = () => navigate("/checkout");
  return (
    <div className="cart-dropdown-container ">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckout}> Go To Checkout </Button>
    </div>
  );
};

export default CardDropdown;
