import React from "react";
import Button from "../Button/Button";
import "./CardDropdown.scss";
const CardDropdown = () => {
  return (
    <div className="cart-dropdown-container ">
      <div className="cart-items"></div>
      <Button> Go To Checkout </Button>
    </div>
  );
};

export default CardDropdown;
