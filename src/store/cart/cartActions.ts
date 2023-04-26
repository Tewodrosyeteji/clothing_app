import { CART_ACTION_TYPE } from "./cartTypes";
import {
  createAction,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer";
import { CategoryItem } from "../categories/categoriesType";
import { CartItem } from "./cartTypes";

const addToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
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

const removeToCart = (
  cartItems: CartItem[],
  productToRemove: CartItem
): CartItem[] => {
  const existingCart = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if (existingCart && existingCart.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearItem = (
  cartItems: CartItem[],
  itemToClear: CartItem
): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);
};

export type setIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPE.SET_CART_OPEN,
  boolean
>;
export type setCartItems = ActionWithPayload<
  CART_ACTION_TYPE.ADD_PRODUCT_TO_CART,
  CartItem[]
>;

export const setIsCartOpen = withMatcher(
  (boolean: boolean): setIsCartOpen =>
    createAction(CART_ACTION_TYPE.SET_CART_OPEN, boolean)
);

export const setCartItems = withMatcher((cartItems: CartItem[]) =>
  createAction(CART_ACTION_TYPE.ADD_PRODUCT_TO_CART, cartItems)
);

export const addProductToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addToCart(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeCartItem = (
  cartItems: CartItem[],
  productToRemove: CartItem
) => {
  const newCartItems = removeToCart(cartItems, productToRemove);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (
  cartItems: CartItem[],
  itemToClear: CartItem
) => {
  const newCartItems = clearItem(cartItems, itemToClear);
  return setCartItems(newCartItems);
};
