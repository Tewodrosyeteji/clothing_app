import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import "./Navigation.scss";
import { useContext } from "react";
import { userContext } from "../../context/UserContext/UserContext";
import { signOutUser } from "../../utils/firebase/firebase";
import CardIcon from "../../components/CardIcon/CardIcon";
import CardDropdown from "../../components/CardDropdown/CardDropdown";
import { CartContext } from "../../context/CartContext/CartContext";
const Navigation = () => {
  const { currentUser } = useContext(userContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crown className="log" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              signIN
            </Link>
          )}
          <CardIcon />
        </div>
        {isCartOpen && <CardDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
