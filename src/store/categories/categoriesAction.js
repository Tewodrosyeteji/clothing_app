import { createAction } from "../../utils/reducer/reducer";
import { CATEGORIES_ACTION_TYPE } from "./categoriesType";
export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_ITEMS, categoriesArray);
