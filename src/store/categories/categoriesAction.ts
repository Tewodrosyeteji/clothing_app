import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer";
import { CATEGORIES_ACTION_TYPE, Category } from "./categoriesType";

export type fetchCategoryStart =
  Action<CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_START>;
export type fetchCategorySuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_SUCCESS,
  Category[]
>;
export type fetchCategoryFaild = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_FAILD,
  Error
>;

export const fetchCategoryStart = withMatcher(
  (): fetchCategoryStart =>
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_START)
);
export const fetchCategorySuccess = withMatcher(
  (categoriesArray: Category[]): fetchCategorySuccess =>
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_SUCCESS, categoriesArray)
);
export const fetchCategoryFaild = withMatcher(
  (error: Error): fetchCategoryFaild =>
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_FAILD, error)
);
