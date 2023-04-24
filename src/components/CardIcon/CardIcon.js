import React from "react";

import { ShoppingIcon, ItemCount, CartIconContainer } from "./CardIcon.jsx";
import { useDispatch, useSelector } from "react-redux";
// import { CartContext } from "../../context/CartContext/CartContext";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cartSelector.js";
import { setIsCartOpen } from "../../store/cart/cartActions.js";

const CardIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CardIcon;
