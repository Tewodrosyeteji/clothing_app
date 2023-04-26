import { CATEGORIES_ACTION_TYPE, Category } from "./categoriesType";
import { AnyAction } from "redux";
import {
  fetchCategoryStart,
  fetchCategorySuccess,
  fetchCategoryFaild,
} from "./categoriesAction";
export type CategoryState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};
const INITIAL_STATE: CategoryState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
): CategoryState => {
  if (fetchCategoryStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (fetchCategorySuccess.match(action)) {
    return {
      ...state,
      categories: action.payload,
      isLoading: false,
    };
  }

  if (fetchCategoryFaild.match(action)) {
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    };
  }
  return state;
};
