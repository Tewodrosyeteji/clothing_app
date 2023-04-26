import { CategoryItem } from "../categories/categoriesType";

export enum CART_ACTION_TYPE {
  SET_CART_OPEN = "SET_CART_OPEN",
  ADD_PRODUCT_TO_CART = "SET_CART_ITEMS",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
