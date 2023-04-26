import { setIsCartOpen, setCartItems } from "./cartActions";
import { CartItem } from "./cartTypes";
import { AnyAction } from "redux";
export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};
const cartInitialState: CartState = {
  isCartOpen: false,
  cartItems: [],
};
export const cartReducer = (
  state = cartInitialState,
  action: AnyAction
): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  return state;
};
