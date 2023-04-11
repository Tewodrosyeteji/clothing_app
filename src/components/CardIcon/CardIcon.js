import React, { useContext } from "react";

import { ShoppingIcon, ItemCount, CartIconContainer } from "./CardIcon.jsx";
import { CartContext } from "../../context/CartContext/CartContext";

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CardIcon;
