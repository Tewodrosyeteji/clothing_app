import { CART_ACTION_TYPE } from "./cartTypes";
import { createAction } from "../../utils/reducer/reducer";

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPE.SET_CART_OPEN, boolean);

const addToCart = (cartItems, productToAdd) => {
  const existingCart = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCart) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeToCart = (cartItems, productToRemove) => {
  const existingCart = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if (existingCart.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearItem = (cartItems, itemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);
};



export const addProductToCart = (cartItems, productToAdd) => {
  const newCartItems = addToCart(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPE.ADD_PRODUCT_TO_CART, newCartItems);
};

export const removeCartItem = (cartItems, productToRemove) => {
  const newCartItems = removeToCart(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPE.ADD_PRODUCT_TO_CART, newCartItems);
};

export const clearItemFromCart = (cartItems, itemToClear) => {
  const newCartItems = clearItem(cartItems, itemToClear);
  return createAction(CART_ACTION_TYPE.ADD_PRODUCT_TO_CART, newCartItems);
};
