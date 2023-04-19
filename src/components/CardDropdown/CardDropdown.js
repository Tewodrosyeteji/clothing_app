import React from "react";
import Button from "../Button/Button";
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./CardDropdown.jsx";
import { selectCartItems } from "../../store/cart/cartSelector";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const CardDropdown = () => {
  // const { cartItems } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);
  const navigate = useNavigate();
  const goToCheckout = () => navigate("/checkout");
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>You have empty cart </EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckout}> Go To Checkout </Button>
    </CartDropDownContainer>
  );
};

export default CardDropdown;
