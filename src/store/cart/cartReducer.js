import { CART_ACTION_TYPE } from "./cartTypes";
const cartInitialState = {
  isCartOpen: false,
  cartItems: [],
};
export const cartReducer = (state = cartInitialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPE.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };

    default:
      return state;
  }
};
