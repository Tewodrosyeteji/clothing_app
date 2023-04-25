import React from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./Navigation.jsx";
import { signOutUser } from "../../utils/firebase/firebase";
import CardIcon from "../../components/CardIcon/CardIcon";
import CardDropdown from "../../components/CardDropdown/CardDropdown";
import { selectIsCartOpen } from "../../store/cart/cartSelector";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/userSelector";
import { useDispatch } from "react-redux";
import { signoutStart } from "../../store/user/userAction";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutUser = () => dispatch(signoutStart());

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Crown className="log" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SignOut
            </NavLink>
          ) : (
            <NavLink to="/auth">signIN</NavLink>
          )}
          <CardIcon />
        </NavLinks>
        {isCartOpen && <CardDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
